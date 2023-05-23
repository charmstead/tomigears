"use client";

import React from "react";
import LoginForm from "./LoginForm";
import classes from "./Login.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import banner from "../../../../public/images/download.jpeg";

function LoginContainer() {
  const router = useRouter();

  return (
    <section>
      <Image
        className={"uk-height-small"}
        src={banner}
        sizes="100vw"
        alt="banner"
        style={{ width: "100%" }} // optional
        // priority
      />
      <section className={["uk-container uk-position-relative uk-position-z-index", classes.MarginTop].join(" ")}>
        <div className="uk-grid-small uk-flex-around uk-grid">
          <div>
            <div>
              <h3 className="tm-text-white">Welcome to your service-management toolkit</h3>
              <div className="uk-margin-large-top">
                <dl className="uk-description-list">
                  <dt className="uk-text-primary">Service HISTORY RECORDS</dt>
                  <dd>Access your service history records anytime to keep track of your needs.</dd>
                  <dt className="uk-text-primary">Service Booking</dt>
                  <dd>Schedule repair services online with ease and convenience.</dd>
                  <dt className="uk-text-primary">Tele-conference Service</dt>
                  <dd>Video consultation with service technician 24x7</dd>
                  <dt className="uk-text-primary">PARTS AND SUPPLIES</dt>
                  <dd>Genuine parts and supplies management to ensure high-quality service and minimize downtime.</dd>
                  <dt className="uk-text-primary">Employee Management</dt>
                  <dd>Manage your employee records.</dd>
                </dl>
              </div>
            </div>
          </div>

          {/* login form column */}
          <div className="uk-width-1-3@m">
            <LoginForm router={router} />
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

export default LoginContainer;
