import {
  ColorBars,
  GradientTextWrapper,
  MdiGithub,
  MdiLinkedin,
} from "@/components/icons";
import AboutSection from "@/components/pageSections/AboutSection";
import ContactSection from "@/components/pageSections/ContactForm";
import ExperienceSection from "@/components/pageSections/ExperienceSection";
import HeroSection from "@/components/pageSections/HeroSection";
import NavSection from "@/components/pageSections/NavSection";
import PortfolioSection from "@/components/pageSections/PortfolioSection";
import TestimonialSection from "@/components/pageSections/TestimonialSection";
import { GithubIcon, LinkedInIcon, SendIcon } from "@/components/SendIcon";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-screen main-bg">
      {/* */}
      <NavSection />
      {/*  */}
      <HeroSection />
      {/*  */}
      <ColorBars height="6px" />
      <AboutSection />
      {/*  */}
      <ColorBars height="6px" />
      <PortfolioSection />
      {/*  */}
      <ColorBars height="6px" />
      <ExperienceSection />
      {/*  */}
      <ColorBars height="6px" />
      <TestimonialSection />
      {/*  */}
      <ColorBars height="6px" />
      <ContactSection />
    </main>
  );
}
