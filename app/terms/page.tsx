import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <section className="legal-hero">
          <p className="page-kicker">Legal</p>
          <h1>Terms and Conditions</h1>
          <p>Last updated: June 11, 2026</p>
        </section>

        <section className="legal-content">
          <h2>1. Acceptance</h2>
          <p>
            By using Huzlla, you agree to these Terms and any policies referenced
            by them. If you do not agree, do not use the service.
          </p>

          <h2>2. The service</h2>
          <p>
            Huzlla helps employers connect with workers for on-demand labour.
            We may support matching, verification, payments, check-ins, ratings,
            and job records.
          </p>

          <h2>3. User responsibilities</h2>
          <p>
            Users must provide accurate information, follow applicable laws,
            treat others fairly, and avoid fraudulent, unsafe, abusive, or
            misleading activity.
          </p>

          <h2>4. Payments and disputes</h2>
          <p>
            Payment terms may vary by job and market. Where escrow or payment
            protection is available, funds may be held and released according to
            job confirmation, dispute, and platform rules.
          </p>

          <h2>5. Platform changes</h2>
          <p>
            We may update, suspend, or discontinue parts of the service as the
            platform develops, including features, markets, fees, or eligibility
            requirements.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Huzlla is not liable for
            indirect losses, lost profits, or issues outside our reasonable
            control.
          </p>

          <h2>7. Contact</h2>
          <p>
            For terms questions, contact us at{" "}
            <a href="mailto:hello@huzlla.co">hello@huzlla.co</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
