import style from "./Footer.module.css";
import facebookIcon from "../assets/icons/footer-facebook.png";
import twitterIcon from "../assets/icons/footer-twitter.png";
import youtubeIcon from "../assets/icons/footer-youtube.png";
import pinterestIcon from "../assets/icons/footer-pinterest.png";
import periscopeIcon from "../assets/icons/footer-periscope.png";

export default function FooterBottom() {
  const social = [
    {
      name: "Facebook",
      link: "#",
      icon: facebookIcon,
    },
    {
      name: "Twitter",
      link: "#",
      icon: twitterIcon,
    },
    {
      name: "YouTube",
      link: "#",
      icon: youtubeIcon,
    },
    {
      name: "Pinterest",
      link: "#",
      icon: pinterestIcon,
    },
    {
      name: "Periscope",
      link: "#",
      icon: periscopeIcon,
    },
  ];

  return (
    <section className={style.footerBottom}>
      <div className={`container ${style.footerBottomContainer}`}>
        <div className={style.btn}>
          <a href="#">Sign-up now!</a>
        </div>
        <div className={style.social}>
          <h3>Follow us</h3>
          <ul>
            {social.map((curItem, index) => (
              <li key={index}>
                <a href={curItem.link}>
                  <img src={curItem.icon} alt={curItem.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
