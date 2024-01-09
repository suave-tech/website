import React from "react";
import Layouts from "@/ui/layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@/library/posts";

import HeroSection from "@/ui/views/Hero"
import AboutSection from "@/ui/views/About";
import ServicesSection from "@/ui/views/Services";
// import LatestPostsSection from "@/ui/views/LatestPosts";

const TestimonialSlider = dynamic( () => import("@/ui/sliders/Testimonial"), { ssr: false } );

const Home = (props) => {
  return (
    <Layouts>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSlider />
      {/* <LatestPostsSection posts={props.posts} /> */}
    </Layouts>
  );
};
export default Home;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}