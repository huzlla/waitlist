import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import CursorGlow from "@/components/CursorGlow";

export default function ContactPage() {
  return (
    <>
      <ScrollAnimations />
      <CursorGlow />
      <Nav />
      <main className="page">
        <section className="page-hero page-hero--dark">
          <p className="page-kicker">Contact</p>
          <h1>Talk to Huzlla.</h1>
          <p>
            Reach out for hiring, worker onboarding, partnerships, support, or
            market expansion conversations.
          </p>
        </section>

        <section className="page-section contact-grid">
          <div className="contact-card">
            <span>Email</span>
            <a href="mailto:hello@huzlla.co">hello@huzlla.co</a>
            <p>Best for general questions, support, and business enquiries.</p>
          </div>

          <div className="contact-card">
            <span>Markets</span>
            <strong>Ghana, Kenya, Nigeria, South Africa</strong>
            <p>Huzlla supports employers and workers across core urban labour categories.</p>
          </div>

          <div className="contact-card contact-card--wide">
            <span>What to include</span>
            <p>
              Share the job category, location, timing, number of workers, and
              whether the work is one-off or recurring.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
