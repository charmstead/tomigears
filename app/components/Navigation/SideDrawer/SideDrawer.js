import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from '../../../assets/images/logo.png'

const SideDrawer = (props) => {
  let logo = <i className="fa fa-user-circle fa-5x uk-text-emphasis" aria-hidden="true"></i>;

  // if (state.user && state.user.store.storelogo) {
  //   logo = (
  //     <img className="uk-preserve-width uk-border-circle" src={state.user.store.storelogo} width="100" alt="logo" />
  //   );
  // }

  return (
    <aside>
      <div id="offcanvas-nav" uk-offcanvas="overlay: true; mode: slide; ">
        <div className="uk-offcanvas-bar" style={{ maxWidth: "260px" }}>
          <div className="uk-text-center uk-border-circle uk-padding-small-bottom">
            <Link to="/profile">
              {/* {logo}

              <div className="uk-light uk-text-bold uk-margin-small-top">
                {(state.user && state.user.store.name) || "Store Profile"}
              </div> */}
              ss
            </Link>
          </div>
          <ul className="uk-nav uk-nav-default">
            <li className="uk-active uk-text-bold uk-text-lead"></li>
            <li className="uk-nav-header">
              <span className="uk-margin-small-right" uk-icon="icon: menu"></span>
              Menu
            </li>
            <li>
              <NavLink activeClassName="uk-active" to="/service">
                <span className="uk-margin-small-right" uk-icon="icon: home"></span>
                Service
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="uk-active" to="/customer">
                <span className="uk-margin-small-right" uk-icon="icon: users"></span>
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="uk-active" to="/create-order">
                <span className="uk-margin-small-right" uk-icon="icon: plus-circle"></span>
                Create-order
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="uk-active" to="/order">
                <span className="uk-margin-small-right" uk-icon="icon: cart"></span>
                Order
              </NavLink>
            </li>
            <li className="uk-nav-divider"></li>
            <li>
              <Link to="/signout">
                <span className="uk-margin-small-right" uk-icon="icon: sign-out"></span> Signout
              </Link>
            </li>
            <li>
              <Link to="/terms_and_conditions">
                <span className="uk-margin-small-right" uk-icon="icon: file-text"></span> Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideDrawer;
