import React from "react";

export const RadioButton = ({
  name,
  value,
  label = value,
  size = "",
  className = "",
  checked,
  defaultChecked,
  changeHandler,
  readOnly,
}) => {
  const obj = checked ? { checked: true } : { checked: false };
  const defaultVal = defaultChecked && !checked ? { defaultChecked: true } : {};

  return (
    <React.Fragment>
      <label
        htmlFor={value + name}
        className={[
          "uk-button uk-button-default uk-text-capitalize",
          className,
          checked ? "uk-active" : "",
          size ? `uk-button-${size}` : "",
        ].join(" ")}
      >
        {label}
        <input
          className="uk-hidden"
          name={name}
          type="radio"
          id={value + name}
          value={value}
          {...defaultVal}
          {...obj}
          onChange={changeHandler}
          disabled={!!readOnly}
        />
      </label>
      <style jsx="">{`
        .uk-active.uk-button-default {
          color: #fff;
          border-color: #a6371e;
          background: #a6371e;
        }

        .uk-button:nth-of-type(n + 2):not(:last-child) {
          border-radius: 0px;
        }

        .uk-button:first-child:not(:last-child) {
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }

        .uk-button:last-child:not(:first-child) {
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
        }
      `}</style>
    </React.Fragment>
  );
};
