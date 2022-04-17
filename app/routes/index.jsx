import { Link } from "remix";
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
        <Button href="/dishes">Dish</Button>
      </div>
    </div>
  );
}
