"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ListView = ({ repairs = [] }) => {
  const path = usePathname();

  return (
    <div className="">
      <div className="uk-card uk-card-default uk-card-small uk-text-center min-height">
        {/\/create/.test(path) ? null : (
          <div className="uk-background-primary uk-border-rounded uk-text-right uk-padding-small">
            <Link
              className=" tm-text-white"
              href="/repairs/create"
              uk-icon="icon: plus-circle; ratio: 1.5"
              aria-hidden="true"
              uk-tooltip="create repair"
              style={{ textDecoration: "none" }}
            ></Link>
          </div>
        )}
        <div
          className="uk-overflow-auto uk-height-1-1 uk-padding-small"
          style={{ maxHeight: "630px", minHeight: "500px" }}
        >
          {repairs.length === 0 ? <div>no repairs</div> : null}
          {repairs.map((val) => {
            const { _id, cname, device, defectivepart, datesubmitted, amount = 0, note } = val;

            return (
              <Link href={"/repairs/" + _id} key={_id} className="uk-link-reset">
                <div className="uk-card-footer uk-box-shadow-hover-small uk-padding-remove">
                  <div className="uk-flex uk-link-reset uk-flex-between uk-flex-middle ">
                    <div className="uk-flex uk-flex-middle uk-width-3-4">
                      <div className="uk-inline uk-float-left uk-margin-small-left">
                        <div className="uk-text-small uk-text-left uk-text-capitalize uk-text-truncate">{cname}</div>
                        <div
                          className={[
                            "uk-text-danger uk-text-bold uk-text-left uk-text-uppercase uk-text-truncate",
                          ].join(" ")}
                        >{`${device}-${defectivepart}`}</div>
                      </div>
                    </div>
                    <div className="uk-text-small uk-inline uk-text-left">
                      <div className="uk-text-bold">${amount}</div>
                      <div> {datesubmitted}</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx="">{`
        .min-height {
          min-height: 500px;
        }
      `}</style>
    </div>
  );
};

export default ListView;
