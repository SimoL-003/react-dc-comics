import style from "./Main.module.css";
import digitalComics from "../assets/icons/buy-comics-digital-comics.png";
import merchandise from "../assets/icons/buy-comics-merchandise.png";
import subscription from "../assets/icons/buy-comics-subscriptions.png";
import shopLocator from "../assets/icons/buy-comics-shop-locator.png";
import powerVisa from "../assets/icons/buy-dc-power-visa.svg";

export default function BuyComics() {
  const features = [
    { name: "Digital comics", icon: digitalComics },
    { name: "DC Merchandise", icon: merchandise },
    { name: "Subscription", icon: subscription },
    { name: "Comic Shop Locator", icon: shopLocator },
    { name: "DC Power Visa", icon: powerVisa },
  ];

  return (
    <section className={style.features}>
      <div className="container">
        <ul>
          {features.map((curFeature, index) => (
            <li key={index}>
              <a href="#">
                <img src={curFeature.icon} alt={curFeature.name} />
                <span>{curFeature.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
