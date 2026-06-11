import IonIcon from "./IonIcon";

const problems = [
  {
    icon: "shield-outline",
    num: "01",
    title: "No trust layer",
    body: "Informal hiring often happens without ID checks, work history, or clear accountability.",
  },
  {
    icon: "wallet-outline",
    num: "02",
    title: "No payment safety",
    body: "Cash jobs leave workers and employers exposed when payment, receipts, or completion records are unclear.",
  },
  {
    icon: "flash-outline",
    num: "03",
    title: "No way to find help fast",
    body: "Urgent jobs still depend on phone chains instead of a simple system for finding available help.",
  },
];

export default function Problems() {
  return (
    <section className="problems" aria-label="The three core problems">
      <p className="section-label reveal-up">The broken status quo</p>
      <h2 className="section-title reveal-up" style={{ transitionDelay: "0.08s" }}>
        Three cracks in the system.
      </h2>

      <div className="problems-list">
        {problems.map((p) => (
          <div key={p.num} className="problem-row">
            <span className="problem-row-num" aria-hidden="true">{p.num}</span>
            <div className="problem-row-body-wrap">
              <IonIcon name={p.icon} className="problem-row-icon" />
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-body">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
