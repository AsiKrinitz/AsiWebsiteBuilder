import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <h2>כל הזכויות שמורות לאסי קריניץ</h2>

      <ul className="social-links">
        <li>
          <a
            href="https://www.facebook.com/ShahafKrinitz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            פייסבוק&nbsp;
            <img alt="Facebook icon" src="Facebook_logo.png" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/asikrinitz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            אינסטגרם&nbsp;
            <img alt="Instagram icon" src="Instagram_logo.png" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/asi-krinitz-25351223b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            לינקדאין&nbsp;
            <img alt="LinkedIn icon" src="Linkedin_logo.png" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
