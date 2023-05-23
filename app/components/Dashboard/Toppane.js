"use client";
import Link from "next/link";

const TopPane = ({ stats }) => {
  return (
    <div
      className="uk-grid-match  uk-grid-small uk-child-width-1-2  uk-child-width-1-5@m "
      uk-grid=""
      uk-height-match="row:false"
    >
      <div className="">
        <div className="uk-background-primary uk-border-rounded">
          <Link className="uk-link-reset  uk-height-1-1 uk-display-block " href="/repair">
            <div className="uk-padding-small uk-flex  uk-flex-column uk-text-bold tm-text-white uk-height-1-1">
              <div className=" tm-text-white">Repairs</div>
              <div
                className="uk-text-bold uk-text-center uk-text-lead uk-text-middle uk-flex uk-flex-middle"
                style={{ color: "white", flexGrow: 1, alignSelf: "center" }}
              >
                <span className="">12</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="uk-background-primary uk-border-rounded">
          <Link className="uk-link-reset  uk-height-1-1 uk-display-block " href="/appointment">
            <div className="uk-padding-small uk-flex  uk-flex-column uk-text-bold uk-height-1-1">
              <div className=" tm-text-white ">Appoinments</div>
              <div
                className="uk-text-bold uk-text-center uk-text-lead uk-text-middle uk-flex uk-flex-middle"
                style={{ color: "white", flexGrow: 1, alignSelf: "center" }}
              >
                <span className="tm-text-white">8</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="uk-button-default uk-display-block uk-border-rounded">
          <a className="uk-link-reset uk-height-1-1 " href="#">
            <div className="uk-clearfix uk-padding-small uk-text-center uk-text-bold ">
              <div className="">Clockin / Clockout</div>
              <div className="font-small uk-text-center">
                <span>View your timesheets,</span>
                <span className="uk-text-break">clockin/clockout and view</span>
                <span>schedules</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        .font-small {
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

export default TopPane;
