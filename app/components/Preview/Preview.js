"use client";

import React from "react";
import Banner from "./Banner";
import About from "./About";
import TitleGrid from "./TitleGrid";
import ContactDetails from "./ContactDetails";
import AppointmentTypes from "./AppointmentTypes";
import Practioners from "./Practioners";
import OpeningHours from "../Settings/OpeningHours";

const Preview = () => {
  return (
    <div>
      <Banner />
      <div className="uk-margin-top uk-margin-large-left uk-padding uk-padding-remove-top">
        <TitleGrid />
        <About />
        <Practioners />
        <div className="uk-width-2-3@m">
          <OpeningHours />
        </div>
        <div className="uk-width-3-5@m">
          <AppointmentTypes />
        </div>
        <ContactDetails />
      </div>
    </div>
  );
};

export default Preview;
