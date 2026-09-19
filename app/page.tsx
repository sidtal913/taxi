import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { HomeBooking } from "@/components/HomeBooking";

type PageProps = {
  searchParams: Promise<{ view?: string }>;
};

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="app-shell">
      <AppHeader />

      <section
        className="home-hero"
        aria-label="City hero"
        style={{
          backgroundImage: "url(/images/hero-city-taxi.jpg)",
        }}
      >
        <Image
          src="/images/hero-city-taxi.jpg"
          alt="Yellow taxi on a city street at dusk"
          width={1200}
          height={800}
          priority
          fetchPriority="high"
          sizes="(max-width: 430px) 100vw, 430px"
          className="home-hero__photo"
        />
        <div className="home-hero__overlay" aria-hidden />
        <div className="home-hero__copy">
          <p
            className="text-xs uppercase tracking-widest"
            style={{
              fontSize: "0.75rem",
              lineHeight: 1.3,
              letterSpacing: "0.12em",
              fontWeight: 600,
              textTransform: "uppercase",
              fontFamily: "var(--font-ui)",
              color: "var(--color-accent)",
              margin: 0,
            }}
          >
            Ride in minutes
          </p>
          <p
            className="text-3xl font-extrabold"
            style={{
              fontSize: "clamp(1.75rem, 7vw, 2.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              fontWeight: 800,
              fontFamily: "var(--font-display)",
              color: "var(--color-accent)",
              margin: 0,
            }}
          >
            Mobile Taxi
          </p>
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.125rem, 10vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              margin: 0,
            }}
          >
            Where to tonight?
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 3.5vw, 1.125rem)",
              lineHeight: 1.45,
              fontWeight: 400,
              fontFamily: "var(--font-ui)",
              color: "rgba(244, 246, 248, 0.88)",
              margin: 0,
            }}
          >
            City-wide pickup. Four ride classes. Confirm in one tap.
          </p>
        </div>
      </section>

      <section aria-labelledby="home-type-intro" className="home-type-intro">
        <h2
          id="home-type-intro"
          className="text-2xl font-bold"
          style={{
            fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            margin: 0,
          }}
        >
          Your route, your ride
        </h2>
        <p
          className="text-sm"
          style={{
            fontSize: "0.8125rem",
            lineHeight: 1.4,
            fontWeight: 400,
            fontFamily: "var(--font-ui)",
            color: "var(--color-text-muted)",
            margin: 0,
          }}
        >
          Set From and To, compare Luxe, Economy, Green, and Van — static fares for this
          demo.
        </p>
        <h3
          className="text-lg font-semibold"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.35,
            fontWeight: 600,
            fontFamily: "var(--font-display)",
            margin: 0,
          }}
        >
          Four tiers · one booking flow
        </h3>
      </section>

      <HomeBooking initialView={params.view} />
    </div>
  );
}
