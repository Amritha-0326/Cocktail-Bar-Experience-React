import { useSearchParams } from "react-router-dom";
import MenuBanner from "../assets/images/MenuBanner.png";
import stampBold from "../assets/icons/stamp-bold.svg";
import stampSeductive from "../assets/icons/stamp-seductive.svg";
import stampClassic from "../assets/icons/stamp-classic.svg";
import stampPlayful from "../assets/icons/stamp-playful.svg";


const cocktails = [
  {
    id: 1,
    name: "Midnight Kiss",
    description: "Vodka, blackcurrant, lime, velvet foam",
    price: "€18",
    mood: "Seductive",
  },
  {
    id: 2,
    name: "Velvet Negroni",
    description: "Gin, vermouth rosso, bitters, orange oil",
    price: "€20",
    mood: "Classic",
  },
  {
    id: 3,
    name: "Disco Inferno",
    description: "Tequila, blood orange, chili, agave",
    price: "€19",
    mood: "Bold",
  },
  {
    id: 4,
    name: "Olive Affair",
    description: "Gin, dry vermouth, olive brine",
    price: "€17",
    mood: "Playful",
  },
  {
    id: 5,
    name: "Margarita",
    description: "Tequila, triple sec, fresh lime juice, salt",
    price: "€16",
    mood: "Classic",
  },
  {
    id: 6,
    name: "Pink Margarita",
    description: "Vodka, dry vermouth, grenadine, lemon juice",
    price: "€19",
    mood: "Playful",
  },
  {
    id: 7,
    name: "Sidecar",
    description: "Cognac or Brandy, triplr sec, lemon juice",
    price: "€20",
    mood: "Classic",
  },
  {
    id: 8,
    name: "Highballs",
    description: "Toki & Tonic, melon Crush, strawberry lemonade",
    price: "€18",
    mood: "Seductive",
  }
];
const moodStampMap = {
  Bold: stampBold,
  Seductive: stampSeductive,
  Classic: stampClassic,
  Playful: stampPlayful,
};


export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlMood = searchParams.get("mood");
  


  const activeMood = urlMood
    ? urlMood.charAt(0).toUpperCase() + urlMood.slice(1)
    : "All Cocktails";

  const isMoodFiltered = activeMood !== "All Cocktails";
  const activeStamp = moodStampMap[activeMood];

  const filteredCocktails =
    activeMood === "All Cocktails"
      ? cocktails
      : cocktails.filter((c) => c.mood === activeMood);

  return (
    <>
      {/* Menu Banner */}
      <section className="menu-hero">
        <div
          className="menu-hero-bg"
          style={{ backgroundImage: `url(${MenuBanner})` }}
        />

        <div className="menu-hero-content">
          <h1 className="menu-title">The Menu</h1>
          <p className="menu-subtitle">
            Crafted with passion, served with elegance
          </p>
          <div className="menu-moods">
          {["All Cocktails", "Bold", "Seductive", "Classic", "Playful"].map((mood) => (
            <button
              key={mood}
              className={`mood-pill ${activeMood === mood ? "active" : ""}`}
              onClick={() => {
                if (mood === "All Cocktails") {
                  setSearchParams({});
                } else {
                  setSearchParams({ mood: mood.toLowerCase() });
                }
              }}
            >
              {mood}
            </button>
          ))}
        </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-section">
        <div className="cocktail-grid">
          {filteredCocktails.map((cocktail) => (
            <div className="cocktail-card fade-in" 
              key={cocktail.id}>
              {isMoodFiltered && activeStamp && (
              <span className="cocktail-stamp" key={activeMood}>
                <img src={activeStamp} alt="" aria-hidden="true" />
              </span>
              )}
              <h3>{cocktail.name}</h3>
              <p>{cocktail.description}</p>
              <span className="price">{cocktail.price}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

