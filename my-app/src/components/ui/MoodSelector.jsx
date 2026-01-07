import { useNavigate } from "react-router-dom";

import boldImg from "../../assets/images/moods/bold.png";
import seductiveImg from "../../assets/images/moods/seductive.png";
import classicImg from "../../assets/images/moods/classic.png";
import playfulImg from "../../assets/images/moods/playful.png";


const moods = ["Seductive", "Classic", "Bold", "Playful"];
const moodImages = {
  Bold: boldImg,
  Seductive: seductiveImg,
  Classic: classicImg,
  Playful: playfulImg,
};

// export default function MoodSelector() {
//   const navigate = useNavigate();

//   const handleMoodClick = (mood) => {
//     navigate(`/menu?mood=${mood.toLowerCase()}`);
//   };

//   return (
//     <section className="mood-section">
//       <h2 className="mood-title">Choose Your Mood</h2>
//       <p className="mood-subtitle">
//         Every cocktail tells a story. Let your evening begin with a feeling.
//       </p>

//       <div className="mood-grid">
//         {moods.map((mood) => (
//           <button
//             key={mood}
//             className="mood-card"
//             style={{
//               backgroundImage: `url(${moodImages[mood]})`,}}
//             onClick={() => handleMoodClick(mood)}
//           >
//             <span className="mood-label">{mood}</span>
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function MoodSelector({ onSelect }) {
  const handleClick = (mood) => {
    if (onSelect) {
      onSelect(mood);
    }
  };

  return (
    <section className="mood-section">
      <h2 className="mood-title">Choose Your Mood</h2>
      <p className="mood-subtitle">
        Every cocktail tells a story. Let your evening begin with a feeling.
      </p>

      <div className="mood-grid">
        {moods.map((mood) => (
          <button
            key={mood}
            className="mood-card"
            style={{ backgroundImage: `url(${moodImages[mood]})` }}
            onClick={() => handleClick(mood)}
          >
            <span className="mood-label">{mood}</span>
          </button>
        ))}
      </div>
    </section>
  );
}