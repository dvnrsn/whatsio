import { Link } from "remix";
import Button from "../components/button";
import indexStyles from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: indexStyles }];
};

export default function Index() {
  return (
    <div className="button-container">
      <Button href="/">Restaurant</Button>
      <Button href="/">Dish</Button>
    </div>
  );
}
