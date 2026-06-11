export default function Tension() {
  return (
    <section className="tension" aria-label="The problem we're solving">
      <span className="tension-bg-text" aria-hidden="true">AFRICA</span>

      <div className="tension-inner">
        <h2 className="tension-headline reveal-clip">
          Millions of skilled workers.{" "}
          <em>Zero good way to reach them.</em>
        </h2>

        <div className="tension-stat reveal-up">
          <div className="tension-stat-line" aria-hidden="true" />
          <p className="tension-stat-text">
            <strong>70%</strong> of Africa&apos;s workforce is informal: skilled,
            available, and hard to hire through trusted digital systems.
          </p>
        </div>
      </div>
    </section>
  );
}
