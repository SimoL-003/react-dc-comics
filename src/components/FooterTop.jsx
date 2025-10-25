import style from "./Footer.module.css";

export default function FooterTop() {
  const linksDCComics = [
    "Characters",
    "Comics",
    "Movies",
    "TV",
    "Games",
    "Videos",
    "News",
  ];
  const linksShop = ["Shop DC", "Shop DC Collectibles"];
  const linksDC = [
    "Terms Of Use",
    "Privacy policy (New)",
    "Ad Choices",
    "Advertising",
    "Jobs",
    "Subscriptions",
    "Talent Workshops",
    "CPSC Certificates",
    "Ratings",
    "Shop Help",
    "Contact Us",
  ];
  const linksSites = [
    "DC",
    "MAD Magazine",
    "DC Kids",
    "DC Universe",
    "DC Power Visa",
  ];

  function createLinkLists(array) {
    return (
      <ul>
        {array.map((curItem, index) => (
          <li key={index}>
            <a href="">{curItem}</a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className={style.footerTop}>
      <div className={`container ${style.container}`}>
        <div className={style.list}>
          <div>
            <h3>DC Comics</h3>
            {createLinkLists(linksDCComics)}
          </div>
          <div>
            <h3>Shop</h3>
            {createLinkLists(linksShop)}
          </div>
        </div>
        <div className={style.list}>
          <h3>DC</h3>
          {createLinkLists(linksDC)}
        </div>
        <div className={style.list}>
          <h3>Sites</h3>
          {createLinkLists(linksSites)}
        </div>
      </div>
    </section>
  );
}
