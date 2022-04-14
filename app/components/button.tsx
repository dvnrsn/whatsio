import React from "react";
import { Link } from "remix";
import buttonStyles from "./button.css";

type Props = {
  asAnchor: boolean;
  href?: string;
  onClick?: Function;
  children: React.ReactNode;
};

export const links = () => {
  return [{ rel: "stylesheet", href: buttonStyles }];
};

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

export default function Button({ asAnchor, href, onClick, children }: Props) {
  if (asAnchor) {
    assert(typeof href === "string", "<Button> expected a string for `to`");
    return (
      <Link className="button" to={href}>
        {children}
      </Link>
    );
  } else {
    assert(
      typeof onClick === "function",
      "<Button> expected a function for `onclick`"
    );
    return (
      <button className="button" onClick={(e) => onClick(e)}>
        {children}
      </button>
    );
  }
}
