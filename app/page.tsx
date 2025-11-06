import Hero from "@/components/section/Hero";
import Skills from "@/components/section/Skills";
import Testimonial from "@/components/section/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-background" >
      <Hero/>
      <Skills/>
      <Testimonial/>
    </main>
  );
}
