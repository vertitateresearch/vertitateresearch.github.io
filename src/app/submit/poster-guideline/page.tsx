import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import PosterGuideline from "@/components/Submit/PosterGuideline";

export const metadata: Metadata = {
  title: "Poster Submission | Veritate Research",
  description: "Guideline for submitting a poster to Veritate Research.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Poster Submission"
        description="Guidelines for submitting a research poster to Veritate Research."
      />
      <div className="container my-[100px]">
        <PosterGuideline />
      </div>
    </>
  );
};

export default AboutPage;
