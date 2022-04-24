import React from "react";
import { Link } from "@remix-run/react";

type Props = {
  href?: string;
  onClick?: Function;
  children: React.ReactNode;
};

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

export default function Button({ href, onClick, children }: Props) {
  if (href) {
    assert(typeof href === "string", "<Button> expected a string for `href`");
    return (
      <Link className="whatsio-button" to={href}>
        {children}
      </Link>
    );
  } else {
    assert(
      typeof onClick === "function",
      "<Button> expected a function for `onclick`"
    );
    return (
      <button className="whatsio-button" onClick={(e) => onClick(e)}>
        {children}
      </button>
    );
  }
}
