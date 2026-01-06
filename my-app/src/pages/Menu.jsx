import { useSearchParams } from "react-router-dom";
import martiniIcon from "../assets/icons/martini-icon.svg";
import MenuBanner from "../assets/images/MenuBanner.jpg";

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
];

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlMood = searchParams.get("mood");

  const activeMood = urlMood
    ? urlMood.charAt(0).toUpperCase() + urlMood.slice(1)
    : "All Cocktails";

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
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-section">
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

        <div className="cocktail-grid">
          {filteredCocktails.map((cocktail) => (
            <div className="cocktail-card fade-in" key={cocktail.id}>
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

