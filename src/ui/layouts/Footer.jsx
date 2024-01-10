import Link from "next/link";
import AppData from "@/data/app.json";
import ArrowIcon from "@/ui/layouts/icons/Arrow";
import { useRouter } from 'next/router';

const Footer = ( { extraClass } ) => {
  const { asPath } = useRouter();
  
  return (
    <footer className="mil-dark-bg">
        <div className="mi-invert-fix">
            <div className="container mil-p-60-60">
                <div className="row justify-content-between">
                    <div className="col-lg-12">
                        <div className="row justify-content-end">
                            <div className="col-lg-12">

                                <nav className="mil-footer-menu mil-mb-60">
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active mil-up" : "mil-up"}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between flex-sm-row-reverse">
                    <div className="col-lg-12">

                        <div className="mil-vert-between">
                            {/* <div className="mil-mb-30">
                                <ul className="mil-social-icons mil-up">
                                    {AppData.social.map((item, key) => (
                                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank" className="social-icon"><i className={item.icon} /></a></li>
                                    ))}
                                </ul>
                            </div> */}
                            <p className="mil-light-soft mil-up">{AppData.footer.copy}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};
export default Footer;
