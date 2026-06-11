import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <section className="legal-hero">
          <p className="page-kicker">Legal</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: June 11, 2026</p>
        </section>

        <section className="legal-content">
          <h2>1. Information we collect</h2>
          <p>
            We may collect contact details, account information, identity
            verification details, job information, payment records, device data,
            and communications you send to Huzlla.
          </p>

          <h2>2. How we use information</h2>
          <p>
            We use information to provide the platform, verify users, match jobs,
            process payments, improve safety, prevent fraud, provide support,
            and communicate service updates.
          </p>

          <h2>3. Sharing information</h2>
          <p>
            We share information where needed with employers, workers, payment
            providers, verification partners, service providers, legal
            authorities, or when required to protect Huzlla and its users.
          </p>

          <h2>4. Data retention</h2>
          <p>
            We keep information for as long as needed to provide services, meet
            legal obligations, resolve disputes, and maintain safety records.
          </p>

          <h2>5. Your choices</h2>
          <p>
            You may request access, correction, deletion, or restriction of your
            personal information, subject to legal and operational limits.
          </p>

          <h2>6. Contact</h2>
          <p>
            For privacy questions, contact us at{" "}
            <a href="mailto:hello@huzlla.co">hello@huzlla.co</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
