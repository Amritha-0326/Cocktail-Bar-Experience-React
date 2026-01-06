import "../styles/global.css";
import "../styles/animations.css";
import bannerBg from "../assets/images/Banner.png";
import arrowIcon from "../assets/icons/arrow.svg";


export default function Home() {
  return (

    <section id="home-hero" className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${bannerBg})` }}
      />

      <div className="hero-content">
        <h1 className="hero-title">
          MIDNIGHT <br /> MARTINI
        </h1>

        <p className="hero-tagline">Where glamour meets the night</p>

        <button className="hero-cta">Discover Our Menu</button>

        <div className="scroll-indicator">
          <img src={arrowIcon} alt="Scroll down" />
        </div>
      </div>
    </section>

  );
}