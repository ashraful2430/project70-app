"use client";
import { useState } from "react";
import type { Meal } from "@/types";

export default function MealCard({ meal }: { meal: Meal }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ borderLeft: "3px solid var(--gold)", marginBottom: 12 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 600, letterSpacing: "0.5px", marginBottom: 3 }}>
            {meal.time}
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)" }}>{meal.title}</h3>
        </div>
        {meal.info.kcal && (
          <span className="pill pill-gold" style={{ marginLeft: 12, flexShrink: 0 }}>~{meal.info.kcal} kcal</span>
        )}
      </div>

      {/* Ingredients */}
      <ul style={{ listStyle: "none", padding: 0, marginBottom: 12 }}>
        {meal.items.map((item, i) => (
          <li
            key={i}
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              padding: "5px 0",
              borderBottom: i < meal.items.length - 1 ? "1px solid var(--border)" : "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: 14, lineHeight: 1 }}>·</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Info row */}
      {(meal.info.prep || meal.info.cook || meal.info.serves) && (
        <div style={{ display: "flex", gap: 20, marginBottom: 12, flexWrap: "wrap" }}>
          {meal.info.prep && <InfoBit label="Prep" val={meal.info.prep} />}
          {meal.info.cook && <InfoBit label="Cook" val={meal.info.cook} />}
          {meal.info.serves && <InfoBit label="Serves" val={meal.info.serves} />}
        </div>
      )}

      {/* Tip */}
      {meal.info.tip && (
        <div className="safety-note" style={{ marginBottom: 12 }}>
          <strong style={{ color: "var(--gold)", fontSize: 11 }}>Tip: </strong>
          {meal.info.tip}
        </div>
      )}

      {/* Recipe toggle */}
      {meal.steps.length > 0 && (
        <>
          <button
            onClick={() => setOpen(!open)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(124,58,237,0.28)",
              background: "rgba(124,58,237,0.07)",
              color: "var(--purple-light)",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              transition: "all 0.2s ease",
            }}
          >
            {open ? "▲ Hide recipe" : "▼ View recipe"}
          </button>
          <div className={`recipe-content ${open ? "open" : ""}`}>
            <ol className="step-list" style={{ marginTop: 14 }}>
              {meal.steps.map((step, i) => (
                <li key={i}>
                  <span className="step-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </div>
  );
}

function InfoBit({ label, val }: { label: string; val: string }) {
  return (
    <div>
      <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 3 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{val}</div>
    </div>
  );
}
