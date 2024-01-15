
import { NextSeo } from "next-seo";

import Metadata from "@/data/metadata";
import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@/library/projects";

import Layouts from "@/ui/base/Layout";
import PageBanner from "@/ui/features/PageBanner";
import CallToActionSection from "@/ui/views/CallToAction";
import ProjectDefault from "@/ui/views/ProjectDefault";
import ProjectImages from "@/ui/views/ProjectImages";

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

  function renderView() {
    switch (postData.layout) {
      case 'images': return (
        <ProjectImages postData={postData} prev={prev} next={next} />
      )
      default: return (
        <ProjectDefault postData={postData} prev={prev} next={next} />
      )
    }
  }

  return (
    <>
                  <NextSeo
  title={`STS | Works | ${postData.title}`}
  description={`See how Suave Tech Solution helped ${postData.title}. ${postData.description.title}`}
      {...Metadata}
    />

    <Layouts>
      <PageBanner pageTitle={postData.introTitle} breadTitle={postData.title} anchorLabel={"Read more"} anchorLink={"#project"} />
      {renderView()}
      <CallToActionSection />
    </Layouts>
    </>

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