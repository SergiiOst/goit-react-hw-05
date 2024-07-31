import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

export const Navigation = () => {
  const navClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <h2>Movie Gallery</h2>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={navClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
