import PageBanner from "@/ui/features/PageBanner";
import Layouts from "@/ui/layouts/Layouts";
import { Formik } from 'formik';
import AppData from "@/data/app.json";

import ArrowIcon from "@/ui/layouts/icons/Arrow";

const Contact = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Tell Us About Your Vision."} breadTitle={"Contact"} anchorLabel={"Send message"} anchorLink={"#contact"} paddingBottom={1} align={"center"} />

        {/* contact form */}
        <section id="contact">
            <div className="container mil-p-120-90">
                <h3 className="mil-center mil-up mil-mb-120">Let's <span className="mil-thin">Talk</span></h3>

                <Formik
                initialValues = {{ email: '', name: '', message: '' }}
                validate = { values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit = {( values, { setSubmitting } ) => {
                    const form = document.getElementById("contactForm");
                    const status = document.getElementById("contactFormStatus");
                    const data = new FormData();

                    data.append('name', values.name);
                    data.append('email', values.email);
                    data.append('message', values.message);

                    fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        if (response.ok) {
                            status.innerHTML = "Thanks for your submission!";
                            form.reset()
                        } else {
                            response.json().then(data => {
                                if (Object.hasOwn(data, 'errors')) {
                                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                } else {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                }
                            })
                        }
                    }).catch(error => {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    });

                    setSubmitting(false);
                }}
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
                <form onSubmit={handleSubmit} id="contactForm" action={AppData.settings.formspreeURL} className="row align-items-center">
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
                            <button type="submit" className="mil-button mil-arrow-place">
                                <span>Send message</span>
                                <ArrowIcon />
                            </button>
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
