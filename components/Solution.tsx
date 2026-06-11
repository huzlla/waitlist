const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Post a job in 60 seconds",
    body: "Set the role, location, schedule, and pay rate from one simple flow.",
  },
  {
    num: "02",
    icon: "🤝",
    title: "Match with a verified worker",
    body: "Review ID-verified profiles, ratings, location, and job history before you accept.",
  },
  {
    num: "03",
    icon: "✅",
    title: "Pay safe. Work confirmed.",
    body: "Escrow protects the payment while GPS check-in and confirmations record completion.",
  },
];

export default function Solution() {
  return (
    <section id="solution" aria-label="How Huzlla works">
      <div className="solution-header">
        <h2 className="solution-headline reveal-up">
          Done by noon.<br />Paid by 5.
        </h2>
        <p className="solution-sub reveal-up" style={{ transitionDelay: "0.12s" }}>
          Post a job. Get matched with a vetted worker. Pay safe when it&apos;s done.
        </p>
      </div>

      <div className="solution-steps">
        {steps.map((step) => (
          <div key={step.num} className="step">
            <span className="step-num" aria-hidden="true">
              {step.num}
            </span>
            <span className="step-icon" aria-hidden="true">
              {step.icon}
            </span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-body">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
