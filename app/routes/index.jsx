import { Link } from "@remix-run/react";
import Button from "../components/button";
import indexStyles from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: indexStyles }];
};
export default function Index() {
  return (
    <div className="centered-content-container">
      What are you looking for?
      <div className="button-container">
        <Button href="/restaurants">Restaurant</Button>
        <Button disabled={true} href="/dishes">
          Dish
        </Button>
      </div>
    </div>
  );
}
