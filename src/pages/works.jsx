import { getSortedProjectsData } from "@/library/projects";
import Layouts from "@/ui/layouts/Layouts";
import dynamic from "next/dynamic";

const ProjectsSlider = dynamic( () => import("@/ui/sliders/Projects"), { ssr: false } );

const Projects = (props) => {
  return (
    <Layouts noFooter>
      <ProjectsSlider projects={props.projects} />
    </Layouts>
  );
};
export default Projects;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}