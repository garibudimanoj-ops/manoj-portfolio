import Hero from "@/app/components/Hero";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import CodingProfiles from "@/app/components/CodingProfiles";
import Projects from "@/app/projects/page";
import Journey from "@/app/journey/page";
import Education from "@/app/education/page";
import GitHubSection from "@/app/components/GitHubSection";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Journey />
      <Education />
      <GitHubSection />
      <Contact />
    </div>
  );
}