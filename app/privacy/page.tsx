import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "./Motion";
import ProgressBar from "@/components/ProgressBar";
import "../../styles/privacy.css";

export const metadata: Metadata = {
  title: "Privacy Policy | akaani",
  description: "How akaani collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <ProgressBar />
      <Motion />

      <main className="py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <section className="lg">
      <div className="lg__head">
        <p className="section-head__kicker">Legal</p>
        <h1>We care about your privacy.</h1>
        <div className="lg__meta"><span className="lg__badge">Last updated · July 2026</span><span>Questions? <a href="/about#contact" style={{color: "var(--accent)", fontWeight: "600"}}>Contact us</a></span></div>
      </div>
    </section>

    <section className="lgwrap">
      <div className="lgwrap__inner">
        <nav className="lgtoc" aria-label="On this page">
          <a href="#p1">1. The data we collect</a>
          <a href="#p2">2. Other ways we collect information</a>
          <a href="#p3">3. How we use information</a>
          <a href="#p4">4. Your choices and opting-out</a>
          <a href="#p5">5. Email & telephone communications</a>
          <a href="#p6">6. Mobile devices</a>
          <a href="#p7">7. Accessing your personal information</a>
          <a href="#p8">8. Retention and/or deletion</a>
          <a href="#p9">9. Security</a>
        </nav>
        <div className="lgbody" id="lgBody">
<section id="p1"><h2><span className="num">1.</span>The data we collect</h2>
<p>akaani collects personal data: provided by users, such as during account creation; created during use of our services, such as location, app usage, and device data. Wherever akaani collects Personal Information, we endeavor to provide a link to this Privacy Policy and other relevant terms, such as our <a href="/terms">Terms of Use</a>.</p>
<h3><span className="num">1.1</span>Information We Collect from Users</h3>
<p>We only collect personal information from you when you order for services on our App, when you complete any customer survey or through cookies. We collect Personal Information from Users including but not limited to your: first name, last name, e-mail address, telephone number, state, Internet Protocol address, birth date.</p>
<h3><span className="num">1.2</span>Information Regarding Children</h3>
<p>Due to the nature of our business, our Services are not made available to minors. Except for beneficiary information as described below, akaani does not knowingly solicit Personal Information directly from or about persons under the age of 16. If you are under the age of 16, please do not submit any Personal Information to akaani. If a parent or guardian becomes aware that his or her child under the age of 16 has directly provided us with Personal Information without his or her consent, he or she should contact us, and we will use commercially reasonable efforts to delete that information from our files unless regulatory obligations prevent us from doing so.</p></section>

<section id="p2"><h2><span className="num">2.</span>Other Ways We Collect Information</h2>
<p>Other means by which we collect Personal Information include the following:</p>
<ul><li><b>Automatic Data Collection.</b> We may collect certain information when you use our Services. This information may include your Internet protocol ("IP") address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, details about your browser, operating system or device, location information, internet service provider, pages that you visit before, during and after using the Services, information about the links you click, and other information about how you use the Services. Information we collect may be associated with accounts and other devices connected.</li>
<li><b>Aggregated Information.</b> We may record partially anonymised or aggregated information about your use or evaluation of our Services. Anonymised or aggregated information is used for a variety of purposes including the measurement of Users' and Clients' interest in and use of various portions or features of the Site and App. Anonymised or aggregated information is not Personal Information.</li>
<li><b>Log Data.</b> When you use our Services, our servers automatically record certain data and research.</li>
<li><b>Cookies and Pixels.</b> Similar to other consumer internet services, akaani uses cookies or small pieces of text files that enable our Web servers to "identify" Users and Clients, each time they initiate a session on our Site. A cookie is set in order to identify you and tailor the Site to you. We use a session to remember your IP address so that you can save time when coming back to our website. Cookies do not collect information stored on your computer or in your files. Cookies are unique identifiers. You may delete cookie files from your hard drive at any time through your browser settings. However cookies may be necessary to preserve access to much of the content and many of the features of the Site.</li>
<li><b>Pixel Tags.</b> Along with cookies, we may use "pixel tags" (also known as "web beacons", which are small graphic files with a unique identifier, embedded invisibly on a Web page) to track information such as the IP address of the computer that downloaded the page on which the tag appears, the URL of the page on which the pixel tag appears, the time the page containing the pixel tag was viewed, the type of browser that fetched the pixel tag, and the identification number of any cookie on the computer previously placed by that server.</li>
<li><b>Site and App Activity.</b> akaani may also use third party tracking technology, such as Mixpanel, to record similar information regarding the way in which Users interact with the Site, App and Services. We may also record general information about your online activities over time and across different websites or online services. The Site does not respond to Do Not Track ("DNT") signals. We do not knowingly authorize third parties to collect Personal Information about your online activities over time and across different websites or online services.</li>
<li><b>Surveys.</b> We may contact you to participate in surveys. If you decide to participate, you may be asked to provide certain information which may include Personal Information.</li></ul></section>

<section id="p3"><h2><span className="num">3.</span>How we use Information</h2>
<div className="callout"><b>No sharing, selling, or renting our list.</b> We will never rent, sell or trade your Personal Information to anyone. Ever.</div>
<h3><span className="num">3.1</span>User Personal Information</h3>
<p>We use your Personal Information for a variety of business purposes, such as to help you access our Services, offer you new products or services, enhance our Services, and for research and internal analysis.</p>
<h3><span className="num">3.2</span>Client Personal Information</h3>
<p>akaani stores, processes, and maintains the Personal Information related to you for a variety of business reasons such as to provide client support, onboard and improve our Services, offer new products or services. As a User, you may choose not to provide such information to us, but if you choose not to provide such information, you will not be able to become a User.</p>
<h3><span className="num">3.3</span>Information Sharing and Onward Transfer</h3>
<p>We will not share or disclose your Personal Information (whether you are a current or former User) to any non-affiliated third parties except: <b>To Protect Ourselves or Others.</b> We may disclose your Personal Information to third parties when we reasonably believe it is necessary or appropriate to investigate, prevent, or take action regarding illegal activities, suspected fraud, or situations involving potential threats to the personal safety of any person; if we believe doing so is required or appropriate to comply with law enforcement or national security requests and legal processes, such as a court order or subpoena; to protect your own or others' rights, property, or safety; enforce our policies or agreements; collect amounts owed to us. akaani may transfer to and process Personal Information among affiliated akaani entities in connection with the provision of Services to users.</p></section>

<section id="p4"><h2><span className="num">4.</span>Your Choices and Opting-Out</h2>
<p><b>General.</b> You have certain choices about the use and disclosure of your Personal Information, as set out in this Privacy Policy. You may decline to provide Personal Information to akaani. Declining to provide Personal Information may disqualify you from using akaani Services, Site, and App features that require certain Personal Information.</p>
<h3><span className="num">4.1</span>Opting-Out. Obtaining and Withdrawing Consent</h3>
<p>When you have consented to akaani's use of your Personal Information, you may withdraw that consent at any time and opt-out of future use by submitting a physical mail to the contacts indicated under the "Contact Us" section below. Users must opt-out of providing akaani Personal Information to continue to use the Services. Users must close their accounts in order to opt-out of providing akaani with Personal Information. Additionally, before we use Personal Information for any new purpose we will provide information regarding the new purpose.</p></section>

<section id="p5"><h2><span className="num">5.</span>Email and Telephone Communications</h2>
<p>akaani may use your Personal Information to communicate with you regarding our Services or to tell you about features or Services that we believe will be of interest to you. If you no longer wish to receive these communications, you may opt-out of communications from us; please follow the "unsubscribe" instructions provided in the communication. Please note that even if you unsubscribe, we may still send you non-consent opt-out administrative communications such as regulatory, billing, or service notifications, or updates to our Terms or this Privacy Policy. We process requests to be placed on do-not-mail, do-not-phone, and do-not-contact lists as required by applicable law and regulation.</p></section>

<section id="p6"><h2><span className="num">6.</span>Mobile Devices</h2>
<p>We may send you push notifications through our mobile application. You may at any time opt-in from receiving these types of communications by changing the settings on your mobile device. We may also collect location-based information if you use our mobile applications. You may opt-out of this collection by changing the settings on your mobile device.</p></section>

<section id="p7"><h2><span className="num">7.</span>Accessing Your Personal Information</h2>
<p>Users or Clients may contact us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a> to request information about how to access your Personal Information. Users and Clients can amend their Personal Information at any time by signing in to their akaani account via our Site or App. Your requests will be processed in line with applicable laws, including without undue delay and in accordance with any required time frames.</p></section>

<section id="p8"><h2><span className="num">8.</span>Retention and/or Deletion</h2>
<p>akaani retains the Personal Information we receive as described in this Privacy Policy for as long as you use our Site, App or Services or as necessary to fulfill the purpose(s) for which it was collected, provide our products and services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, or as otherwise required by law and to comply with all applicable laws. Users may request information regarding the Personal Information we have collected from you (we have 30 days to respond). <b>Deletion of Personal Information:</b> by contacting us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a> and providing information to identify and verify that you are the assigned account representative, you can request that your account is removed or de-identified.</p></section>

<section id="p9"><h2><span className="num">9.</span>Security</h2>
<p>akaani takes reasonable steps, endeavoring to use appropriate technical or organisational measures, to protect your Personal Information from loss, misuse, and unauthorized access, disclosure, alteration and destruction, taking into account the nature of the data, and the risks involved. We use a secure server and electronic operating system that enables the transmission of data entered by visitors to arrive safely; however we cannot ensure or warrant the security of any information you transmit to us.</p></section>
        </div>
      </div>
    </section>
    </div>
      </main>

      <Footer giant="akaani" />
    </>
  );
}
