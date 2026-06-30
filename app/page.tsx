"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLevel } from "@/lib/hooks/useLevel";
import { useCompletion } from "@/lib/hooks/useCompletion";
import { useDay } from "@/lib/hooks/useDay";
import Header from "@/components/Header";
import WeekNav from "@/components/WeekNav";
import TodayCard from "@/components/TodayCard";
import SidebarStats from "@/components/SidebarStats";
import TrainingTab from "@/components/TrainingTab";
import DietTab from "@/components/DietTab";
import DrinksTab from "@/components/DrinksTab";
import ProfileModal from "@/components/ProfileModal";

type Tab = "training" | "diet" | "drinks";

const TAB_LABELS: Record<Tab, string> = {
  training: "🏋️ Training",
  diet: "🥗 Diet",
  drinks: "💧 Hydration",
};

export default function Home() {
  const { level, upgrade, phaseIndex, rank, title, xpProgress, maxLevel } = useLevel();
  const { toggle, isComplete, countCompleted } = useCompletion();
  const { day, selectedId, setSelectedId, todayId } = useDay();
  const [tab, setTab] = useState<Tab>("training");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", paddingBottom: 48 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>

        <div className="app-layout">

          {/* ── SIDEBAR ── */}
          <motion.aside
            className="app-sidebar"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Header
              level={level}
              rank={rank}
              title={title}
              xpProgress={xpProgress}
              maxLevel={maxLevel}
              onUpgrade={upgrade}
              onProfile={() => setShowProfile(true)}
            />
            <div style={{ marginTop: 16 }}>
              <TodayCard day={day} phaseIndex={phaseIndex} countCompleted={countCompleted} />
            </div>
            <div style={{ marginTop: 16 }}>
              <SidebarStats phaseIndex={phaseIndex} level={level} />
            </div>
          </motion.aside>

          {/* ── MAIN CONTENT ── */}
          <motion.main
            className="app-main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            {/* Week nav — buttons stretch to fill full width */}
            <WeekNav selectedId={selectedId} todayId={todayId} onSelect={setSelectedId} />

            {/* Tab nav */}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {(Object.keys(TAB_LABELS) as Tab[]).map((t) => (
                <motion.button
                  key={t}
                  className={`tab-btn ${tab === t ? "active" : ""}`}
                  onClick={() => setTab(t)}
                  whileTap={{ scale: 0.97 }}
                >
                  {TAB_LABELS[t]}
                </motion.button>
              ))}
            </div>

            {/* Tab content with animated transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ marginTop: 16 }}
              >
                {tab === "training" && (
                  <TrainingTab day={day} phaseIndex={phaseIndex} isComplete={isComplete} onToggle={toggle} />
                )}
                {tab === "diet" && <DietTab day={day} />}
                {tab === "drinks" && <DrinksTab />}
              </motion.div>
            </AnimatePresence>
          </motion.main>
        </div>
      </div>

      {showProfile && (
        <ProfileModal level={level} rank={rank} title={title} onClose={() => setShowProfile(false)} />
      )}

      <style>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .app-sidebar {
          width: 100%;
        }
        .app-main {
          width: 100%;
          min-width: 0;
        }
        @media (min-width: 1024px) {
          .app-layout {
            flex-direction: row;
            align-items: flex-start;
            gap: 32px;
          }
          .app-sidebar {
            width: 340px;
            flex-shrink: 0;
            position: sticky;
            top: 24px;
          }
          .app-main {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
}
