"use client";

import { useCallback, useMemo, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CategoryCard, type TaxiCategory } from "./CategoryCard";
import { PinIcon } from "./icons";
import categoriesFixture from "@/data/taxi-categories.json";

type HomeBookingProps = {
  initialView?: string;
};

export function HomeBooking({ initialView }: HomeBookingProps) {
  const categories = categoriesFixture as TaxiCategory[];
  const reduceMotion = useReducedMotion();

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [selectedId, setSelectedId] = useState<string>("economy");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [bookFeedback, setBookFeedback] = useState<string | null>(null);

  const viewBanner = useMemo(() => {
    if (initialView === "rides") return "Your recent rides will appear here after your first trip.";
    if (initialView === "help") return "Need assistance? Email support@mobiletaxi.app — we respond within 24 hours.";
    return null;
  }, [initialView]);

  const selected = categories.find((c) => c.id === selectedId) ?? categories[0];

  const handleBook = useCallback(() => {
    const from = pickup.trim() || "Current location";
    const to = dropoff.trim() || "Add destination";
    setBookFeedback(
      `Booking ${selected.name} from “${from}” to “${to}” — estimate from $${selected.priceFrom.toFixed(2)} (mock, no API).`,
    );
  }, [dropoff, pickup, selected]);

  return (
    <>
      {viewBanner && (
        <p
          role="status"
          className="view-banner"
        >
          {viewBanner}
        </p>
      )}

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <section
          aria-labelledby="locations-heading"
          style={{ padding: "16px 16px 8px", flexShrink: 0 }}
        >
          <h2 id="locations-heading" className="visually-hidden">
            Pickup and dropoff
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: 16,
              borderRadius: "var(--radius-md)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
                From
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <PinIcon />
                <input
                  type="text"
                  name="pickup"
                  autoComplete="street-address"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  style={inputStyle}
                />
              </span>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
                To
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <PinIcon />
                <input
                  type="text"
                  name="dropoff"
                  autoComplete="street-address"
                  placeholder="Dropoff destination"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  style={inputStyle}
                />
              </span>
            </label>
          </div>
        </section>

        <section
          aria-labelledby="categories-heading"
          style={{ padding: "8px 16px 16px", flex: 1 }}
        >
          <h2
            id="categories-heading"
            style={{
              margin: "0 0 12px",
              fontFamily: "var(--font-display)",
              fontSize: "1.125rem",
              fontWeight: 700,
            }}
          >
            Choose your ride
          </h2>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {categories.map((category) => (
              <li key={category.id}>
                <CategoryCard
                  category={category}
                  selected={selectedId === category.id}
                  wishlisted={Boolean(wishlist[category.id])}
                  onSelect={() => setSelectedId(category.id)}
                  onWishlistToggle={() =>
                    setWishlist((prev) => ({
                      ...prev,
                      [category.id]: !prev[category.id],
                    }))
                  }
                  onQuickSelect={() => {
                    setSelectedId(category.id);
                    setBookFeedback(`${category.name} selected — tap Book Now to confirm.`);
                  }}
                />
              </li>
            ))}
          </ul>
        </section>

        <div
          style={{
            position: "sticky",
            bottom: 0,
            padding: "12px 16px 16px",
            background: "linear-gradient(180deg, transparent, var(--color-bg) 24%)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {bookFeedback && (
            <p
              role="status"
              style={{
                margin: "0 0 12px",
                fontSize: "0.8125rem",
                color: "var(--color-success)",
              }}
            >
              {bookFeedback}
            </p>
          )}
          <motion.button
            type="button"
            onClick={handleBook}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}
            style={{
              width: "100%",
              minHeight: 52,
              border: "none",
              borderRadius: "var(--radius-md)",
              background: "var(--color-accent)",
              color: "#0c0f14",
              fontFamily: "var(--font-display)",
              fontSize: "1.0625rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(245, 197, 24, 0.25)",
            }}
          >
            Book Now — {selected.name}
          </motion.button>
        </div>
      </main>

      <footer
        id="help"
        style={{
          padding: "20px 16px 24px",
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          fontSize: "0.8125rem",
          color: "var(--color-text-muted)",
        }}
      >
        <p style={{ margin: "0 0 8px", fontWeight: 600, color: "var(--color-text)" }}>
          Mobile Taxi
        </p>
        <p style={{ margin: 0 }}>
          Safe rides across the city · Licensed drivers · 24/7 support · v1.0.0 (fixture data only)
        </p>
      </footer>
    </>
  );
}

const inputStyle: CSSProperties = {
  flex: 1,
  minHeight: 44,
  padding: "10px 12px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--color-border)",
  background: "var(--color-surface-elevated)",
  color: "var(--color-text)",
  fontSize: "1rem",
  fontFamily: "var(--font-ui)",
};
