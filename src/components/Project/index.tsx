"use client";

import SectionTitle from "../Common/SectionTitle";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/navigation";

const Project = () => {
  const router = useRouter();

  return (
    <section
      id="project"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Fall 2024 Issue"
          paragraph="VOLUME 1 | ISSUE 1"
          // mb="1rem"
          center
        />
        <ExportedImage
          src="/images/cover.png"
          alt="Volume 1 | Issue 1 coming soon cover"
          width={400}
          height={600}
          className={"mx-auto"}
        />
        <div className="mx-auto mt-4 flex max-w-[800px] flex-row justify-center gap-2">
          <button className="cursor-auto rounded-md bg-white bg-opacity-20 px-4 py-2 text-lg text-body-color">
            Digital Access
          </button>
          <button
            className="rounded-md bg-primary px-4 py-2 text-lg text-white"
            onClick={() => router.push("/submit")}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
