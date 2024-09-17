import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Project Board | Veritate Research",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Project Board"
        description="A list of all projects on the Veritate Research Project Board."
      />
      {/* TODO: Guide line */}
      <Projects />
    </>
  );
};

export default AboutPage;
