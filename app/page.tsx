import Nav            from "@/components/Nav";
import Hero           from "@/components/Hero";
import Tension        from "@/components/Tension";
import Problems       from "@/components/Problems";
import Solution       from "@/components/Solution";
import Categories     from "@/components/Categories";
import Trust          from "@/components/Trust";
import ContactCTA     from "@/components/ContactCTA";
import Footer         from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import CursorGlow     from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      {/* Client: scroll reveal observer + cursor glow */}
      <ScrollAnimations />
      <CursorGlow />

      {/* Navigation */}
      <Nav />

      {/* Sections */}
      <main>
        <Hero />
        <Tension />
        <Problems />
        <Solution />
        <Categories />
        <Trust />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
