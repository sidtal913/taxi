"use client";

import Link from "next/link";
import { TaxiLogo } from "./icons";

const navItems = [
  { href: "/", label: "Book" },
  { href: "/?view=rides", label: "Rides" },
  { href: "/?view=help", label: "Help" },
] as const;

export function AppHeader() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <Link
        href="/"
        aria-label="Mobile Taxi home"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          color: "inherit",
          minHeight: 44,
        }}
      >
        <TaxiLogo />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.125rem",
            letterSpacing: "-0.02em",
          }}
        >
          Mobile Taxi
        </span>
      </Link>
      <nav aria-label="Primary">
        <ul
          style={{
            display: "flex",
            gap: 4,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  minWidth: 44,
                  padding: "0 10px",
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
