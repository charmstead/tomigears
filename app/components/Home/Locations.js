import React from "react";

const ADDRESS = [
  {
    city: "Wyoming",
    address1: "148 Southern Blvd",
    address2: "Wyoming, DE 19934, USA",
  },
  {
    city: "Stroudsburg",
    address1: "140 North Second St",
    address2: "Stroudsburg, PA 18360, USA",
  },
  {
    city: "Houston",
    address1: "11850 Bissonnet St",
    address2: "Houston, TX 77099, USA",
  },
  {
    city: "Lagos",
    address1: "No 17 Kasumu St,",
    address2: "Shangisha-Magodo, Lagos, NG",
  },
];

const Locations = () => {
  return (
    <div className="uk-grid uk-grid-small uk-child-width-1-4@m  uk-margin-large-top uk-grid-match  uk-light" uk-grid="">
      {ADDRESS.map(({ city, address1, address2 }, idx) => (
        <div key={idx + "_ddress"}>
          <div className="uk-background-primary uk-padding uk-height-1-1 uk-border-rounded">
            <div>
              <span className="uk-text-primary" uk-icon="icon: location; ratio: 1.5"></span>
              <strong>{city}</strong>
            </div>
            <div>{address1},</div>
            <div>{address2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
