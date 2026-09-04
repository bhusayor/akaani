import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "./Motion";
import ProgressBar from "@/components/ProgressBar";
import "../../styles/terms.css";

export const metadata: Metadata = {
  title: "Terms of Service | akaani",
  description: "The terms that govern your use of the akaani app, recipe bundles and services.",
};

export default function TermsPage() {
  return (
    <>
      <Nav ctaLabel="Get app" ctaHref="/#cta" />
      <ProgressBar />
      <Motion />

      <main className="py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <section className="lg">
      <div className="lg__head">
        <p className="section-head__kicker">Legal</p>
        <h1>Terms of Service</h1>
        <div className="lg__meta"><span className="lg__badge">Last updated · July 2026</span><span>Questions? <a href="/about#contact" style={{color: "var(--accent)", fontWeight: "600"}}>Contact us</a></span></div>
      </div>
    </section>

    <section className="lgwrap">
      <div className="lgwrap__inner">
        <nav className="lgtoc" aria-label="On this page">
          <a href="#s1">1. About Akaani</a>
          <a href="#s2">2. Acceptance of Terms</a>
          <a href="#s3">3. Eligibility</a>
          <a href="#s4">4. App. Subscription Terms</a>
          <a href="#s5">5. Recipe Bundle Shop</a>
          <a href="#s6">6. User Accounts</a>
          <a href="#s7">7. Intellectual Property</a>
          <a href="#s8">8. Prohibited Conduct</a>
          <a href="#s9">9. Disclaimer of Warranties</a>
          <a href="#s10">10. Limitation of Liability</a>
          <a href="#s11">11. Privacy & Data</a>
          <a href="#s12">12. Governing Law</a>
          <a href="#s13">13. Termination</a>
          <a href="#s14">14. Changes to These Terms</a>
          <a href="#s15">15. Contact Us</a>
        </nav>
        <div className="lgbody" id="lgBody">
<section id="s1"><h2><span className="num">1.</span>About Akaani</h2>
<p>Akaani is a food technology company offering products and services that help users track macros for Nigerian and African meals and access curated recipe content. Akaani operates under dual incorporation in the United States and the Federal Republic of Nigeria. Depending on your location and the product you are using, your relationship may be with Akaani Inc. (US entity) or RES Technologies (Nigerian entity), or both.</p>
<ul><li><b>Akaani App</b>. A mobile application for macro tracking and AI-assisted meal planning, available on iOS and Android.</li>
<li><b>Recipe Bundle Shop</b>. A collection of downloadable Nigerian recipe PDFs organised by fitness goal, sold as one-time digital purchases.</li></ul></section>

<section id="s2"><h2><span className="num">2.</span>Acceptance of Terms</h2>
<p>By accessing or using any Akaani product or service, including visiting useakaani.com, downloading the Akaani app, or purchasing a recipe bundle, you agree to be bound by these Terms of Service and our <a href="/privacy">Privacy Policy</a>. If you do not agree to these terms, you must not use our products or services. These terms apply to all users worldwide, including users in the United States, Nigeria, and all other jurisdictions. Where specific provisions apply to users in particular regions, this is noted clearly. We reserve the right to update these terms at any time. We will notify you of material changes by email or through an in-app notification. Continued use of our products after changes take effect constitutes acceptance of the updated terms.</p></section>

<section id="s3"><h2><span className="num">3.</span>Eligibility</h2>
<p>You must be at least 13 years of age to use Akaani products. If you are under 18, you must have the consent of a parent or legal guardian. We do not knowingly collect personal data from children under 13. If we become aware that a user is under 13, we will terminate their account and delete associated data.</p>
<p>By using Akaani products, you represent that:</p>
<ul><li>You are at least 13 years old.</li><li>You have the legal capacity to enter into a binding agreement.</li><li>Your use of our products does not violate any applicable law in your jurisdiction.</li></ul></section>

<section id="s4"><h2><span className="num">4.</span>Akaani App. Subscription Terms</h2>
<h3><span className="num">4.1</span>Free Trial</h3>
<p>New users are eligible for a 30-day free trial of the Akaani App. No credit card is required to begin the trial. At the end of the trial period, continued use of the app requires a paid subscription. You may cancel at any time during the trial without charge.</p>
<h3><span className="num">4.2</span>Subscription Plans</h3>
<p>The Akaani App is available on the following subscription plans. Prices are displayed in US dollars. Users outside the United States may be charged in their local currency at the prevailing exchange rate set by their payment provider.</p>
<ul><li><b>Monthly</b>, $6.99 per month. Billed monthly.</li>
<li><b>Annual</b>, $49.99 per year. Billed annually. Represents a saving compared to the monthly plan.</li></ul>
<h3><span className="num">4.3</span>Billing &amp; Renewal</h3>
<p>Subscriptions renew automatically at the end of each billing period unless cancelled before the renewal date. You authorise Akaani to charge your payment method on file at the start of each renewal period. You will receive a reminder before your annual subscription renews.</p>
<h3><span className="num">4.4</span>Cancellation</h3>
<p>You may cancel your subscription at any time through your account settings or by contacting us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a>. Cancellation takes effect at the end of your current billing period. You will retain access to the app until then. We do not provide refunds for partially used subscription periods, except where required by applicable law.</p>
<h3><span className="num">4.5</span>App Availability</h3>
<p>The Akaani App is available on iOS and Android devices. We do not guarantee uninterrupted availability of the app and may carry out maintenance or updates that temporarily affect access. We will endeavour to give reasonable notice of planned downtime.</p>
<h3><span className="num">4.6</span>AI Assistant. Lu</h3>
<p>The Akaani App includes an AI-powered meal assistant named Lu. Lu provides nutritional information, meal suggestions, and recipe guidance based on inputs you provide. Lu's responses are generated by an AI model and are intended for informational and planning purposes only. Lu is not a registered dietitian, nutritionist, or medical professional. Nothing Lu tells you constitutes medical, dietary, or clinical advice. You should consult a qualified health professional before making significant changes to your diet, particularly if you have a medical condition, allergy, or specific dietary requirement. Akaani does not guarantee the accuracy or completeness of nutritional data provided through the app or by Lu. Macro and calorie data is based on standard nutritional databases and may vary from the actual nutritional content of meals prepared at home.</p></section>

<section id="s5"><h2><span className="num">5.</span>Recipe Bundle Shop. Digital Purchase Terms</h2>
<h3><span className="num">5.1</span>What You Are Buying</h3>
<p>When you purchase a recipe bundle from the Akaani Recipe Bundle Shop, you are purchasing a non-exclusive, non-transferable, personal licence to access and use the digital PDF content for personal, non-commercial purposes only. You are not purchasing ownership of the content. All intellectual property rights in the recipe bundles, including recipes, nutritional data, written content, design, and branding, remain the exclusive property of Akaani.</p>
<h3><span className="num">5.2</span>Permitted Use</h3>
<p>You may:</p>
<ul><li>Download and save the PDF for your personal use.</li><li>Print one copy for your personal use.</li><li>Use the recipes contained in the bundle to prepare meals for yourself and your household.</li></ul>
<h3><span className="num">5.3</span>Prohibited Use</h3>
<p>You may not:</p>
<ul className="neg"><li>Share, resell, sublicense, or distribute the PDF or any part of it to any third party.</li>
<li>Upload the PDF to any file-sharing platform, social media account, group chat, or any public or private network.</li>
<li>Reproduce any recipe, nutritional data, or written content from the bundle on any website, blog, or publication without the prior written consent of Akaani.</li>
<li>Use the bundle or any part of it for commercial purposes, including cooking classes, catering, or content creation for profit.</li></ul>
<h3><span className="num">5.4</span>Personalisation &amp; Traceability</h3>
<p>Each recipe bundle is uniquely generated and personalised to the purchaser at the time of download. Your purchase details, including your name, are embedded in the document. Akaani reserves the right to trace and act on unauthorised distribution of its content.</p>
<h3><span className="num">5.5</span>Refunds on Digital Products</h3>
<p>Because recipe bundles are digital products that are delivered immediately upon purchase, all sales are final and non-refundable, except where required by applicable consumer protection law. If you experience a technical issue that prevents you from accessing your download, please contact us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a> within 7 days of purchase and we will resolve the issue or issue a replacement download.</p>
<h3><span className="num">5.6</span>Accuracy of Nutritional Data</h3>
<p>Nutritional data included in recipe bundles is based on standard food composition databases and is provided for informational and meal planning purposes only. Actual nutritional values may vary depending on ingredient brands, preparation methods, and serving sizes. Akaani does not warrant the accuracy of nutritional information for medical or clinical purposes.</p></section>

<section id="s6"><h2><span className="num">6.</span>User Accounts</h2>
<p>To access certain features of Akaani products, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Akaani is not liable for any loss or damage arising from your failure to maintain the security of your account credentials. We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or are inactive for an extended period.</p>
<p>You agree to:</p>
<ul><li>Provide accurate and complete information when creating your account.</li><li>Keep your password secure and not share it with anyone.</li><li>Notify us immediately at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a> if you suspect unauthorised access to your account.</li></ul></section>

<section id="s7"><h2><span className="num">7.</span>Intellectual Property</h2>
<p>All content on the Akaani platform, including the app, website, recipe bundles, nutritional data, AI assistant, branding, logos, design, written content, and software, is the intellectual property of Akaani and its founders, and is protected by copyright, trademark, and other applicable intellectual property laws in the United States, Nigeria, and internationally. Nothing in these terms transfers any intellectual property rights to you. Your use of Akaani products does not grant you any right to use the Akaani name, logo, or any other brand element without our prior written consent. If you believe any content on our platform infringes your intellectual property rights, please contact us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a> with details of your claim.</p></section>

<section id="s8"><h2><span className="num">8.</span>Prohibited Conduct</h2>
<p>When using Akaani products, you agree not to engage in the following. Violation of these prohibitions may result in immediate suspension or termination of your access to Akaani products, without refund, and may expose you to civil or criminal liability.</p>
<ul className="neg"><li>Use our products for any unlawful purpose or in violation of any applicable law.</li>
<li>Attempt to gain unauthorised access to any part of our platform, systems, or data.</li>
<li>Reverse engineer, decompile, or otherwise attempt to extract the source code of the Akaani app.</li>
<li>Use automated tools, bots, or scrapers to access or collect data from our platform.</li>
<li>Reproduce, distribute, or commercially exploit any Akaani content without written permission.</li>
<li>Impersonate Akaani, its founders, employees, or any other person or entity.</li>
<li>Upload or transmit any content that is harmful, offensive, defamatory, or infringes third-party rights.</li>
<li>Interfere with or disrupt the integrity or performance of our platform or services.</li></ul></section>

<section id="s9"><h2><span className="num">9.</span>Disclaimer of Warranties</h2>
<p>Akaani products are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. To the fullest extent permitted by applicable law, Akaani disclaims all liability for any harm resulting from your reliance on information provided through our products.</p>
<p>We do not warrant that:</p>
<ul className="neg"><li>Our products will be uninterrupted, error-free, or secure.</li>
<li>Any nutritional, macro, or calorie data provided through the app or recipe bundles is accurate, complete, or suitable for medical purposes.</li></ul></section>

<section id="s10"><h2><span className="num">10.</span>Limitation of Liability</h2>
<p>To the fullest extent permitted by applicable law, Akaani and its founders, officers, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our products. Our total liability to you for any claim arising from your use of Akaani products shall not exceed the amount you paid to Akaani in the 3 months preceding the claim. Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability is limited to the maximum extent permitted by law.</p>
<p>This includes, without limitation:</p>
<ul className="neg"><li>Loss of data or content.</li><li>Loss of revenue or profits.</li>
<li>Personal injury or health consequences arising from reliance on nutritional information provided through our products.</li>
<li>Damage resulting from unauthorised access to your account.</li></ul></section>

<section id="s11"><h2><span className="num">11.</span>Privacy &amp; Data</h2>
<p>Your use of Akaani products is subject to our <a href="/privacy">Privacy Policy</a>, which is incorporated into these terms by reference. By using our products, you consent to the collection, use, and processing of your personal data as described in the Privacy Policy. We collect and process personal data in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable to users in the European Economic Area, and the Nigeria Data Protection Regulation (NDPR) for users in Nigeria. For any data-related enquiries, please contact us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a>.</p></section>

<section id="s12"><h2><span className="num">12.</span>Governing Law &amp; Dispute Resolution</h2>
<h3><span className="num">12.1</span>US Users</h3>
<p>For users in the United States, these terms are governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of Akaani products shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, unless you opt out of arbitration within 30 days of first accepting these terms by notifying us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a>. CLASS ACTION WAIVER: To the extent permitted by law, you agree to resolve disputes with Akaani on an individual basis and waive any right to bring or participate in a class action lawsuit or class-wide arbitration.</p>
<h3><span className="num">12.2</span>Nigerian Users</h3>
<p>For users in Nigeria, these terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.</p>
<h3><span className="num">12.3</span>International Users</h3>
<p>For users outside the United States and Nigeria, these terms are governed by the laws of the State of Delaware, United States. We make no representation that our products are appropriate or available in all jurisdictions. You are responsible for compliance with local laws applicable to your use of our products.</p>
<h3><span className="num">12.4</span>Informal Resolution</h3>
<p>Before initiating any formal dispute resolution process, we encourage you to contact us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a> to seek an informal resolution. We will endeavour to respond within 10 business days.</p></section>

<section id="s13"><h2><span className="num">13.</span>Termination</h2>
<p>Akaani reserves the right to suspend or terminate your access to any or all of our products at any time, with or without notice. Upon termination, your right to use Akaani products ceases immediately. Provisions of these terms that by their nature should survive termination, including intellectual property, disclaimer of warranties, limitation of liability, and governing law, shall survive. You may terminate your account at any time by contacting us at <a href="mailto:hello@useakaani.com">hello@useakaani.com</a>. Termination of your account does not entitle you to a refund of any fees paid, except as expressly stated in these terms or required by applicable law.</p>
<p>Grounds for termination include:</p>
<ul className="neg"><li>Violation of these Terms of Service.</li><li>Fraudulent, abusive, or unlawful conduct.</li><li>Non-payment of fees.</li><li>Extended account inactivity.</li></ul></section>

<section id="s14"><h2><span className="num">14.</span>Changes to These Terms</h2>
<p>We may update these Terms of Service from time to time to reflect changes in our products, business practices, or applicable law. Your continued use of Akaani products after the effective date of updated terms constitutes your acceptance of those terms. If you do not agree to updated terms, you must stop using our products and cancel any active subscriptions.</p>
<p>We will notify you of material changes by:</p>
<ul><li>Sending an email to the address associated with your account.</li><li>Displaying a prominent notice within the Akaani app.</li><li>Updating the "Last updated" date at the top of this document.</li></ul></section>

<section id="s15"><h2><span className="num">15.</span>Contact Us</h2>
<p>If you have any questions about these Terms of Service, please contact us. We aim to respond to all enquiries within 5 business days.</p>
<div className="callout"><b>Email:</b> <a href="mailto:hello@useakaani.com">hello@useakaani.com</a><br /><b>Website:</b> useakaani.com<br /><b>US entity:</b> Akaani Inc.<br /><b>Nigeria entity:</b> RES Technologies</div></section>
        </div>
      </div>
    </section>
    </div>
      </main>

      <Footer giant="akaani" />
    </>
  );
}
