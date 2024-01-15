import React from "react";
import Layouts from "@/ui/base/Layout";
import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';

import Metadata from "@/data/metadata";
import { getSortedPostsData } from "@/library/posts";

import HeroSection from "@/ui/views/Hero"
import AboutSection from "@/ui/views/About";
import ServicesSection from "@/ui/views/Services";
import CallToActionSection from "@/ui/views/CallToAction";
// import LatestPostsSection from "@/ui/views/LatestPosts";

// const TestimonialSlider = dynamic( () => import("@/ui/sliders/Testimonial"), { ssr: false } );

const Home = (props) => {
  return (
    <>
          <NextSeo
      {...Metadata}
    />
      <Layouts>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CallToActionSection />
        {/* <TestimonialSlider /> */}
        {/* <LatestPostsSection posts={props.posts} /> */}
      </Layouts>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    }
  }
}