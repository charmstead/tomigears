import React from "react";
import { Field, Form, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { warningAlert } from "@/utility/helper";
import { sendGoogleEmail } from "lib/helper";

const ContactForm = ({ values, errors, touched, isSubmitting, setSubmitting, setErrors }) => {
  return (
    <div>
      <Form className="uk-form-stacked">
        <div className="uk-grid uk-grid-small uk-child-width-1-1@m">
          <div>
            <div>
              <label className="uk-form-label uk-text-left" htmlFor="name">
                Name
              </label>

              <div className="uk-form-controls">
                <Field
                  className={["uk-input", errors.name ? "uk-form-danger" : ""].join(" ")}
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
            </div>
          </div>
          <div className="uk-width-1-2">
            <div>
              <label className="uk-form-label uk-text-left" htmlFor="phone">
                Phone
              </label>

              <div className="uk-form-controls">
                <Field
                  className={["uk-input", errors.name ? "uk-form-danger" : ""].join(" ")}
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
          </div>
          <div className="uk-width-1-2">
            <div>
              <label className="uk-form-label uk-text-left" htmlFor="email">
                Email
              </label>

              <div className="uk-form-controls">
                <Field
                  className={["uk-input", errors.name ? "uk-form-danger" : ""].join(" ")}
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
            </div>
          </div>
          <div className="uk-width-1-2@m">
            <div>
              <label className="uk-form-label" htmlFor="service">
                Service
              </label>

              <Field component="select" className="uk-select" name="service" value={values.service}>
                <option value="Software Development">Software Development</option>
                <option value="Gadget Repair">Repair</option>
                <option value="Purchase">Purchase</option>
              </Field>
            </div>
          </div>
          <div className="uk-width-1-2@m">
            <div>
              <label className="uk-form-label" htmlFor="service">
                Expected Budget
              </label>

              <Field component="select" className="uk-select" name="budget" value={values.budget}>
                <option value="< 20k">{"<"} 20k</option>
                <option value="30k-50k">30k-50k</option>
                <option value="30k-50k">30k-50k</option>
                <option value="50k-100k">50k-100k</option>
                <option value="N/A">N/A</option>
              </Field>
            </div>
          </div>

          {values.service == "Software Development" ? (
            <div>
              <div>
                <label className="uk-form-label" htmlFor="industry">
                  Industry
                </label>

                <Field component="select" className="uk-select" name="industry" id="industry" value={values.industry}>
                  <option value="Finance">Finance</option>
                  <option value="Health">Health</option>
                  <option value="Automibile">Automibile</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Education">Education</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Other">Other</option>
                </Field>
              </div>
            </div>
          ) : null}
        </div>
        <div className="">
          <div>
            <label className="uk-form-label uk-text-left" htmlFor="message">
              Message
            </label>

            <div className="uk-form-controls uk-width-1-1">
              <Field
                className="uk-textarea uk-width-1-1"
                component="textarea"
                rows="5"
                id="message"
                name="message"
                style={{ resize: "none" }}
                value={values.message}
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="uk-text-right">
          <button
            type="submit"
            className={[
              " uk-margin-small-top uk-button",
              values.successful ? "uk-label-success" : "uk-button-primary",
            ].join(" ")}
            disabled={isSubmitting}
          >
            {values.successful ? <span class="uk-margin-small-right" uk-icon="check"></span> : null}
            {isSubmitting ? <span uk-spinner=""></span> : "Send"}
          </button>
        </div>
      </Form>
    </div>
  );
};

const FormikContactForm = withFormik({
  mapPropsToValues({ email, name, message, service, industry, phone }) {
    return {
      email: email || "",
      name: name || "",
      service: service || "",
      phone: phone || "",
      message: message || "",
      industry: industry || "Software Development",
      budget: "< 20k",
    };
  },
  validationSchema: Yup.object().shape({
    message: Yup.string().required(),
    name: Yup.string().required(),
    email: Yup.string().required(),
    budget: Yup.string().required(),
    phone: Yup.string().required(),
  }),
  async handleSubmit(values, { props, resetForm, setFieldValue, setErrors, setSubmitting }) {
    axios
      .post("/api/contact", values)
      .then((res) => {
        warningAlert({ message: "Email has been sent succesfully.", status: "success" });
        resetForm();
        setFieldValue("successful", true);
        setTimeout(() => {
          setFieldValue("successful", null);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        // warningAlert({ message: "" });
      });
  },
})(ContactForm);

export default FormikContactForm;
