import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-[40px] font-semibold text-white">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-10 py-10">
        {PROJECTS.map((project) => (

          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            techIcons={[...project.techIcons]}
          />
        ))}
      </div>

    </section>
  );
};
