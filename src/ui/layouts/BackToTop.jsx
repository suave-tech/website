import ArrowIcon from "@/src/ui/layouts/icons/Arrow";

const BackToTopModule = () => {
    return (
            <div className="mil-back-to-top">
                <a href="#top" className="mil-link mil-dark mil-arrow-place">
                    <span>Back to top</span>
                    <ArrowIcon />
                </a>
            </div>
    );
};
export default BackToTopModule;