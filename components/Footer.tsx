import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <Link href="/" className="footer-logo" aria-label="Huzlla home">
        Huzlla
      </Link>

      <ul className="footer-links">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
      </ul>

      <p className="footer-made">Ghana · Kenya · Nigeria · South Africa</p>
    </footer>
  );
}
