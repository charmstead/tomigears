import React from "react";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <div className="uk-container uk-padding" id="services">
      <div className="uk-text-center uk-margin-bottom">
        <h3 className="uk-text-title">Explore Our Various Services</h3>
        Save time and money with our tailored solutions for individuals and businesses.
      </div>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slideshow="animation: fade; autoplay:true; autoplay-interval:5000"
      >
        <ul className="uk-subnav uk-subnav-pill switcher">
          <li uk-slideshow-item="0">
            <a href="#">Buy For me</a>
          </li>
          <li uk-slideshow-item="1">
            <a href="#">Repair Service</a>
          </li>
          <li uk-slideshow-item="2">
            <a href="#">Software Development</a>
          </li>
        </ul>
        <ul className={["uk-slideshow-items", classes.height].join(" ")}>
          <li className="uk-border-rounded">
            <img src="/images/buy-for-me.jpg" alt="" uk-cover="" />
            <div className="uk-overlay uk-overlay-primary uk-position-left uk-transition-slide-right uk-width-large">
              <h1>Buy for me</h1>
              <div>
                With our assisted purchase/procurement service, you tell us what you want to buy, and for a small fee,
                we’ll make the purchases for you whether that means buying the items online or physically walking into a
                brick and mortar store.
              </div>
              <div className="uk-margin-top">
                <div>
                  <span uk-icon="icon:comment; ratio:1.5"></span> Tell Us
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  ...............
                </div>
                <div>
                  <span uk-icon="icon:credit-card; ratio:1.5"></span> Pay
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  ...............
                </div>
                <div>
                  <span uk-icon="icon:cart; ratio:1.5"></span> Item Delivered
                </div>
              </div>
            </div>
          </li>
          <li className="uk-border-rounded">
            <img src="/images/device-repair.jpg" alt="" uk-cover="" />
            <div className="uk-overlay uk-overlay-primary uk-position-left uk-transition-slide-left uk-width-large">
              <h1>Repair Service</h1>
              <div>
                Whether you walk into our store or book an appointment with our certified repair technician, we provide
                top-notch assistance for a wide range of devices. Our skilled technicians swiftly diagnose and make the
                necessary repairs, ensuring your device is restored to optimal functionality. Conveniently schedule a
                pickup or have your device securely mailed to you.
              </div>
              <div className="uk-margin-top">
                <div>
                  <span uk-icon="icon:comment; ratio:1.5"></span> Tell Us
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  .....
                </div>
                <div>
                  <span uk-icon="icon:cog; ratio:1.5"></span> Diagnose {"&"} Repair
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  .....
                </div>
                <div>
                  <span uk-icon="icon:credit-card; ratio:1.5"></span> Pay
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  .....
                </div>
                <div>
                  <span uk-icon="icon:cart; ratio:1.5"></span> Delivered
                </div>
              </div>
            </div>
          </li>
          <li className="uk-border-rounded">
            <img src="/images/device-repair.jpg" alt="" uk-cover="" />
            <div className="uk-overlay uk-overlay-primary uk-position-left uk-transition-slide-left uk-width-large">
              <h1>Software Development</h1>
              <div>
                Whether you need to start a new project or enhance an existing one, our experienced team of developers
                is here to provide exceptional assistance. We specialize in creating customized software solutions that
                precisely match your requirements.
              </div>
              <div className="uk-margin-top">
                <div>
                  <span uk-icon="icon:comment; ratio:1.5"></span> Discuss requirements
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  .....
                </div>
                <div>
                  <span uk-icon="icon:credit-card; ratio:1.5"></span> Project Initiation
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  .....
                </div>
                <div>
                  <span uk-icon="icon:code; ratio:1.5"></span> Implementation
                </div>
                <div className="uk-padding-small" style={{ writingMode: "vertical-rl" }}>
                  .....
                </div>
                <div>
                  <span uk-icon="icon:cart; ratio:1.5"></span> Delivery
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <style jsx="">{`
        .switcher a {
          color: #999;
        }
        .switcher > li.uk-active > a {
          background: #1e87f0;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Services;
