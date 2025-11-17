import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message"></textarea>

          <button className="btn">Send</button>
        </form>
      </div>
    </section>
  );
}
