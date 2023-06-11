"use client";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import background from "../../../public/images/dev-bg.gif";
import amazon from "../../../public/images/store-icon7.svg";
import apple from "../../../public/images/store-icon6.svg";
import ebay from "../../../public/images/store-icon5.svg";
import asos from "../../../public/images/store-icon4.svg";
import nike from "../../../public/images/store-icon1.svg";
import adiddas from "../../../public/images/store-icon3.svg";
import zara from "../../../public/images/store-icon2.svg";
import ContactUs from "./ContactUs";
import Reviews from "./Reviews";
import Services from "./Services";
import classes from "./main.module.css";

const inter = Inter({ subsets: ["latin"] });

const STORE_ICONS = [zara, amazon, apple, ebay, asos, nike, adiddas];
const Rating = [
  { item: "Purchases", count: "20,000" },
  { item: "Repairs", count: "7,000" },
  { item: "Customers", count: "2,000+" },
  { item: "Solutions", count: "100+" },
];

const Main = () => {
  return (
    <>
      <main
        className="uk-position-relative uk-flex uk-flex-middle uk-flex-center"
        // data-src={"/images/dev-bg.gif"}
        // uk-height-viewport="offset-bottom: 11.9"
        // uk-img=""
        style={{ height: "88vh" }}
      >
        <Image className={"uk-position uk-position-center"} src={background} sizes="100vw" alt="banner" />
        <div
          className="bg-fade uk-position-center"
          style={{ width: "100%", height: "88vh" }}
          // uk-height-viewport="offset-bottom: 12"
        ></div>

        <section
          className={["tm-text-white uk-text-center", inter.className, classes["font-small"]].join(" ")}
          style={{ zIndex: "2" }}
        >
          <div className="bg-fade uk-padding-small" style={{ fontSize: "2rem", fontWeight: "500" }}>
            Software Development. Gadgets Procurement and Repair Service Management.
          </div>
          <div className="uk-margin-bottom">
            {/* One stop solution to Software Development, Gadgets Procurement and Repair Service Management. */}
          </div>
          <Link href="/booking">
            <button className="uk-button uk-border-pill uk-button-default tm-text-white">Book now</button>
          </Link>
          <Link href="/login">
            <button className="uk-button uk-border-pill tm-background-white uk-text-primary">Get Started</button>
          </Link>
        </section>
      </main>
      <section>
        <Services />
      </section>

      <section className=" uk-background-muted uk-padding">
        <section className="uk-container uk-text-center">
          <div className="uk-text-bold">Shop with ease from your favourite e-commerce stores in the USA</div>
          <div className="uk-grid uk-grid-small uk-flex-between  uk-child-width-auto">
            {STORE_ICONS.map((icon, i) => {
              return (
                <div key={i + "store_icon"}>
                  <div>
                    <img src={icon.src} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      <section className="uk-container uk-margin-large-top">
        <h2 className="uk-text-title">Build and scale with us</h2>

        <div
          className="uk-grid uk-child-width-1-2@m uk-flex-center uk-grid-match uk-grid-small"
          uk-grid=""
          // uk-scrollspy="target: .uk-card; cls: uk-animation-fade; delay: 200"
        >
          <div>
            <div className="uk-card uk-card-default bg-fade uk-padding uk-border-rounded">
              <h4 className="uk-text-bold tm-text-white">FinTech</h4>
              <div className="uk-light">
                The FinTech industry will exceed $320 bln in 5 years. Our team has extensive expertise in digital
                banking solutions, blockchain, financial data management, payment security, and predictive analytics.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default bg-fade  uk-padding uk-border-rounded">
              <h4 className="uk-text-bold tm-text-white">Real Estate</h4>
              <div className="uk-light">
                The global real estate market is calculated to reach USD 5.85 trillion by 2030, with a CAGR of 5.2% from
                2022 to 2030, the new reports state. This dynamic, disruptive, and demanding domain requires
                technological excellence, which we are trained in.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default bg-fade  uk-padding uk-border-rounded">
              <h4 className="uk-text-bold tm-text-white ">Retail</h4>
              <div className="uk-light">
                The retail domain market is expected to grow 7.7% at a CAGR from 2020 to $29,446.2 billion by 2025. Our
                senior experts will help you make a difference in this competitive market and increase your customer
                satisfaction rate.
              </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default bg-fade  uk-padding uk-border-rounded">
              <h4 className="uk-text-bold tm-text-white">EdTech</h4>
              <div className="uk-light">
                The EdTech market is expected to beat $133.05 billion rate until 2026. Growing yearly by 17.79%, it
                offers numerous opportunities to start a journey on a proven track, not a hype train. Get assisted by an
                experienced team on this trip to market leadership.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="uk-container uk-margin-large">
        <h2 className="uk-text-title">Reviews</h2>
        <Reviews />
      </section>

      <section className=" uk-background-muted uk-padding uk-margin-bottom">
        <section className="uk-container uk-text-center">
          <div className="uk-grid uk-grid-small uk-flex-around uk-child-width-auto">
            {Rating.map(({ count, item }, i) => {
              return (
                <div key={i + "rating_icon"}>
                  <div>
                    <div className="uk-text-lead uk-text-primary uk-text-bold">{count}</div>
                    <div className="uk-text-small">{item}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      <section className="uk-container uk-margin-bottom" id="contact_us">
        {/* contact */}
        <ContactUs />
      </section>

      <style jsx>{`

        .font-medium{
          font-size:1.2rem;
        }

        .bg-white {
          background-color: #fff !important;
        }

        .bg-fade {
          background-color: rgba(11, 39, 90, 0.68);
        }
        
        }
      `}</style>
    </>
  );
};

export default Main;
