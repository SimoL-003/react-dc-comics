import style from "./Main.module.css";
import comics from "../data/comics";
import heroImg from "../assets/images/jumbotron.jpg";

export default function Hero() {
  return (
    <section>
      <div className={style.hero}>
        <img className={style.heroImg} src={heroImg} alt="Jumbotron" />
        <div className="container">
          <h2 className={style.heroTitle}>Current series</h2>
          <div className={style.comics}>
            <ul>
              {comics.map((curComic) => (
                <li key={curComic.id}>
                  <img src={curComic.thumb} alt={curComic.series} />
                  <span>{curComic.series}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.buttonContainer}>
            <button>Load more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
