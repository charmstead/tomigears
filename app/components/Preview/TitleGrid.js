"use client";

import React from "react";

const TitleGrid = () => {
  return (
    <div className="uk-grid-small uk-child-width-1-3@m" uk-grid="">
      <div>
        <div>
          <div className="uk-grid-small uk-flex-middle" uk-grid="">
            <div className="uk-width-auto">
              <span className="uk-icon uk-text-primary" uk-icon="icon: world; ratio: 2.2"></span>
              {/* <img class="uk-border-circle" width="40" height="40" src="/Image/Logo.svg" /> */}
            </div>
            <div className="uk-width-expand">
              <div className="uk-text-bold uk-text-emphasis">Tomigears Limited</div>
              <a href="http://www.tomigears.com" target="_blank" className="uk-text-small uk-">
                www.tomigears.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <span href="" className="uk-icon-button uk-text-primary" uk-icon="receiver"></span>
          <span> 07 5454 5454</span>
        </div>
      </div>

      {/* <div>
        <div>
          <button className="uk-button uk-button-primary uk-button-small uk-text-capitalize">General Practice</button>
        </div>
      </div> */}
    </div>
  );
};

export default TitleGrid;
