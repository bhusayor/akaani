/** Fixed reading-progress bar; the page Motion component drives its scaleX. */
export default function ProgressBar({ className = "progress" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <i id="progressBar" />
    </div>
  );
}
