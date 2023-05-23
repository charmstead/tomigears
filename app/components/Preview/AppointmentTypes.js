"use client";

import React from "react";

const defaultProps = [
  {
    type: "Regular Consultation",
    duration: "30 min",
    category: "Software Update",
    private: "$100",
  },
  {
    type: "Standard Consultation",
    duration: "40 mins",
    category: "Repair",
    private: "$200",
  },
  {
    type: "Long Consultation",
    duration: "1 hour",
    category: "Software Development",
    private: "$300",
  },
  {
    type: "Extended Consultation",
    duration: "2 hours",
    category: "Bulk billed",
    private: "$500",
  },
];

const AppointmentTypes = (props) => {
  return (
    <div>
      <div className="uk-text-bold uk-margin-top">Appointment Types</div>

      <table
        className={`
            uk-table uk-text-center 
            uk-text-small tm-table-stripe
            uk-table-responsive
            uk-table-small uk-table-divider
        `}
      >
        <thead>
          <tr className="uk-background-muted">
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center"></th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Duration</th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Category</th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Private</th>
          </tr>
        </thead>
        <tbody>
          {defaultProps.map((val, i) => (
            <tr key={i}>
              <td className="uk-text-primary">{val.type}</td>
              <td>{val.duration}</td>
              <td>{val.category}</td>
              <td>{val.private}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTypes;
