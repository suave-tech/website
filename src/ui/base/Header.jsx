import Link from "next/link";
import { useState } from "react";
import AppData from "@/data/app.json";
import { useRouter } from 'next/router';

import BackToTop from "./BackToTop";
import Pentagon from "../icons/Pentagon";
import Button from "../components/Button";

const Header = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const { asPath } = useRouter();

  AppData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'mil-has-children';
    }
    if ( ( asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) {
      s_class1 += ' mil-active';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();

    const lists = document.querySelectorAll('.mil-has-children ul');
    lists.forEach((list) => {
        list.classList.remove('mil-active');
    });

    const links = document.querySelectorAll('.mil-has-children a');
    links.forEach((link) => {
        link.classList.remove('mil-active');
    });

    e.target.classList.toggle('mil-active');
    e.target.parentNode.querySelector('ul').classList.toggle('mil-active');
  }

  return (
    <>
    
    {/* menu */}
    <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {/* frame clone */}
        <div className="mil-frame-top">
            <Link href={AppData.header.logo.link} className="mil-logo">{AppData.header.logo.symbol}</Link>
            <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}>
                <span />
            </div>
        </div>
        {/* frame clone end */}
        <div className="container">
          <div className="mil-menu-content">
              <div className="row">
                  <div className="col-xl-5">

                      <nav className="mil-main-menu" id="swupMenu">
                        <ul>
                            {navItems.map((item, key) => (
                            <li className={item.classes} key={`header-menu-item-${key}`}>
                                <Link href={item.link} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""}>{item.label}</Link>
                                {item.children != 0 &&
                                <ul>
                                    {item.children.map((subitem, key2) => (
                                    <li key={`header-submenu${key}-item-${key2}`} className={ ( ( asPath.indexOf( subitem.link ) != -1 && subitem.link != '/' ) || asPath == subitem.link ) ? "mil-active" : "" }>
                                        <Link href={subitem.link}>{subitem.label}</Link>
                                    </li>
                                    ))}
                                </ul>
                                }
                            </li>
                            ))}
                        </ul>
                      </nav>

                  </div>
                  <div className="col-xl-7">

                      <div className="mil-menu-right-frame">
                          <div className="mil-animation-in">
                              <div className="mil-animation-frame">
                                  <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2">
                                    <Pentagon />
                                  </div>
                              </div>
                          </div>
                          <div className="mil-menu-right">
                              <div className="row">
                                  <div className="col-lg-8 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">Featured Projects</h6>

                                      <ul className="mil-menu-list">
                                          <li><Link href="/works/sandshrew" className="mil-light-soft">Sandshrew</Link></li>
                                          <li><Link href="/works/layer-1-foundation" className="mil-light-soft">Layer 1 Foundation</Link></li>
                                          <li><Link href="/works/pintswap" className="mil-light-soft">PintSwap</Link></li>
                                          <li><Link href="/works/vmex-finance" className="mil-light-soft">VMEX Finance</Link></li>
                                          <li><Link href="/works/simpletalk-ai" className="mil-light-soft">SimpleTalk AI</Link></li>
                                          <li><Link href="/works/transformation-factory" className="mil-light-soft">Transformation Factory</Link></li>
                                      </ul>

                                  </div>
                                  <div className="col-lg-4 mil-mb-60">

                                      {/* <h6 className="mil-muted mil-mb-30">Useful links</h6>

                                      <ul className="mil-menu-list">
                                          <li><a href="#." className="mil-light-soft">Privacy Policy</a></li>
                                          <li><a href="#." className="mil-light-soft">Terms and conditions</a></li>
                                          <li><a href="#." className="mil-light-soft">Cookie Policy</a></li>
                                          <li><a href="#." className="mil-light-soft">Careers</a></li>
                                      </ul> */}

                                  </div>
                              </div>
                              <div className="mil-divider mil-mb-60"></div>
                              <div className="row justify-content-center">

                                <Button link="/contact" className="w-fit">
                                    Contact Us
                                </Button>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
      {/* menu */}
      
      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame */}
      <div className="mil-frame">
        <div className="mil-frame-top">
          <Link href={AppData.header.logo.link} className="mil-logo">{AppData.header.logo.symbol}</Link>
          <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}>
              <span />
          </div>
        </div>
        <div className="mil-frame-bottom">
            <div className="mil-current-page" />

            <BackToTop />
        </div>
      </div>
      {/* frame end */}
    </>
  );
};
export default Header;
