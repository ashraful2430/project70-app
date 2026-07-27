"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/lib/hooks/useAuth";
import { useLevel } from "@/lib/hooks/useLevel";
import { useCompletion } from "@/lib/hooks/useCompletion";
import { useDay } from "@/lib/hooks/useDay";
import { WEEKS } from "@/lib/data";
import { wipeAllData } from "@/lib/wipeData";
import LoginScreen from "@/components/LoginScreen";
import Header from "@/components/Header";
import WeekNav from "@/components/WeekNav";
import TodayCard from "@/components/TodayCard";
import SidebarStats from "@/components/SidebarStats";
import TrainingTab from "@/components/TrainingTab";
import HomeWorkoutTab from "@/components/HomeWorkoutTab";
import DietTab from "@/components/DietTab";
import DrinksTab from "@/components/DrinksTab";
import ProfileModal from "@/components/ProfileModal";
import BodyGuide from "@/components/BodyGuide";
import CalorieTracker from "@/components/CalorieTracker";

type Tab = "training" | "home" | "diet" | "drinks" | "body" | "calories";

const TAB_LABELS: Record<Tab, string> = {
  training: "🏋️ Training",
  home:     "🏠 Home Workout",
  diet:     "🥗 Diet",
  drinks:   "💧 Hydration",
  body:     "🫀 Body Guide",
  calories: "🔥 Calories",
};

export default function AppRoot() {
  const { user, loading: authLoading, error: authError, signIn, signOut } = useAuth();
  const uid = user?.uid ?? null;

  const [planPhase, setPlanPhase] = useState<0 | 1>(0);
  const currentWeek = WEEKS[planPhase];

  const { toggle, isComplete, countCompleted, totalCompleted, resetCompletions, loaded } = useCompletion(uid);
  const { xp, level, maxLevel, xpProgress, xpIntoLevel, xpForNext, phaseIndex, rank, title } = useLevel(totalCompleted);

  const { day, selectedId, setSelectedId, todayId } = useDay(currentWeek);

  const [tab, setTab]               = useState<Tab>("training");
  const [showProfile, setShowProfile] = useState(false);
  const [levelUpMsg, setLevelUpMsg]   = useState<string | null>(null);

  // Level-up detection. The message may ONLY fire when the level rises as a
  // result of the user actually checking off an exercise (interactedRef). A
  // level jump caused by data loading on page open never sets that flag, so it
  // can never show the toast on reload.
  const prevLevelRef  = useRef<number | null>(null);
  const interactedRef = useRef(false);
  const handleToggle = useCallback((id: string) => {
    interactedRef.current = true;
    toggle(id);
  }, [toggle]);

  useEffect(() => {
    if (!loaded) return;
    if (prevLevelRef.current === null) {
      prevLevelRef.current = level; // baseline silently
      return;
    }
    if (level > prevLevelRef.current && interactedRef.current) {
      setLevelUpMsg(`LEVEL UP! You reached Level ${level} — Rank ${rank}`);
      setTimeout(() => setLevelUpMsg(null), 4000);
    }
    prevLevelRef.current = level;
  }, [loaded, level, rank]);

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
              <TodayCard day={day} phaseIndex={phaseIndex} planPhase={planPhase} countCompleted={countCompleted} />
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
            <WeekNav selectedId={selectedId} todayId={todayId} onSelect={setSelectedId} week={currentWeek} />

            {/* Phase toggle + tab bar */}
            <div style={{
              display: "flex", gap: 6, marginTop: 16, alignItems: "center",
              overflowX: "auto", paddingBottom: 4,
              scrollbarWidth: "none",
            }}>
              {/* Phase 1 / Phase 2 toggle */}
              <div style={{
                display: "flex",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: 3,
                gap: 3,
                flexShrink: 0,
              }}>
                {([0, 1] as const).map((p) => (
                  <motion.button
                    key={p}
                    onClick={() => setPlanPhase(p)}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "7px 12px",
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.3px",
                      background: planPhase === p
                        ? "linear-gradient(135deg, var(--purple), #9333ea)"
                        : "transparent",
                      color: planPhase === p ? "#fff" : "var(--text-muted)",
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p === 0 ? "Weeks 1–2" : "Week 3+"}
                  </motion.button>
                ))}
              </div>

              {/* Tab buttons */}
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
                  <TrainingTab
                    day={day}
                    phaseIndex={phaseIndex}
                    planPhase={planPhase}
                    isComplete={isComplete}
                    onToggle={handleToggle}
                  />
                )}
                {tab === "home"     && <HomeWorkoutTab day={day} planPhase={planPhase} />}
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
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            style={{
              position: "fixed", top: 14, left: 0, right: 0,
              zIndex: 9999,
              display: "flex", justifyContent: "center",
              padding: "0 12px", pointerEvents: "none",
            }}
          >
            <div style={{
              maxWidth: 440, width: "auto",
              background: "linear-gradient(135deg, #7c3aed, #f59e0b)",
              borderRadius: 18, padding: "12px 18px",
              boxShadow: "0 0 40px rgba(245,158,11,0.45), 0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
              display: "flex", alignItems: "center", gap: 10,
              pointerEvents: "auto", boxSizing: "border-box",
            }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>⚡</span>
              <span style={{ fontSize: 13.5, fontWeight: 800, color: "#fff", letterSpacing: "0.2px", textAlign: "center", lineHeight: 1.4 }}>
                {levelUpMsg}
              </span>
              <span style={{ fontSize: 20, flexShrink: 0 }}>⚡</span>
            </div>
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
            onReset={async () => {
              await wipeAllData(uid);
              resetCompletions();
              setShowProfile(false);
              window.location.reload();
            }}
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
