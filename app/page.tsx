"use client";

import Header from "@/app/section/Header/page";
import Hero from "@/app/section/Hero/page";
import About from "@/app/section/About/page";
import Experience from "@/app/section/Experience/page";
import Skills from "@/app/section/Skills/page";
import Projects from "@/app/section/Projects/page";
import Certifications from "@/app/section/Certifications/page";
import Testimonials from "@/app/section/Testimonials/page";
import Hobbies from "@/app/section/Hobbies/page";
import Contact from "@/app/section/Contact/page";
import Footer from "@/app/section/Footer/page";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/*<About />*/}
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Testimonials />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}