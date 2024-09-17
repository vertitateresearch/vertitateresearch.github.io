import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submission Page",
  description: "This page is where you submit your articles.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Submission"
        description="No submission is accepted currently. Please wait for further notice. Thanks for your interest."
      />
    </>
  );
};

export default AboutPage;
