import { useNavigate } from "react-router-dom";

import bannerBg from "../assets/images/Banner.png";
import PageWrapper from "../components/layout/PageWrapper";
import Button from "../components/ui/Button";
import MoodSelector from "../components/ui/MoodSelector";
import ScrollIndicator from "../components/ui/ScrollIndicator";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      navigate("/menu");
    }, 300);
  };


  return (
    <PageWrapper fullBleed>
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
          <button className="hero-cta"
            onClick={handleNavigate}>
            Discover Our Menu
          </button>
          <Button>Reserve a Table</Button>
          <ScrollIndicator />
          <MoodSelector onChange={(mood) => console.log(mood)} />
        </div>
      </section>
    </PageWrapper>
  );
}

