import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CuteLetter() {
  const [step, setStep] = useState(0);

  const messages = [
    "I have something for you here baby! Click me! 💌",
    "You really want to see it? eheheh 😏",
    "Are you completely sure my love??? 💗",
    "REALLY REALLY REALLY?! 😘",
    "Click the hippo below to open! 💖",
    "I LOVE YOUUU BABY😭💗 (eheheh click me)",
  ];

  const handleNext = () => {
    if (step < messages.length) setStep(step + 1);
  };

  return (
    <div className="text-center mt-24 flex flex-col items-center gap-6 relative">
      {/* Floating decorative hearts & sparkles around */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute"
            style={{
              fontSize: `${Math.random() * 20 + 14}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30], opacity: [1, 0] }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {Math.random() > 0.5 ? "💖" : "✨"}
          </motion.span>
        ))}
      </div>

      {/* Cute glowing button */}
      {step < messages.length && (
        <motion.button
          className="px-6 py-3 rounded-full text-sm font-bold text-white shadow-lg bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 hover:from-pink-400 hover:to-pink-400 transition-all border-2 border-pink-200 relative"
          style={{
            boxShadow: "0 0 15px rgba(255, 182, 193, 0.9)",
          }}
          onClick={handleNext}
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {messages[step]}
        </motion.button>
      )}

      {/* Envelope & Letter */}
      <AnimatePresence>
        {step >= messages.length && (
          <motion.div
            key="envelope"
            className="relative flex flex-col items-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Envelope base */}
            <motion.div
              className="w-64 h-40 rounded-b-xl shadow-lg relative overflow-hidden border-4 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200"
              style={{
                borderImage: "linear-gradient(45deg, pink, #ffd6e8, #ffb6c1) 1",
                boxShadow: "0 0 20px rgba(255, 192, 203, 0.6)",
              }}
            >
              {/* Envelope flap animation */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-300 to-pink-200 rounded-t-lg"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -180 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                style={{
                  transformOrigin: "top",
                }}
              />
            </motion.div>

            {/* Letter sliding out with floating hearts inside */}
            <motion.div
              className="absolute top-0 bg-white rounded-lg shadow-md p-6 w-56 text-pink-700 font-sans border-4 overflow-hidden"
              style={{
                borderImage: "linear-gradient(45deg, pink, #ffd6e8, #ffb6c1) 1",
                boxShadow: "0 0 15px rgba(255, 182, 193, 0.8)",
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "-60%", opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: 1.2,
                type: "spring",
                stiffness: 80,
              }}
            >
              {/* Subtle floating hearts inside */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-pink-300 opacity-60"
                    style={{
                      fontSize: `${Math.random() * 14 + 10}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{ y: [0, -15], opacity: [0.6, 0] }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    💖
                  </motion.span>
                ))}
              </div>

              {/* Letter text */}
              <p className="font-bold text-pink-500 relative z-10">Dear Milende💖,</p>
              <p className="mt-2 text-sm leading-relaxed relative z-10">
                Happy 13th months of love! 🌸  
                Every day with you is magical, and I’m so grateful for every moment we share.  
                You are my happiness and my forever. 💕
              </p>
              <p className="mt-2 font-semibold relative z-10">Yours Truly, 💌</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
