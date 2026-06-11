import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import CursorGlow from "@/components/CursorGlow";

const values = [
  {
    title: "Trust first",
    body: "Verification, ratings, and clear records help reduce uncertainty in everyday hiring.",
  },
  {
    title: "Worker dignity",
    body: "Workers should know the job, the pay, and the terms before they accept work.",
  },
  {
    title: "Local fit",
    body: "Huzlla is built around African labour markets, city by city and category by category.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ScrollAnimations />
      <CursorGlow />
      <Nav />
      <main className="page">
        <section className="page-hero page-hero--dark">
          <p className="page-kicker">About Huzlla</p>
          <h1>Making everyday work easier to find, hire, and pay for.</h1>
          <p>
            Huzlla connects employers with verified workers for practical,
            on-demand jobs across categories like cleaning, security,
            construction, driving, events, and domestic work.
          </p>
        </section>

        <section className="page-section page-grid">
          <div>
            <p className="section-label">What we do</p>
            <h2>We bring structure to informal hiring.</h2>
          </div>
          <div className="page-copy">
            <p>
              Many skilled workers are hired through referrals, group chats, and
              phone calls. That can work, but it often leaves employers without
              verification and workers without clear payment protection.
            </p>
            <p>
              Huzlla creates a simpler path: post the work, choose a verified
              worker, confirm attendance, and keep a record of the job.
            </p>
          </div>
        </section>

        <section className="page-section page-band">
          {values.map((value) => (
            <article key={value.title} className="info-card reveal-up">
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
