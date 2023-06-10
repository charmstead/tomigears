import Link from "next/link";
import React from "react";
import FormikContactForm from "./ContactForm";
import Locations from "./Locations";

const ContactUs = () => {
  return (
    <>
      <h2 className="uk-text-title">Let's Talk!</h2>

      <section className="uk-grid uk-grid-small uk-grid-match" uk-grid={1}>
        <div className="uk-width-1-3@m ">
          <div className="uk-flex uk-flex-column">
            <div className="" style={{ flexGrow: 1 }}>
              <div className="uk-text-bold uk-padding uk-button-primary">Say HIYA 24 hours a day. 7 days week.</div>
              <div className="uk-margin-top uk-margin-left">
                <div className="uk-text-bold">Email:</div>
                <span className="uk-icon-button uk-text-primary" uk-icon="mail"></span>
                <a href="mailto:tomideso@gmail.com">tomideso@gmail.com</a>
              </div>
              <hr className="uk-width-small" />
              <div className="uk-margin-small uk-margin-left">
                <div className="uk-text-bold">Call:</div>
                <span className="uk-icon-button uk-text-primary" uk-icon="receiver"></span>
                <a href="tel:+13026659701">+13026659401</a>
              </div>
              <div className="uk-margin-left">
                <span className="uk-icon-button uk-text-primary" uk-icon="receiver"></span>
                <a href="tel:+13026659792">+13026659792</a>
              </div>
            </div>
            <div className="">
              <Link href="/booking" className="uk-button uk-width-1-1 uk-button-primary">
                Book a session
              </Link>
            </div>
          </div>
        </div>
        <div className="uk-width-expand@m">
          <FormikContactForm />
        </div>
      </section>
      <Locations />
    </>
  );
};

export default ContactUs;
