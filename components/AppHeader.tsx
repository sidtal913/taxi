import Link from "next/link";
import { TaxiLogo } from "./icons";

const navItems = [
  { href: "/", label: "Book" },
  { href: "/?view=rides", label: "Rides" },
  { href: "/?view=help", label: "Help" },
] as const;

export function AppHeader() {
  return (
    <header className="app-header">
      <Link href="/" aria-label="Mobile Taxi home" className="app-header__brand">
        <TaxiLogo />
        <span className="type-section-title" style={{ fontSize: "1.125rem" }}>
          Mobile Taxi
        </span>
      </Link>
      <nav aria-label="Primary">
        <ul className="app-header__nav">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="app-header__nav-link"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-sm)",
                  transition: "color 180ms var(--ease-out), background 180ms var(--ease-out)",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
