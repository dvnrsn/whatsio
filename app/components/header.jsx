import { Link, NavLink } from "@remix-run/react";
import styleUrl from "./header.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styleUrl }];
};

export function Header() {
  return (
    <header>
      <Link className="logo-wrapper" to="/" aria-label="Navigate to home">
        <img className="logo" src="whatsio.svg" alt="whatsio logo" />
      </Link>
      <nav>
        <ul className="navUl">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/checklist"
            >
              Checklist
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
