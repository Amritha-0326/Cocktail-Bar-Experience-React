
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <p><strong>Location:</strong></p>
          <p>123 X Fulton Market, New York, 10203</p>
        </div>

        <div className="footer-column">
          <p><strong>Hours of Operation:</strong></p>
          <p>MONDAY – FRIDAY 12PM – 11PM</p>
          <p>SATURDAY 3PM - 12PM</p>
        </div>

        <div className="footer-column">
          <p><strong>Contact:</strong></p>
          <p>hello@midnightmartini.com</p>
          <p>@nymidnightmartini</p>
        </div>
      </div>

      <p className="footer-copyright">
        © 2026 MIDNIGHT MARTINI. All Rights Reserved.
      </p>
    </footer>
  );
}


