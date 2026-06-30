import { DRINKS } from "@/lib/data";
import DrinkCard from "./DrinkCard";

export default function DrinksTab() {
  return (
    <div>
      <div className="safety-note" style={{ marginBottom: 16 }}>
        These drinks replace sports drinks and protein shakes. All are halal, cheap, and made from ingredients you already have at home.
      </div>
      {DRINKS.map((drink, i) => (
        <DrinkCard key={i} drink={drink} />
      ))}
    </div>
  );
}
