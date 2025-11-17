import "./../styles/globals.css";

export default function Navbar() {
  return (
    <nav style={{
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#0f0f0f",
      borderBottom: "1px solid #222"
    }}>
      <h2 style={{ color: "#ff7b00" }}>VyomGarud</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <a style={{ color: "#fff" }} href="#about">About</a>
        <a style={{ color: "#fff" }} href="#capabilities">Capabilities</a>
        <a style={{ color: "#fff" }} href="#contact">Contact</a>
      </div>
    </nav>
  );
}
