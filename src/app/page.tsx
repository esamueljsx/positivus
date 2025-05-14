import Hero from "@/components/layouts/hero";
import Cloud from "@/components/layouts/cloud";
import Services from "@/components/layouts/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <Cloud />
      <Services />
    </main>
  );
}
