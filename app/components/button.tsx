import React from "react";
import { Link } from "@remix-run/react";

type Props = {
  href?: string;
  onClick?: Function;
  children: React.ReactNode;
  disabled?: boolean;
};

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

export default function Button({
  href,
  onClick,
  children,
  disabled,
  ...delegated
}: Props) {
  if (href) {
    assert(typeof href === "string", "<Button> expected a string for `href`");
    return (
      <Link
        aria-disabled={disabled}
        className={`whatsio-button ${
          disabled ? "whatsio-button-disabled" : ""
        }`}
        to={href}
        {...delegated}
      >
        {children}
      </Link>
    );
  } else {
    assert(
      typeof onClick === "function",
      "<Button> expected a function for `onclick`"
    );
    return (
      <button
        aria-disabled={disabled}
        className={`whatsio-button ${
          disabled ? "whatsio-button-disabled" : ""
        }`}
        onClick={(e) => onClick(e)}
        {...delegated}
      >
        {children}
      </button>
    );
  }
}
