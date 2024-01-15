import { useEffect } from "react";
import { ScrollAnimation } from "../../utils/scroll-animations";
//import { PreloaderAnimation } from "../common/preloader";
import { CursorAnimation } from "../../utils/cursor";
import { AnchorScroll } from "../../utils/ui-helpers";
import { CurrentPageLabel } from "../../utils/ui-helpers";

import Footer from "./Footer";
import Header from "./Header";
//import Preloader from "./preloader/Index";
import Cursor from "./Cursor";
import ScrollbarProgress from "./ScrollBar";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  extraClass,
}) => {
  useEffect(() => {
    //PreloaderAnimation();
    ScrollAnimation();
    CursorAnimation();
    AnchorScroll();
    CurrentPageLabel();
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      <Cursor />

      {/* <Preloader /> */}

      <ScrollbarProgress />

      {!noHeader && (
        <Header
          layout={header}
          extraclassName={extraClass}
        />
      )}

      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          {children}

          {!noFooter && <Footer layout={footer} />}          
        </div>
      </div>
    </div>
  );
};
export default Layouts;
