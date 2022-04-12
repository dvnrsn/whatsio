import React from "react";
import styleUrl from "./input.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styleUrl }];
};

export default function Input() {
  return <input />;
}
