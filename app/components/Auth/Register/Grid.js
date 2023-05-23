"use client";

import React from "react";
import RegisterForm from "./RegisterForm";
import classes from "./Register.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { warningAlert } from "@/utility/helper";

const STEPS = ["Register", "Client Search & Book", "Schedule consultation", "Initiate service procedure"];

function RegisterGrid() {
  const router = useRouter();

  const initSubmit = (values) => {
    return axios
      .post("/api/register", values)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        warningAlert({ message: "User with email already exist." });
      });
  };

  const serviceItem = (
    <div className="uk-grid uk-grid-small">
      <div>
        <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">Gadget Repair</span>
      </div>
      <div>
        <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">Auto Service</span>
      </div>
      <div>
        <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">Repair Technicians</span>
      </div>
      <div>
        <span className="uk-label tm-text-smaller uk-text-primary uk-background-default">Appliance service center</span>
      </div>
    </div>
  );
  return (
    <section>
      {/* <section
        className="uk-section tm-height-small uk-background-cover uk-background-center-center"
        style={{ backgroundImage: `url(/images/download.jpeg)` }}
      ></section> */}
      <Image
        className={"tm-height-small"}
        src="/images/download.jpeg"
        width="0"
        height="0"
        sizes="100vw"
        alt="banner"
        style={{ width: "100%" }} // optional
        // priority
      />
      <section className={["uk-container uk-position-relative uk-position-z-index", classes.MarginTop].join(" ")}>
        <div className="uk-grid-large uk-grid-column-large uk-flex-between uk-child-width-expand@m uk-grid">
          {/* signup form column */}
          <div className="uk-width-1-3@m">
            <RegisterForm initSubmit={initSubmit} />
          </div>

          <div>
            <div>
              <div className="uk-visible@m">
                <h5 className="tm-text-white uk-margin-top">
                  The Ultimate service toolkit designed for your <span className="uk-text-bold">Operational </span>
                  needs
                </h5>
                {serviceItem}
              </div>

              <div className="uk-hidden@m">
                <h5 className="uk-text-primary uk-margin-top">
                  The Ultimate service toolkit designed for your <span className="uk-text-bold">Operational </span>
                  needs
                </h5>
                {serviceItem}
              </div>

              <div className="uk-margin-large-top">
                <p>
                  Customer needs are growing rapidly and is affecting the way we do our consultations, This is the time
                  automated service management is needed more than ever.
                </p>
                <p>
                  With more demands for service technicians to meet the needs of numerous customer requirements. There
                  are lot of processes that require automation to enable operational service management easier.
                </p>
                <p className="uk-text-bold">
                  TomiGEARS is a platform that simplifies the process of service management
                </p>
                <p>Signup today and automate your operational management with ease.</p>
              </div>

              <div className="uk-grid uk-grid-small">
                {STEPS.map((val, i) => (
                  <div key={"steps" + i}>
                    <span
                      className={["uk-label tm-outline-primary tm-text-smaller uk-text-primary", classes.signpost].join(
                        " "
                      )}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="uk-grid uk-grid-small uk-child-width-1-3@m">
                <div>
                  <div>
                    <div>
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">Tele clock-in feature</span>
                    </div>
                    <div className="uk-margin-small">
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">Appointment booking</span>
                    </div>
                    <div>
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        Video-call from your dashboard
                      </span>
                    </div>
                    <div className="uk-margin-small">
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">Service Signature</span>
                    </div>
                    <div>
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">Assign Technicians</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">Service notes</span>
                    </div>
                    <div className="uk-margin-small">
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        One click sales report
                      </span>
                    </div>
                    <div>
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        One click repair report
                      </span>
                    </div>
                    <div className="uk-margin-small">
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">
                        One click inventory report
                      </span>
                    </div>
                    <div>
                      <i className="fa fa-plus-square uk-text-primary" aria-hidden="true"></i>
                      <span className="uk-text-small uk-text-emphasis uk-margin-small-left">One click referal.</span>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <div>
                    <img src={chart} alt="chart" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="uk-container">
        For any help or guidance please e-mail us{" "}
        <a className="uk-link" href="mailto:support@tomigear.com">
          support@tomigear.com
        </a>
      </p>
    </section>
  );
}

export default RegisterGrid;
