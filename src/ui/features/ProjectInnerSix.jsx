import Link from "next/link";
import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageView from "@/src/ui/features/ImageView";

const ProjectInner6 = ({ postData, prev, next }) => {
    return (
        <>
        {/* project */}
        <section className="mil-p-120-0">
            {typeof postData.fullImage != "undefined" &&
            <div className="mil-image-frame mil-fw mil-up">
                <img src={postData.fullImage} alt={postData.title} />
                <a data-fancybox="gallery" data-no-swup href={postData.fullImage} className="mil-zoom-btn">
                    <img src="/img/icons/zoom.svg" alt="zoom" />
                </a>
            </div>
            }
            <div className="container mil-p-0-120" id="project">
                {typeof postData.details != "undefined" &&
                <div className="mil-info mil-up">
                    {postData.details.map((item, key) => (
                    <div key={`project-details-item-${key}`}>{item.label} &nbsp;<span className="mil-dark">{item.value}</span></div>
                    ))}
                </div>
                }
                <div className="mil-p-120-120">
                    {typeof postData.gallery != "undefined" &&
                    <>
                        {postData.gallery.enabled == 1 &&
                        <Swiper
                            {...SliderProps.milTwoSlider}
                            className="swiper-container mil-2-slider mil-up"
                        >
                            {postData.gallery.items.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`projects-item-${key}`}>

                                <div className="mil-image-frame mil-vertical mil-drag">
                                    <img src={item.image} alt={item.alt} />
                                    <a data-fancybox="gallery" data-no-swup href={item.image} className="mil-zoom-btn">
                                        <img src="/img/icons/zoom.svg" alt="zoom" />
                                    </a>
                                </div>

                            </SwiperSlide>
                            ))}
                        </Swiper>
                        }
                    </>
                    }
                    {typeof postData.description != "undefined" &&
                    <>
                        {postData.description.enabled == 1 &&
                        <div className="row justify-content-between mil-p-120-0">
                            <div className="col-lg-5">
                                <h3 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : postData.description.title}} />
                            </div>
                            <div className="col-lg-6">
                                <div className="mil-text mil-up" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                            </div>
                        </div>
                        }
                    </>
                    }
                </div>
                {typeof postData.gallery2 != "undefined" &&
                <>
                    {postData.gallery2.enabled == 1 &&
                    <Swiper
                        {...SliderProps.milTwoSlider}
                        className="swiper-container mil-2-slider mil-up mil-mb-120"
                    >
                        {postData.gallery2.items.map((item, key) => (
                        <SwiperSlide className="swiper-slide" key={`projects2-item-${key}`}>

                            <div className="mil-image-frame mil-horizontal mil-drag">
                                <img src={item.image} alt={item.alt} />
                                <a data-fancybox="gallery" data-no-swup href={item.image} className="mil-zoom-btn">
                                    <img src="/img/icons/zoom.svg" alt="zoom" />
                                </a>
                            </div>

                        </SwiperSlide>
                        ))}
                    </Swiper>
                    }
                </>
                }
                <div className="mil-works-nav mil-up">
                    <Link href={(prev.id != 0 && prev.id != undefined) ? `/projects/${prev.id}` : ""} className={(prev.id != 0 && prev.id != undefined) ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled"}>
                        <span>Prev project</span>
                    </Link>
                    <Link href="/projects" className="mil-link mil-dark">
                        <span>All projects</span>
                    </Link>
                    <Link href={(next.id != 0 && next.id != undefined) ? `/projects/${next.id}` : ""} className={(next.id != 0 && next.id != undefined) ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled"}>
                        <span>Next project</span>
                    </Link>
                </div>
            </div>

            <ImageView />
        </section>
        {/* project end */}
        </>
    );
};
export default ProjectInner6;