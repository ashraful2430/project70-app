"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/lib/hooks/useAuth";
import { useLevel } from "@/lib/hooks/useLevel";
import { useCompletion } from "@/lib/hooks/useCompletion";
import { useDay } from "@/lib/hooks/useDay";
import LoginScreen from "@/components/LoginScreen";
import Header from "@/components/Header";
import WeekNav from "@/components/WeekNav";
import TodayCard from "@/components/TodayCard";
import SidebarStats from "@/components/SidebarStats";
import TrainingTab from "@/components/TrainingTab";
import DietTab from "@/components/DietTab";
import DrinksTab from "@/components/DrinksTab";
import ProfileModal from "@/components/ProfileModal";
import BodyGuide from "@/components/BodyGuide";
import CalorieTracker from "@/components/CalorieTracker";

type Tab = "training" | "diet" | "drinks" | "body" | "calories";

const TAB_LABELS: Record<Tab, string> = {
  training: "🏋️ Training",
  diet:     "🥗 Diet",
  drinks:   "💧 Hydration",
  body:     "🫀 Body Guide",
  calories: "🔥 Calories",
};

export default function AppRoot() {
  const { user, loading: authLoading, error: authError, signIn, signOut } = useAuth();
  const uid = user?.uid ?? null;

  const { toggle, isComplete, countCompleted, totalCompleted, resetCompletions } = useCompletion(uid);
  const { xp, level, maxLevel, xpProgress, xpIntoLevel, xpForNext, phaseIndex, rank, title } = useLevel(totalCompleted);

  const { day, selectedId, setSelectedId, todayId } = useDay();

  const [tab, setTab]               = useState<Tab>("training");
  const [showProfile, setShowProfile] = useState(false);
  const [levelUpMsg, setLevelUpMsg]   = useState<string | null>(null);

  // Level-up detection
  const prevLevelRef = useRef<number | null>(null);
  useEffect(() => {
    if (prevLevelRef.current === null) {
      prevLevelRef.current = level;
      return;
    }
    if (level > prevLevelRef.current) {
      setLevelUpMsg(`LEVEL UP! You reached Level ${level} — Rank ${rank}`);
      setTimeout(() => setLevelUpMsg(null), 4000);
    }
    prevLevelRef.current = level;
  }, [level, rank]);

  // ── Auth loading ──────────────────────────────────────────────────────────
  if (authLoading) {
    return <Spinner label="Loading…" color="var(--purple)" />;
  }

  if (!user) {
    return <LoginScreen onSignIn={signIn} error={authError} />;
  }

  // ── Main app ──────────────────────────────────────────────────────────────
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
              level={level} rank={rank} title={title}
              xp={xp} xpIntoLevel={xpIntoLevel} xpForNext={xpForNext}
              xpProgress={xpProgress} maxLevel={maxLevel}
              onProfile={() => setShowProfile(true)}
              user={user}
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
            <WeekNav selectedId={selectedId} todayId={todayId} onSelect={setSelectedId} />

            <div style={{
              display: "flex", gap: 6, marginTop: 16,
              overflowX: "auto", paddingBottom: 4,
              scrollbarWidth: "none",
            }}>
              {(Object.keys(TAB_LABELS) as Tab[]).map((t) => (
                <motion.button
                  key={t}
                  className={`tab-btn ${tab === t ? "active" : ""}`}
                  onClick={() => setTab(t)}
                  whileTap={{ scale: 0.97 }}
                  style={{ flex: "0 0 auto", whiteSpace: "nowrap", fontSize: 12, padding: "10px 14px" }}
                >
                  {TAB_LABELS[t]}
                </motion.button>
              ))}
            </div>

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
                {tab === "diet"     && <DietTab day={day} />}
                {tab === "drinks"   && <DrinksTab />}
                {tab === "body"     && <BodyGuide />}
                {tab === "calories" && <CalorieTracker uid={uid} />}
              </motion.div>
            </AnimatePresence>
          </motion.main>
        </div>
      </div>

      {/* ── LEVEL UP TOAST ── */}
      <AnimatePresence>
        {levelUpMsg && (
          <motion.div
            key="levelup"
            initial={{ opacity: 0, y: -80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            style={{
              position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)",
              zIndex: 9999,
              background: "linear-gradient(135deg, #7c3aed, #f59e0b)",
              borderRadius: 16, padding: "14px 28px",
              boxShadow: "0 0 40px rgba(245,158,11,0.5), 0 8px 32px rgba(0,0,0,0.4)",
              display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: 24 }}>⚡</span>
            <span style={{ fontSize: 15, fontWeight: 800, color: "#fff", letterSpacing: "0.3px" }}>
              {levelUpMsg}
            </span>
            <span style={{ fontSize: 24 }}>⚡</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PROFILE MODAL ── */}
      <AnimatePresence>
        {showProfile && (
          <ProfileModal
            level={level} rank={rank} title={title} user={user}
            onClose={() => setShowProfile(false)}
            onSignOut={async () => { await signOut(); setShowProfile(false); }}
            onReset={() => { resetCompletions(); setShowProfile(false); }}
          />
        )}
      </AnimatePresence>

      <style>{`
        .app-layout { display: flex; flex-direction: column; gap: 20px; }
        .app-sidebar { width: 100%; }
        .app-main { width: 100%; min-width: 0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (min-width: 1024px) {
          .app-layout { flex-direction: row; align-items: flex-start; gap: 32px; }
          .app-sidebar { width: 340px; flex-shrink: 0; position: sticky; top: 24px; }
          .app-main { flex: 1; }
        }
      `}</style>
    </div>
  );
}

function Spinner({ label, color }: { label: string; color: string }) {
  return (
    <div style={{
      minHeight: "100vh", background: "var(--bg)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 16,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        border: "3px solid var(--border)",
        borderTopColor: color,
        animation: "spin 0.8s linear infinite",
      }} />
      <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{label}</div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
