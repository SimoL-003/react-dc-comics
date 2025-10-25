import logo from "../assets/icons/dc-logo.png";
import "./Header.css";

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
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo DC" />
          </a>
        </div>
        <nav>
          <ul>
            {menuItems.map((curItem) => (
              <li className={curItem === "comics" ? "active" : ""}>
                <a href={`/${curItem}`}>{curItem}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
