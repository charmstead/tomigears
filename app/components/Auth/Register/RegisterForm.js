"use client";

import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import classes from "./Register.module.css";
import Link from "next/link";

const RegisterForm = ({ touched, errors, isSubmitting }) => {
  console.log(isSubmitting);
  return (
    <div className="uk-box-shadow-small uk-padding-small uk-background-default uk-border-rounded">
      <Form className={["uk-form-stacked", classes.FormPadding].join(" ")}>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="name">
            Store Name<span className="uk-text-danger">*</span>
          </label>

          <div className="uk-form-controls uk-inline uk-width-1-1@m">
            <Field
              className={["uk-input uk-width-large@m", touched.name && errors.name ? "uk-form-danger" : ""].join(" ")}
              type="text"
              name="name"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="email">
            Email Address<span className="uk-text-danger">*</span>
          </label>

          <div className="uk-form-controls uk-inline uk-width-1-1@m">
            {/* <span className="uk-form-icon uk-icon" uk-icon="icon: mail"></span> */}
            <Field
              id="email"
              className={["uk-input uk-width-large@m", touched.email && errors.email ? "uk-form-danger" : ""].join(" ")}
              type="email"
              name="email"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="password">
            Password<span className="uk-text-danger">*</span>
          </label>
          <div className="uk-inline uk-form-controls uk-width-1-1@m">
            {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
            <Field
              className={["uk-input uk-width-1-1@m", touched.password && errors.password ? "uk-form-danger" : ""].join(
                " "
              )}
              id="password"
              name="password"
              type="password"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="firstname">
            FirstName<span className="uk-text-danger">*</span>
          </label>
          <div className="uk-inline uk-form-controls uk-width-1-1@m">
            {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
            <Field
              className={[
                "uk-input uk-width-1-1@m",
                touched.firstname && errors.firstname ? "uk-form-danger" : "",
              ].join(" ")}
              name="firstname"
              type="text"
            />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="lastname">
            LastName<span className="uk-text-danger">*</span>
          </label>
          <div className="uk-inline uk-form-controls uk-width-1-1@m">
            {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
            <Field
              className={["uk-input uk-width-1-1@m", touched.lastname && errors.lastname ? "uk-form-danger" : ""].join(
                " "
              )}
              id="lastname"
              name="lastname"
              type="text"
            />
          </div>
        </div>

        <button
          type="submit"
          className={[
            "uk-button uk-button-primary uk-border-pill uk-width-1-1",
            isSubmitting ? "uk-disabled" : "",
          ].join(" ")}
          disabled={isSubmitting}
        >
          {isSubmitting ? <span className="uk-icon uk-spinner" uk-spinner="ratio:0.8"></span> : "Create Account"}
        </button>

        <div className="uk-text-small uk-child-width-auto uk-margin-small uk-flex-between uk-grid-row-small uk-grid">
          <div>
            <div>
              <span className="uk-text-small">Have an account?</span>
              <Link className="uk-text-small" href="/login">
                Login Here
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

const FormikRegisterForm = withFormik({
  mapPropsToValues({ email, name, firstname, lastname, password }) {
    return {
      email: email || "",
      name: name || "",
      firstname: firstname || "",
      lastname: lastname || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    name: Yup.string().required(),
    password: Yup.string().required("Password is required"),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    props.initSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
})(RegisterForm);

export default FormikRegisterForm;
