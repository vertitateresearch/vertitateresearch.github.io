import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import PaperGuideline from "@/components/Submit/PaperGuideline";

export const metadata: Metadata = {
  title: "Paper Submission | Veritate Research",
  description:
    "Guideline for submitting a research paper to Veritate Research.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Paper Submission"
        description="Guidelines for submitting a research paper to Veritate Research."
      />
      <div className="container my-[100px]">
        <PaperGuideline />
      </div>
    </>
  );
};

export default AboutPage;
