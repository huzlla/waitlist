import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact" aria-label="Contact Huzlla">
      <div className="contact-cta-watermark" aria-hidden="true">
        HUZLLA
      </div>

      <div className="contact-cta-inner">
        <div>
          <p className="section-label reveal-up">Ready to work</p>
          <h2 className="contact-cta-headline reveal-up">
            Hire verified help without the guesswork.
          </h2>
        </div>

        <div className="contact-cta-panel reveal-up" style={{ transitionDelay: "0.12s" }}>
          <p>
            Tell us what you need, where the work is, and when it needs to be
            done. The Huzlla team will help you get started.
          </p>
          <div className="contact-cta-actions">
            <Link href="/contact" className="hero-cta">
              Contact Us
            </Link>
            <a href="mailto:hello@huzlla.co" className="hero-cta-ghost hero-cta-ghost--dark">
              Email Huzlla
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
