"use client";
import dynamic from "next/dynamic";

// Load the entire app client-side only — Firebase Auth cannot run on the server
const AppRoot = dynamic(() => import("@/components/AppRoot"), { ssr: false });

export default function Page() {
  return <AppRoot />;
}
