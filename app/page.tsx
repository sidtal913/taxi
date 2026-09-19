import { HomeScreen } from "@/components/HomeScreen";

type PageProps = {
  searchParams: Promise<{ view?: string }>;
};

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  return <HomeScreen initialView={params.view} />;
}
