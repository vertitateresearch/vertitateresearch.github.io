import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

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
        pageName="About Page"
        description="Veritate Research is a high school student-led research journal that provides publication opportunities for all GA high school students."
      />
      <AboutSectionOne />
      {/*  TODO: Editorial board and students */}
    </>
  );
};

export default AboutPage;
