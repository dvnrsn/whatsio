import { NavLink, Link } from "remix";
import styleUrl from "./header.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styleUrl }];
};

export function Header() {
  return (
    <header>
      <Link className="logo-wrapper" to="/">
        <img className="logo" src="whatsio.svg" alt="svg as image" />
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
