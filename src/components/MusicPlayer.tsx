import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import hippoGif from "../assets/music/hippo.png"; 
import musicFile from "../assets/music/music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleImageClick = () => {
    setShowBubble(true);
    setTimeout(() => setShowBubble(false), 2500);
  };

  return (
    <motion.div
      className="mt-12 flex flex-col items-center animate-fade-in relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="relative">
        {/* Cute Pink Hippo GIF without transparent border */}
        <img
          src={hippoGif}
          alt="Cute Pink Hippo"
          className="w-44 h-44 mb-4 cursor-pointer"
          onClick={handleImageClick}
          style={{
            objectFit: "contain", // ensures full PNG is shown
            backgroundColor: "transparent", // keeps original transparency
            filter: "drop-shadow(0 0 8px rgba(255,182,193,0.8)) drop-shadow(0 0 16px rgba(255,105,180,0.6))", // soft glow instead of crop
          }}
        />

        {/* Speech Bubble */}
        <AnimatePresence>
          {showBubble && (
            <motion.div
              className="absolute top-0 left-[-80px] w-36 p-3 bg-pink-400 text-white rounded-2xl shadow-lg text-sm"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              I'm just messin with you baby😭
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glowing Play/Pause Button */}
      <motion.button
        onClick={togglePlay}
        className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-transform"
        style={{
          background:
            "linear-gradient(90deg, #ff85b3, #ffb6c1, #ff85b3)",
          boxShadow:
            "0 0 10px rgba(255,182,193,0.8), 0 0 20px rgba(255,105,180,0.9), 0 0 40px rgba(255,182,193,0.7)",
        }}
        animate={{
          scale: isPlaying ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow:
            "0 0 15px rgba(255,182,193,1), 0 0 30px rgba(255,105,180,1), 0 0 50px rgba(255,182,193,0.9)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        {isPlaying ? "Pause" : "Play"}
      </motion.button>

      {/* Pink Music Spectrum */}
      <div className="flex items-end gap-1 mt-6 h-20">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #ffb6c1, #ff99c8, #ffccd5)",
            }}
            animate={{
              height: isPlaying
                ? [
                    `${10 + Math.random() * 80}%`,
                    `${20 + Math.random() * 80}%`,
                    `${10 + Math.random() * 80}%`,
                  ]
                : "15%",
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05,
            }}
          />
        ))}
      </div>

      {/* Audio Player */}
      <audio ref={audioRef} src={musicFile} preload="auto" />
    </motion.div>
  );
}
