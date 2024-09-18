import Project from "src/components/Project";
import ScrollUp from "@/components/Common/ScrollUp";
import Projects from "src/components/Projects";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veritate Research | Home",
  description:
    "Veritate Research is a high school student-led research journal that provides publication opportunities for all GA high school students.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Project />
      <Projects />
      {/*<Contact />*/}
    </>
  );
}
