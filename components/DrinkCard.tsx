"use client";
import { useState } from "react";
import type { Drink } from "@/types";

export default function DrinkCard({ drink }: { drink: Drink }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ borderLeft: "3px solid var(--blue)", marginBottom: 12 }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{drink.title}</h3>

      <ul style={{ listStyle: "none", padding: 0, marginBottom: 12 }}>
        {drink.items.map((item, i) => (
          <li
            key={i}
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              padding: "5px 0",
              borderBottom: i < drink.items.length - 1 ? "1px solid var(--border)" : "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: "#60a5fa", fontWeight: 700, fontSize: 14, lineHeight: 1 }}>·</span>
            {item}
          </li>
        ))}
      </ul>

      {drink.steps.length > 0 && (
        <>
          <button
            onClick={() => setOpen(!open)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.28)",
              background: "rgba(59,130,246,0.07)",
              color: "#60a5fa",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              transition: "all 0.2s ease",
            }}
          >
            {open ? "▲ Hide steps" : "▼ How to make it"}
          </button>
          <div className={`recipe-content ${open ? "open" : ""}`}>
            <ol className="step-list" style={{ marginTop: 14 }}>
              {drink.steps.map((step, i) => (
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
