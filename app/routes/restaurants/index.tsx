import { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import Input from "~/components/input";
import useGoogleApi from "~/hooks/useGoogleApi";
import restaurantStyles from "~/styles/restaurants.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: restaurantStyles }];
};

export default function () {
  const image = useGoogleApi();
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="centered-content-container">
      Which Restauraunt?
      <Input id="google-auto-complete" autoFocus type="text" />
      {image && <img className="restaurant-image" src={image} />}
      {image && !imageLoaded && <div className="image-placeholder" />}
    </div>
  );
}
