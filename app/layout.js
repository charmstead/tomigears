import Script from "next/script";
import "uikit/dist/css/uikit.min.css";
import "./globals.css";
import NavBar from "./components/Nav/NavBar";
import { getSession } from "./actions/getCurrentUser";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomigears",
  description: "Software Development and Gadget Repairs.",
};

export default async function RootLayout({ children }) {
  const session = await getSession();

  return (
    <html lang="en">
      <body>
        <NavBar session={session} />
        <section uk-height-viewport="expand: true">{children}</section>
        <footer className="uk-background-danger uk-padding-small uk-button-primary tm-text-white">
          <section className="uk-grid uk-grid-small uk-flex-center uk-flex-middle  ">
            <div>
              <div>Copyrights © {new Date().getFullYear()} Tomigears Ltd - All Rights Reserved. |</div>
            </div>
            <div>
              <div>
                <Link href="/terms" className="uk-link-reset">
                  Terms of service
                </Link>
              </div>
            </div>
            <div className="">
              <div className="">
                <div>Available payment methods:</div>
                <div className="uk-flex uk-flex-middle uk-margin-small-bottom">
                  <img style={{ width: "40px" }} src="https://test-api.payrix.com/images/card_logos/visa.png" />
                  <img style={{ width: "40px" }} src="https://test-api.payrix.com/images/card_logos/master.png" />
                  <img style={{ width: "40px" }} src="https://test-api.payrix.com/images/card_logos/amex.png" />
                  <img style={{ width: "40px" }} src="https://test-api.payrix.com/images/card_logos/discover.png" />
                </div>
              </div>
            </div>
          </section>
        </footer>
      </body>
      <Script type="text/javascript" src="/javascript/uikit.min.js"></Script>
      <Script type="text/javascript" src="/javascript/uikit-icons.min.js"></Script>
    </html>
  );
}
