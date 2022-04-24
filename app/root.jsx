import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Header, links as headerLinks } from "./components/header";
import globalStyles from "./global-styles.css";

export function meta() {
  return { title: "Whatsio" };
}

export const links = () => {
  return [...headerLinks(), { rel: "stylesheet", href: globalStyles }];
};

export const loader = async () => {
  return json({
    ENV: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    },
  });
};

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="main-container">
          <Header />
          <Outlet />
        </div>
        <ScrollRestoration />
        <script
          id="google-apis-script"
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${data.ENV.GOOGLE_MAPS_API_KEY}&libraries=places`}
        ></script>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
