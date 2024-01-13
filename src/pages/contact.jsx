import PageBanner from "@/ui/features/PageBanner";
import Layouts from "@/ui/layouts/Layouts";
import { Formik } from 'formik';
import AppData from "@/data/app.json";

import { useContactForm } from "../common/useContactForm";
import Button from "../ui/components/Button";

const Contact = () => {
    const { 
        validateValues, 
        btnText, 
        submitForm 
    } = useContactForm(
        'contactForm', 
        'contactFormStatus', 
        { email: '', name: '', message: '' }
    )
  return (
    <Layouts>
        <PageBanner pageTitle={"Tell Us About Your Vision."} breadTitle={"Contact"} anchorLabel={"Send message"} anchorLink={"#contact"} paddingBottom={1} align={"center"} />

        {/* contact form */}
        <section id="contact">
            <div className="container mil-p-120-90">
                <h3 className="mil-center mil-up mil-mb-120">Let's <span className="mil-thin">Talk</span></h3>

                <Formik
                    initialValues = {{ email: '', name: '', message: '' }}
                    validate = { values => validateValues(values) }
                    onSubmit = {( values, { setSubmitting, resetForm }) => submitForm(values, { setSubmitting, resetForm }) }
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                <form onSubmit={handleSubmit} id="contactForm" action={AppData.settings.discord} className="row align-items-center">
                    <div className="col-lg-6 mil-up">
                        <input 
                            type="text" 
                            placeholder="What's your name"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                    </div>
                    <div className="col-lg-6 mil-up">
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                    </div>
                    <div className="col-lg-12 mil-up">
                        <textarea 
                            placeholder="Tell us about our project"
                            name="message" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        />
                    </div>
                    <div className="col-lg-8">
                        <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="mil-adaptive-right mil-up mil-mb-30">
                            <Button loading={isSubmitting} buttonType={"submit"}>
                                {btnText}
                            </Button>
                        </div>
                    </div>
                    <div className="form-status" id="contactFormStatus" />
                </form>
                )}
                </Formik>
            </div>
        </section>
        {/* contact form end */}    
    </Layouts>
  );
};
export default Contact;
