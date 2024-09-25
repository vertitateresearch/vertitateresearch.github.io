import SectionTitle from "../Common/SectionTitle";
import ExportedImage from "next-image-export-optimizer";
import { PAPER_SUBMISSION_LINK } from "@/lib/constants";
import Link from "next/link";

const Release = () => {
  return (
    <section
      id="project"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Fall 2024 Issue"
          paragraph="VOLUME 1 | ISSUE 1"
          mb="3rem"
          center
        />
        <ExportedImage
          src="/images/cover.png"
          alt="Volume 1 | Issue 1 coming soon cover"
          width={400}
          height={600}
          className={"mx-auto"}
        />
        <div className="mx-auto mt-12 flex max-w-[800px] flex-row justify-center gap-2">
          <button className="cursor-auto bg-white bg-opacity-20 px-6 py-3 text-lg text-body-color">
            Digital Access
          </button>
          <Link
            className="bg-primary px-6 py-3 text-lg text-white"
            href={PAPER_SUBMISSION_LINK}
          >
            Submit a Paper
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Release;
