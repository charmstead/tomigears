"use client";

import React from "react";
import Image from "next/image";

const PRACTIONERS = [
  {
    title: "Software Engineer",
    name: "Olatomide S.",
    address: "148 Southern Blvd, Wyoming, DE. 19934",
  },
  {
    title: "Repair Specialist",
    name: "Gurdeep Bajaj",
    address: "140 north second street, Stroudsburg, PA. 18360",
  },
  {
    title: "Repair Specialist",
    name: "Saheed R.",
    address: "17 Kasumu street, Shaginsha, Magodo. Lagos.",
  },
];

const Practioners = () => {
  return (
    <>
      <div className="uk-text-bold uk-margin-top">Our Engineers</div>
      {PRACTIONERS.map(({ title, address, name }, idx) => (
        <div className="uk-card uk-card-default uk-width-3-5@m uk-margin-small" key={idx + "_practioners"}>
          <div className="uk-grid-small uk-padding-small uk-padding-remove-left uk-flex-middle uk-grid" uk-grid="">
            <div className="uk-width-expand">
              <div>
                <div className="uk-text-uppercase uk-padding-small uk-text-small">{title}</div>
                <div className="uk-card-body uk-text-small uk-padding-small uk-padding-remove-top">
                  <div className="uk-text-primary uk-text-bold">{name}</div>
                  {/* <div className="">MBBS,RACGP</div> */}
                  <div className="">
                    <i href="" className="uk-icon-link uk-text-primary" uk-icon="location"></i>
                    {address}
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-width-auto">
              <Image className="uk-preserve" width="50" height="100" data-src="/images/tomigear_logo.png" uk-img="" />
            </div>
          </div>

          <div className="uk-card-footer uk-background-muted uk-padding-small">
            <div className="uk-grid-small uk-child-width-auto@m uk-flex-between" uk-grid="">
              <div>
                <label href="#" className="">
                  <span>Next Available: </span>
                  <span className="uk-label uk-label-warning uk-text-capitalize">Tomorrow, 11:15Am Onwards</span>
                </label>
              </div>
              {/* <div>
                <a className="uk-button uk-text-capitalize uk-text-small uk-button-primary">Book Now</a>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Practioners;
