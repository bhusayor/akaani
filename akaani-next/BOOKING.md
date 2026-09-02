# Dietitian booking flow

Implements section 7 of the *akaani Dietitian Scheduling MVP* guide. The
backend described in sections 5 and 6 does not exist yet, so everything under
`app/api/consultations/` is a **mock** standing in for it.

## Routes

| Route | What it is |
|---|---|
| `/dietitian/book` | Steps 1 to 3: pick a time, details, review and pay |
| `/dietitian/book/confirm?id=&t=` | Step 4: polls until the backend settles |
| `/booking/{id}?t=` | Manage: view, reschedule, cancel |

## Replacing the mock

The UI only ever calls `lib/booking.ts`. Point `NEXT_PUBLIC_BOOKING_API` at the
real service and delete `app/api/consultations/` and `lib/mockStore.ts`.
Nothing else changes, provided the real endpoints keep these shapes.

| Frontend action | Route | Notes |
|---|---|---|
| Load slots | `GET /consultations/availability?from=&days=&timezone=` | `{ timezone, days: [{ date, timezone, slots: ["09:00"] }] }` |
| Start checkout | `POST /consultations/checkout` | returns `{ consultation_id, checkout_url }`; `checkout_url` is the Stripe Session URL in production |
| Check status | `GET /consultations/{id}?t=` | returns the consultation; **403 without a valid token** |
| Reschedule | `POST /consultations/{id}/reschedule` | `{ selected_start_time, timezone, token }` |
| Cancel | `POST /consultations/{id}/cancel` | `{ token }` |

## Things the real backend must keep

- **The token gates reads, not just writes.** The site has no accounts, so the
  signed token in the confirmation email is the ownership check section 6.6
  asks for. Without it on `GET`, the consultation id alone exposes the
  customer's name, email and appointment.
- **The confirmation screen polls and will not say "booked" on the Stripe
  redirect alone** (section 7.3 step 61). It waits for `BOOKING_CONFIRMED`.
- **`PAID_BOOKING_ATTENTION` is rendered.** Section 6.5's race is a real screen,
  not a TODO: it tells the customer their payment went through, that the slot
  went, and that nobody has rebooked them elsewhere.
- **`can_reschedule` / `can_cancel` come from the backend.** The UI shows or
  hides the actions on those flags rather than computing the window itself.

## Deliberately faked, and how

- Availability is deterministic from the date, so the UI is stable across
  reloads. Sundays are closed and roughly one day in seven is full, so the
  empty states get exercised.
- `?simulate=fail` and `?simulate=empty` on the availability route drive the
  error and no-availability states.
- Payment settles after 2.5s so the polling state is real rather than skipped,
  and one booking in twenty lands on the slot-taken path.

## Still to confirm before launch (guide section 10)

Duration (45 min), price (₦50,000 / $50) and the no-refund position are taken
from the live dietitian page. Defaulted and unconfirmed: the 24 hour
cancel/reschedule window, phone being optional, no extra intake fields, and
the meeting platform (the UI currently says the join link is emailed).

## Not on the static site

`dietitian.html` still points at Calendly. This flow needs a server for the API
routes, so it cannot run on the static mirror.
