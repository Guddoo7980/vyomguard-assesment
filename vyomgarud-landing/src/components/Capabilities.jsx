import "../styles/capabilities.css";

export default function Capabilities() {
  const items = [
    {
      title: "Long-Endurance UAVs",
      desc: "High-altitude drones built for extended missions and extreme climates."
    },
    {
      title: "AI-Autonomous Navigation",
      desc: "Next-gen autopilot with obstacle detection and precision routing."
    },
    {
      title: "Payload Systems",
      desc: "Modular payloads for surveillance, delivery, thermal imaging & more."
    },
    {
      title: "Defense-Grade Security",
      desc: "Encrypted communication & resilient fail-safe control systems."
    }
  ];

  return (
    <section id="capabilities">
      <div className="container">
        <h2 className="cap-heading">Capabilities</h2>
        <div className="cap-grid">
          {items.map((c, i) => (
            <div className="cap-card" key={i}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
