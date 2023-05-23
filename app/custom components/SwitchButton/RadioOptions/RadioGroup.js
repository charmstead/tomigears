"use client";
import React, { useId } from "react";

const RadioGroup = ({
  background = "tm-background-muted",
  flex = "center",
  collapse = true,
  children,
  wrap = true,
  childWidth = "uk-child-width-expand@m",
  disableGrid = false,
}) => {
  return (
    <div className={["pad-bottom", background, "uk-width-1-1"].join(" ")}>
      <div
        className={[
          `uk-text-center uk-flex uk-flex-${flex} uk-overflow-auto ${childWidth}`,
          // collapse ? "uk-grid-collapse" : "",
          wrap ? "uk-flex-wrap" : "",
          // disableGrid ? "" : "uk-grid",
        ].join(" ")}
      >
        {children}
      </div>
      <style jsx>{`
        .pad-bottom {
          padding: 5px !important;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default RadioGroup;

export const Options = ({
  changeHandler,
  readOnly,
  children,
  defaultChecked,
  checked,
  activeClass = "Radio-Group",
  name,
  value,
  small,
}) => {
  const rand = useId();
  const obj = checked ? { checked: true } : { checked: false };
  const defaultVal = defaultChecked && !checked ? { defaultChecked: true } : {};

  return (
    <div>
      <div className={activeClass}>
        <input
          type="radio"
          id={rand}
          name={name}
          value={value}
          style={{ display: "none" }}
          {...defaultVal}
          {...obj}
          onChange={changeHandler}
          disabled={!!readOnly}
        />
        <label
          htmlFor={rand}
          className={[
            "uk-button uk-width-1-1 uk-text-capitalize  uk-text-center uk-button-default uk-border-pill",
            small ? "uk-button-small" : "",
          ].join(" ")}
        >
          <span className="uk-width-1-1">{children}</span>
        </label>
      </div>
      <style jsx>{`
        .RedChecked input[type="radio"]:checked + label {
          background: #226caf;
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};
