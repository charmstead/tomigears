"use client";
import RadioGroup, { Options } from "@/custom components/SwitchButton/RadioOptions/RadioGroup";
import React from "react";

const noop = () => {};

const StepSwitch = ({ step }) => {
  return (
    <div>
      <RadioGroup activeClass="RadioGroup">
        <div className="uk-width-1-2">
          <Options
            checked={step == 1}
            name="step-switch"
            readOnly={true}
            changeHandler={noop}
            value="1"
            activeClass=" RedChecked"
          >
            Step 1
          </Options>
        </div>
        <div className="uk-width-1-2">
          <Options
            checked={step == 2}
            name="step-switch"
            changeHandler={noop}
            readOnly={true}
            activeClass=" RedChecked"
            value="2"
          >
            Step 2
          </Options>
        </div>
      </RadioGroup>
      <style jsx>{`
        .RedChecked input[type="radio"]:checked + label {
          background: #226caf !important;
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default StepSwitch;
