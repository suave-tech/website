import Layouts from "@/ui/layouts/Layouts";

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@/library/projects";

import PageBanner from "@/ui/features/PageBanner";
import CallToActionSection from "@/ui/views/CallToAction";
import ProjectInnerOne from "@/ui/features/ProjectInnerOne";
import ProjectInnerTwo from "@/ui/features/ProjectInnerTwo";
import ProjectInnerThree from "@/ui/features/ProjectInnerThree";
import ProjectInnerFour from "@/ui/features/ProjectInnerFour";
import ProjectInnerFive from "@/ui/features/ProjectInnerFive";
import ProjectInnerSix from "@/ui/features/ProjectInnerSix";

const ProjectDetail = ( props ) => {
  
  const postData = props.data;

  let prev = {
    "id": 0,
    "key": 0
  }

  let next = {
    "id": 0,
    "key": 0
  }

  props.projects.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  props.projects.forEach(function(item, key){
    if ( key == prev.key ) {
      prev.id = item.id;
    }
    if ( key == next.key ) {
      next.id = item.id;
    }
  });

  return (
    <Layouts>
      <PageBanner pageTitle={postData.introTitle} breadTitle={postData.title} anchorLabel={"Read more"} anchorLink={"#project"} />

      {postData.layout == 'one' &&
        <ProjectInnerOne postData={postData} prev={prev} next={next} />
      }
      {postData.layout == 'two' &&
        <ProjectInnerTwo postData={postData} prev={prev} next={next} />
      }
      {postData.layout == 'three' &&
        <ProjectInnerThree postData={postData} prev={prev} next={next} />
      }
      {postData.layout == 'four' &&
        <ProjectInnerFour postData={postData} prev={prev} next={next} />
      }
      {postData.layout == 'five' &&
        <ProjectInnerFive postData={postData} prev={prev} next={next} />
      }
      {postData.layout == 'six' &&
        <ProjectInnerSix postData={postData} prev={prev} next={next} />
      }

      <CallToActionSection />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
    const paths = getAllProjectsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getProjectData(params.id)
    const allProjects = await getSortedProjectsData()

    return {
      props: {
        data: postData,
        projects: allProjects
      }
    }
}