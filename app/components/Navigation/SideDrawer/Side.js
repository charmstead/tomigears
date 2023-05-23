import React from "react";
import classes from "./Side.module.css";
import { Link, NavLink } from "react-router-dom";

const Side = ({}) => {
  return (
    <React.Fragment>
      <section className={["uk-visible@m ", classes["side-container"]].join(" ")}>
        <div className={["uk-background-secondary nav-anchor ", classes["tm-sidebar-left"]].join(" ")}>
          <h3 className="uk-h3">
            <Link className="uk-link-reset" to="/service">
              Dashboard
            </Link>
          </h3>
          <ul className={["uk-nav uk-nav-default", ["tm-nav"]].join(" ")}>
            <li className="uk-nav-header">Order</li>
            <li>
              <NavLink activeClassName="active" to="/order">
                Order List
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/create-order">
                Create Order
              </NavLink>
            </li>
          </ul>

          <ul className={["uk-nav uk-nav-default", ["tm-nav"]].join(" ")}>
            <li className="uk-nav-header">Service</li>
            <li>
              <NavLink activeClassName="active" to="/service">
                Service List
              </NavLink>
            </li>
          </ul>
          <ul className={["uk-nav uk-nav-default uk-margin-top", ["tm-nav"]].join(" ")}>
            <li className="uk-nav-header">Menu</li>

            <li>
              <NavLink activeClassName="active" to="/customer">
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/inventory">
                Inventory
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/appointment">
                Appointment
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="active" to="/profile">
                Store Profile
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/terms_and_conditions">
                Terms and Conditions
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={["nav-anchor ", classes["tm-sidebar-left-footer"]].join(" ")}>
          <ul className="uk-iconnav uk-flex uk-flex-center">
            <li className="">
              <a href="/signout" className="uk-padding-small">
                <i className="uk-icon-link" uk-tooltip="Sign out" uk-icon="icon: sign-out; " />
              </a>
            </li>
          </ul>
        </div>

        {/* small screen offcanvas */}
        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true" className="uk-offcanvas" tabIndex="0">
          <div className="uk-offcanvas-bar">
            <div className="uk-panel">
              <h3 className="uk-h3">
                <Link className="uk-link-reset" to="/service">
                  Home
                </Link>
              </h3>
              <ul className={["uk-nav uk-nav-default", ["tm-nav"]].join(" ")}>
                <li className="uk-nav-header">Order</li>
                <li>
                  <NavLink activeClassName={"active"} to="/order">
                    Order List
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/create-order">
                    Create Order
                  </NavLink>
                </li>
              </ul>
              <ul className={["uk-nav uk-nav-default", ["tm-nav"]].join(" ")}>
                <li className="uk-nav-header">Service</li>
                <li>
                  <NavLink activeClassName="active" to="/service">
                    Service List
                  </NavLink>
                </li>
              </ul>
              <ul className={["uk-nav uk-nav-default uk-margin-top", classes["tm-nav"]].join(" ")}>
                <li className="uk-nav-header">Menu</li>

                <li>
                  <NavLink activeClassName="active" to="/customer">
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/inventory">
                    Inventory
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/appointment">
                    Appointment
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" to="/profile">
                    Store Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/terms_and_conditions">
                    Terms and Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/signout">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <style jsx={"true"}>{`
          .active[aria-current="page"]:before {
            content: "";
            position: absolute;
            top: 15px;
            left: -25px;
            width: 15px;
            border-top: 1px solid #e5e5e5;
          }

          .tm-nav > .uk-nav-header {
            padding: 8px 0;
            border-bottom: 1px solid #e5e5e5;
          }

          .nav-anchor.hide-sidebar {
            left: -240px;
          }

          .uk-h3,
          .uk-nav-default li.uk-nav-header {
            color: #e5e5e5;
          }

          .tm-nav > li > a:hover,
          a.active[aria-current="page"] {
            background-color: #1a1a1a;
            color: #e5e5e5;
            position: relative;
          }
        `}</style>
      </section>
    </React.Fragment>
  );
};

export default Side;
