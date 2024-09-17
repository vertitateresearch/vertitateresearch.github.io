import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <>
      <section id="actions" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Project Broad"
            paragraph="Project from Veritate Volume 1 | Issue 1"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((feature) => (
              <SingleProject key={feature.id} project={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
