import Hero from "@/components/layouts/hero";
import Cloud from "@/components/layouts/cloud";
import Services from "@/components/layouts/services";
import CTA from "@/components/layouts/cta";
import CaseStudy from "@/components/layouts/case-study";
import Process from "@/components/layouts/process";
import Teams from "@/components/layouts/teams";
import Reviews from "@/components/layouts/review";
import Contact from "@/components/layouts/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <Cloud />
      <Services />
      <CTA />
      <CaseStudy />
      <Process />
      <Teams />
      <Reviews />
      <Contact />
    </main>
  );
}
