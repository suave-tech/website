import { useState } from "react";

const defaultBtnText = 'Send Message';

export const useContactForm = (formId, statusId, defaultValues) => {
  const [btnText, setBtnText] = useState(defaultBtnText);

  function validateValues(values) {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
  } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
      errors.email = 'Invalid email address';
  }
  return errors;
  }

  async function submitForm(values, { setSubmitting, resetForm }) {
    setBtnText('Sending');
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    const data = new FormData();

    data.append('name', values.name);
    data.append('email', values.email);
    data.append('message', values.message);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: JSON.stringify({
            content: 'Message Received',
            embeds: [
                {
                    title: values.name,
                    description: values.message,
                    author: {
                        name: values.email,
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
      })
      if(response.ok) {
        setBtnText('Response received')
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        setBtnText('Error occured');

        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
        }
      }
    } catch (e) {
      console.error("#useContactForm:", e);
      setBtnText('Error occured')
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
    setSubmitting(false);
    resetForm({
      values: defaultValues
    })
    setTimeout(() => {
      setBtnText(defaultBtnText);
      status.innerHTML = "";
    }, 4000);
}

  return {
    validateValues,
    btnText,
    submitForm,
    defaultValues
  }
}