import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoIntro from "@/components/VideoIntro";
import Benefits from "@/components/Benefits";
import CourseOverview from "@/components/CourseOverview";
import CourseProgram from "@/components/CourseProgram";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <VideoIntro />
        </ScrollReveal>
        <ScrollReveal>
          <Benefits />
        </ScrollReveal>
        <ScrollReveal>
          <CourseOverview />
        </ScrollReveal>
        <ScrollReveal>
          <CourseProgram />
        </ScrollReveal>
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
