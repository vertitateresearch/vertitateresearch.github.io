import { Project } from "@/types/project";

const SingleProject = ({ project }: { project: Project }) => {
  const { cover, title, paragraph } = project;
  return (
    <div className="w-full overflow-clip rounded-md bg-slate-100 dark:bg-slate-700">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex h-32 items-center justify-center bg-slate-200 dark:bg-slate-50">
          <p className="text-center text-xl font-bold dark:text-body-color-dark">
            Coming Soon
          </p>
        </div>
        <div className="p-8">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
