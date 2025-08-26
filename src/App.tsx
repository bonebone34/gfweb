import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import CuteLetter from "./components/CuteLetter";
import MusicPlayer from "./components/MusicPlayer";
import FloatingTulip from "./components/FloatingTulip";
import VantaBackground from "./components/VantaBackground";

export default function App() {
  return (
    <div className="relative min-h-screen text-pink-50 overflow-hidden">
      {/* Vanta Background */}
      <VantaBackground />

      {/* Optional floating tulips on top of background */}
      <FloatingTulip />

      {/* Main content on top */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 sm:px-6 py-16">
        <Header />
        <Gallery />
        <CuteLetter />
        <MusicPlayer />
      </div>
    </div>
  );
}
