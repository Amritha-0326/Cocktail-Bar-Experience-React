import { useNavigate } from "react-router-dom";
import { useState } from "react";

import bannerBg from "../assets/images/Banner.png";
import PageWrapper from "../components/layout/PageWrapper";
import Button from "../components/ui/Button";
import MoodSelector from "../components/ui/MoodSelector";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import Modal from "../components/ui/Modal";

export default function Home() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);

  const handleNavigate = () => {
    document.body.classList.add("fade-out");
    setTimeout(() => navigate("/menu"), 300);
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

          <button className="hero-cta" onClick={handleNavigate}>
            Discover Our Menu
          </button>

          <Button>Reserve a Table</Button>

          <ScrollIndicator />

          <MoodSelector onSelect={setSelectedMood} />
        </div>
      </section>
      <Modal
        isOpen={!!selectedMood}
        onClose={() => setSelectedMood(null)}
      >
        <h2 className="modal-title">
          Tonight’s Mood: {selectedMood}
        </h2>

        <p className="modal-description">
          {selectedMood === "Bold" &&
            "Strong spirits. Confident flavors. Cocktails made to leave an impression."}

          {selectedMood === "Seductive" &&
            "Smooth, intimate flavors designed to linger long after the last sip."}

          {selectedMood === "Classic" &&
            "Timeless recipes, refined balance, and understated elegance."}

          {selectedMood === "Playful" &&
            "Unexpected twists, vibrant notes, and a touch of mischief."}
        </p>

        <div className="modal-actions">
          <button
            className="primary-btn"
            onClick={() =>
              navigate(`/menu?mood=${selectedMood.toLowerCase()}`)
            }
          >
            View {selectedMood} Cocktails
          </button>

          <button
            className="secondary-btn"
            onClick={() => setSelectedMood(null)}
          >
            Change Mood
          </button>
        </div>
      </Modal>
    </PageWrapper>
  );
}
