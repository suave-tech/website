import Layouts from "@/ui/layouts/Layouts";
import PageBanner from "@/ui/features/PageBanner";

import { useEffect } from "react";

import { Accordion } from "../common/utilits";

import Link from "next/link";

import { getServices } from "@/library/services";

import PricingSection from "@/ui/views/Pricing";
import CallToActionSection from "@/ui/views/CallToAction";
import Button from "../ui/components/Button";



const Services = ( { data: servicesData } ) => {
  useEffect(() => {
    Accordion();
  }, []);

  return (
    <Layouts>
      <PageBanner 
        pageTitle={servicesData.introTitle} 
        breadTitle={servicesData.title} 
        anchorLabel={"see more"} 
        anchorLink={"#service"} 
      />

      {/* service */}
      <section id="service">
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
                  <div className="col-lg-4 mil-relative mil-mb-90">

                      <h4 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : servicesData.description.title}} />
                      <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : servicesData.description.content}} />
                      <div className="mil-up">
                          <Link href={servicesData.description.button.link} className="mil-link mil-dark mil-arrow-place">
                              <span>{servicesData.description.button.label}</span>
                          </Link>
                      </div>

                  </div>
                  <div className="col-lg-6">
                  {servicesData.list != undefined &&
                  <>
                      {servicesData.list.items.map((item, key) => (
                      <div className="mil-accordion-group mil-up" key={`service-list-${key}`}>
                          <div className="mil-accordion-menu">

                              <p className="mil-accordion-head">{item.label}</p>

                              <div className="mil-symbol mil-h3">
                                  <div className="mil-plus">+</div>
                                  <div className="mil-minus">-</div>
                              </div>

                          </div>
                          <div className="mil-accordion-content mil-text" dangerouslySetInnerHTML={{__html : item.value}} />
                      </div>
                      ))}
                  </>
                  }
                  </div>
              </div>
          </div>
      </section>
      
      <PricingSection />

      <CallToActionSection />

    </Layouts>
  );
};
export default Services;

export async function getStaticProps({ params }) {
    const services = await getServices()
    return {
      props: {
        data: services,
      }
    }
}