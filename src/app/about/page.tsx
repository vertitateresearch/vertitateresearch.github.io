import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";

export const metadata: Metadata = {
  title: "About | Veritate Research",
  description:
    "Veritate Research is a high school student-led research journal that provides publication opportunities for all GA high school students.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Veritate Research is a high school student-led research journal that provides publication opportunities for all GA high school students."
      />
      <div className="container">
        <p className="leading-relaxed text-body-color">
          Veritate aims to showcase high school research across all disciplines,
          including natural sciences, social sciences, and humanities. At
          Veritate, we recognize that many students engage in research but often
          lack a platform to share their work. Veritate provides an accessible
          space for publication, free from the constraints of traditional
          journals—students can publish without any costs or lab affiliation.
          Our platform is designed to be inclusive, ensuring that research is
          communicated in an understandable way, while still maintaining quality
          through rigorous peer and editorial review.
        </p>
      </div>
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
