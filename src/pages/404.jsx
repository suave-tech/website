import Link from "next/link";
import { NextSeo } from "next-seo";

import Metadata from "@/data/metadata";

import ArrowIcon from "@/ui/icons/Arrow";
import Pentagon from "@/ui/icons/Pentagon";
import Layouts from "@/ui/base/Layout";

const E404 = () => {
  return (
    <>
                  <NextSeo
  title="STS | Page Not Found"
      {...Metadata}
    />
    <Layouts noFooter>
      <div className="mil-404-banner mil-dark-bg">
          <div className="mil-animation-frame">
              <div className="mil-animation mil-position-4 mil-scale" data-value-1="9" data-value-2="1.4" style={{"right": "40%"}}>
                <Pentagon />
              </div>
          </div>
          <div className="mi-invert-fix mil-up">
              <div className="container">
                  <div className="mil-404-frame">
                      <div className="mil-scale-frame">
                          <h1 className="mil-404" data-text="404">404</h1>
                      </div>

                      <h4 className="mil-404-text mil-dark mil-mb-60">Oops! Something went wrong :(</h4>

                      <Link href="/" className="mil-button mil-arrow-place">
                        <span>Back to home</span>
                        <ArrowIcon />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </Layouts>
    </>
  );
};
export default E404;
