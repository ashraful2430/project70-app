"use client";
import { motion } from "framer-motion";

interface Props {
  onSignIn: () => void;
  error: string | null;
}

export default function LoginScreen({ onSignIn, error }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "20%", left: "30%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "20%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "relative", zIndex: 1,
          width: "100%", maxWidth: 420,
          background: "var(--surface)",
          border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: 24,
          padding: "40px 32px",
          textAlign: "center",
          boxShadow: "0 0 60px rgba(124,58,237,0.12)",
        }}
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          style={{
            width: 90, height: 90, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--purple), #4c1d95)",
            border: "3px solid var(--gold)",
            margin: "0 auto 20px",
            overflow: "hidden",
            boxShadow: "0 0 20px rgba(245,158,11,0.3)",
          }}
        >
          <img
            src="/SAVE_20260109_010635.jpg"
            alt="Ashikur"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, fontWeight: 900, color: "var(--gold)",
            marginTop: -90,
          }}>
            A
          </div>
        </motion.div>

        {/* Title */}
        <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 6 }}>
          Project 70
        </div>
        <h1 style={{
          fontSize: 30, fontWeight: 900,
          background: "linear-gradient(90deg, var(--purple-light), var(--gold-light))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 6,
        }}>
          Solo Hunter
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 32 }}>
          Your personal fitness journey to <strong style={{ color: "var(--gold)" }}>70 kg</strong>.
          <br />Sign in to sync your progress across all devices.
        </p>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: 10, padding: "10px 14px",
              fontSize: 13, color: "#f87171", marginBottom: 20,
            }}
          >
            {error}
          </motion.div>
        )}

        {/* Sign in button */}
        <motion.button
          onClick={onSignIn}
          whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(124,58,237,0.35)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            width: "100%",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            padding: "14px 24px",
            borderRadius: 14,
            background: "linear-gradient(135deg, var(--purple), #5b21b6)",
            border: "1px solid rgba(167,139,250,0.3)",
            color: "#fff",
            fontSize: 15, fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <GoogleIcon />
          Sign in with Google
        </motion.button>

        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 20, lineHeight: 1.6 }}>
          Sign in with any Google account.
          <br />Your progress syncs automatically across all devices.
        </p>
      </motion.div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}
