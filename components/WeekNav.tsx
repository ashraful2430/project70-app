"use client";
import { motion } from "framer-motion";
import { WEEK } from "@/lib/data";

interface Props {
  selectedId: number;
  todayId: number;
  onSelect: (id: number) => void;
}

export default function WeekNav({ selectedId, todayId, onSelect }: Props) {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {WEEK.map((day, i) => (
        <motion.button
          key={day.id}
          className={`day-btn ${selectedId === day.id ? "active" : ""} ${day.type === "home" ? "rest" : ""}`}
          onClick={() => onSelect(day.id)}
          style={{ flex: 1, minWidth: 0 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: day.type === "home" ? 0.45 : 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>
            {day.abbr}
          </span>
          <span style={{ fontSize: 10, opacity: 0.8 }}>
            {day.type === "home" ? "Rest" : "Gym"}
          </span>
          {day.id === todayId && (
            <div
              style={{
                position: "absolute",
                bottom: 6,
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: selectedId === day.id ? "rgba(255,255,255,0.9)" : "var(--gold)",
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
