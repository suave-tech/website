import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';

import Metadata from "@/data/metadata";
import { getSortedProjectsData } from "@/library/projects";

import Layouts from "@/ui/base/Layout";

const ProjectsSlider = dynamic( () => import("@/ui/sliders/Projects"), { ssr: false } );

const Projects = (props) => {
  return (
    <>
                      <NextSeo
  title="STS | Our Featured Works"
  description="See how Suave Tech Solutions has helped other companies build out their visions. Check out some of our featured works."
      {...Metadata}
    />
    <Layouts noFooter>
      <ProjectsSlider projects={props.projects} />
    </Layouts>
    </>
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