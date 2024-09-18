import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submission Page",
  description: "This page is where you submit your articles.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Submission"
        description="Submit a poster or research paper to Veritate Research."
      />
      <section
        className="container mx-auto my-[100px] max-w-[800px]"
        id="submission-guidelines"
      >
        <p className="mb-8 text-lg leading-loose text-body-color">
          In order to ensure the quality of the research papers and posters
          published in the Veritate Research Journal, we have established
          guidelines for submission. Depending on the type of submission, please
          refer to the respective guidelines below.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <Link
            href="/submit/poster-guideline"
            className="text-lg underline hover:text-primary"
          >
            Poster Submission Guidelines
          </Link>
          <Link
            href="/submit/paper-guideline"
            className="text-lg underline hover:text-primary"
          >
            Paper Submission Guidelines
          </Link>
        </div>
        <p className="mb-8 text-lg leading-loose text-body-color my-8">
          Once you have finished reading the guidelines, please proceed to the
          submission form by clicking the button below.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {/* TODO: Google Form Link */}
          <Link
            href="#"
            className="rounded-md bg-primary px-4 py-2 text-lg text-white"
          >
            Submit a Poster
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
