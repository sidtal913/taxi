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

      {/* Visual hierarchy: eyebrow → brand display → display headline → lead */}
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
          <p className="type-eyebrow">Ride in minutes</p>
          <p className="type-brand-display">Mobile Taxi</p>
          <h1 className="type-display">Where to tonight?</h1>
          <p className="type-lead">
            City-wide pickup. Four ride classes. Confirm in one tap.
          </p>
        </div>
      </section>

      <section aria-labelledby="home-type-intro" className="home-type-intro">
        <h2 id="home-type-intro" className="type-section-title">
          Your route, your ride
        </h2>
        <p className="type-metadata">
          Set From and To, compare Luxe, Economy, Green, and Van — static fares for
          this demo.
        </p>
      </section>

      <HomeBooking initialView={params.view} />
    </div>
  );
}
