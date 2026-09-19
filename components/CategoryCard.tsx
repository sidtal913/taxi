"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeartIcon, PlusCircleIcon, UsersIcon } from "./icons";

export type TaxiCategory = {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  currency: string;
  capacity: number;
  etaMinutes: number;
  image: string;
};

type CategoryCardProps = {
  category: TaxiCategory;
  selected: boolean;
  wishlisted: boolean;
  onSelect: () => void;
  onWishlistToggle: () => void;
  onQuickSelect: () => void;
};

export function CategoryCard({
  category,
  selected,
  wishlisted,
  onSelect,
  onWishlistToggle,
  onQuickSelect,
}: CategoryCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      layout
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`${category.name}, from $${category.priceFrom.toFixed(2)}, up to ${category.capacity} passengers`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "96px 1fr auto",
        gap: "var(--space-control)",
        alignItems: "center",
        padding: "var(--space-control)",
        borderRadius: "var(--radius-md)",
        border: selected
          ? "2px solid var(--color-accent)"
          : "1px solid var(--color-border)",
        background: selected ? "var(--color-surface-elevated)" : "var(--color-surface)",
        cursor: "pointer",
        transition: "border-color 200ms var(--ease-out), background 200ms var(--ease-out)",
      }}
      className="category-card"
    >
      <div
        className="category-card-image"
        style={{
          position: "relative",
          width: 96,
          height: 64,
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
          background: "var(--color-surface-elevated)",
        }}
      >
        <Image
          src={category.image}
          alt={`${category.name} vehicle`}
          fill
          sizes="96px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-1)" }}>
          <h3 className="type-section-title" style={{ fontSize: "1.0625rem", margin: 0 }}>
            {category.name}
          </h3>
          <span className="type-metadata">~{category.etaMinutes} min</span>
        </div>
        <p
          style={{
            margin: "var(--space-micro) 0 0",
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {category.description}
        </p>
        <div
          style={{
            marginTop: "var(--space-1)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-control)",
            fontSize: "0.8125rem",
          }}
        >
          <span style={{ fontWeight: 600, color: "var(--color-accent)" }}>
            From ${category.priceFrom.toFixed(2)}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-micro)",
              color: "var(--color-text-muted)",
            }}
          >
            <UsersIcon />
            {category.capacity}
          </span>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <motion.button
          type="button"
          aria-label={wishlisted ? `Remove ${category.name} from saved rides` : `Save ${category.name}`}
          aria-pressed={wishlisted}
          onClick={onWishlistToggle}
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-sm)",
            background: wishlisted ? "rgba(245, 197, 24, 0.15)" : "transparent",
            color: wishlisted ? "var(--color-accent)" : "var(--color-text-muted)",
            cursor: "pointer",
          }}
        >
          <HeartIcon filled={wishlisted} />
        </motion.button>
        <motion.button
          type="button"
          aria-label={`Quick select ${category.name}`}
          onClick={onQuickSelect}
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            border: "none",
            borderRadius: "var(--radius-sm)",
            background: "var(--color-accent)",
            color: "#0c0f14",
            cursor: "pointer",
          }}
        >
          <PlusCircleIcon />
        </motion.button>
      </div>
    </motion.article>
  );
}
