import React from "react";

const defaultProps = [
  {
    day: "Monday",
    starttime: "09:00 am",
    endtime: "06:00 pm",
    allday: true,
  },
  {
    day: "Tuesday",
    starttime: "09:00 am",
    endtime: "06:00 pm",
    allday: true,
  },
  {
    day: "Wednesday",
    starttime: "09:00 am",
    endtime: "06:00 pm",
    allday: true,
  },
  {
    day: "Thurday",
    starttime: "09:00 am",
    endtime: "06:00 pm",
    allday: true,
  },
  {
    day: "Friday",
    starttime: "09:00 am",
    endtime: "06:00 pm",
    allday: true,
  },
  {
    day: "Saturday",
    starttime: "12:00 am",
    endtime: "04:00 pm",
    allday: true,
  },
  {
    day: "Sunday",
    starttime: "12:00 pm",
    endtime: "04:00 pm",
    allday: true,
  },
];

const OpeningHours = ({ openingHours = defaultProps }) => {
  return (
    <div>
      <div className="uk-text-bold uk-margin-top">Opening Hours</div>

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
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Day</th>

            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Opening Time</th>
            <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Closing Time</th>
          </tr>
        </thead>
        <tbody>
          {openingHours.map((val, i) => (
            <tr key={i}>
              <td className="uk-text-primary">{val.day}</td>
              <td>{val.starttime}</td>
              <td>{val.endtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpeningHours;
