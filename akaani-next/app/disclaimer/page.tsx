import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "./Motion";
import ProgressBar from "@/components/ProgressBar";
import "../../styles/disclaimer.css";

export const metadata: Metadata = {
  title: "Disclaimer | akaani",
  description: "akaani provides nutritional guidance for informational purposes only and is not a substitute for medical advice.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Nav ctaLabel="Get the app" ctaHref="/#cta" />
      <ProgressBar />
      <Motion />

      <main>

    <section className="lg">
      <div className="lg__head">
        <p className="section-head__kicker">Legal</p>
        <h1>Disclaimer</h1>
        <div className="lg__meta"><span className="lg__badge">Last updated · July 2026</span><span>Questions? <a href="/contact" style={{color: "var(--accent)", fontWeight: "600"}}>Contact us</a></span></div>
      </div>
    </section>

    <section className="lgwrap">
      <div className="lgwrap__inner">

        <div className="lgbody" id="lgBody">
<p className="lead">akaani provides AI-powered food recommendations based on user inputs such as dietary preferences, allergies, and lifestyle choices. Our system is built using nutritional data and established dietary guidelines to promote healthier eating habits and informed food choices.</p>
<p>While we aim to deliver accurate and helpful insights, akaani is not a licensed medical service and does not provide medical diagnosis, treatment, or personalized medical advice. Our recommendations are intended for informational and lifestyle support purposes only and should not be used as a substitute for consultation with qualified healthcare professionals, including doctors, dieticians, or nutritionists.</p>
<div className="callout"><b>Please note:</b> Users are strongly advised to seek professional medical guidance before making significant dietary changes, especially if managing existing health conditions such as hypertension, diabetes, or other medical concerns. akaani should not be relied upon in emergencies or urgent health situations.</div>
<p>The content and recommendations provided on akaani do not represent a complete or exhaustive guide to nutrition, health, or medical care. By using akaani, you agree to our <a href="/privacy">Privacy Policy</a>.</p>
        </div>
      </div>
    </section>
      </main>

      <Footer giant="akaani" />
    </>
  );
}
