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
          <p className="home-hero__eyebrow">Ride in minutes</p>
          <h1 className="home-hero__title">Where to tonight?</h1>
        </div>
      </section>

      <HomeBooking initialView={params.view} />
    </div>
  );
}
