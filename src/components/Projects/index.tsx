import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectsData from "./projectsData";
import Link from "next/link";
import { POSTER_SUBMISSION_LINK } from "@/lib/constants";

const Projects = () => {
  return (
    <>
      <section id="actions" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Project Board" paragraph="" center />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((feature) => (
              <SingleProject key={feature.id} project={feature} />
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link
              className="rounded-sm bg-primary px-6 py-3 text-lg text-white"
              href={POSTER_SUBMISSION_LINK}
            >
              Submit a Poster
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
