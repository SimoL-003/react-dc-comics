import logo from "../assets/icons/dc-logo.png";
import style from "./Header.module.css";

export default function Header() {
  const menuItems = [
    "characters",
    "comics",
    "movies",
    "tv",
    "games",
    "collectibles",
    "videos",
    "fans",
    "news",
    "shop",
  ];

  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <div className="logo">
          <a href="/">
            <img className={style.logoImg} src={logo} alt="Logo DC" />
          </a>
        </div>
        <nav>
          <ul className={style.navList}>
            {menuItems.map((curItem) => (
              <li
                className={`${style.navItem} ${
                  curItem === "comics" ? "active" : ""
                }`}
              >
                <a href={`/${curItem}`}>{curItem}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
