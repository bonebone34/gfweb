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
      {/* Floating decorative hearts & sparkles */}
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
              className="w-72 h-44 rounded-b-xl shadow-lg relative overflow-hidden border-4 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200"
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
                style={{ transformOrigin: "top" }}
              />
            </motion.div>

            {/* Letter sliding out */}
<motion.div
  className="absolute top-0 bg-white rounded-lg shadow-md p-6 w-[90vw] sm:w-[500px] max-w-3xl text-pink-700 font-sans border-4 overflow-hidden"
  style={{
    borderImage: "linear-gradient(45deg, pink, #ffd6e8, #ffb6c1) 1",
    boxShadow: "0 0 15px rgba(255, 182, 193, 0.8)",
  }}
  initial={{ y: "100%", opacity: 0 }}
  animate={{ y: "-55%", opacity: 1 }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
    delay: 1.2,
    type: "spring",
    stiffness: 80,
  }}
>

              {/* Floating hearts inside letter */}
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

              {/* Letter text with proper formatting */}
              <p className="font-bold text-pink-500 mb-4">Dear Milende 💖,</p>

              <p className="text-sm leading-relaxed mb-3">
                Happy monthsary, my love! I hope you know how much you mean to me baby. 
                You are everything I could've ever asked for, the only person I would want to go 
                through anything in this world with. Please accept this little surprise letter of mine.
              </p>

              <p className="text-sm leading-relaxed mb-3">
                I hope you're doing well, my baby. If not, just message me or call me! 
                I'll always come and do my best to fix everything for you. Just come to me 
                when everything feels heavy. Run to me with every inconvenience. Come by my side
                through happiness & sadness. I have my arms wide open only you for my baby, ALWAYS FOR YOUUU, ALWAYS!!!
              </p>

              <p className="text-sm leading-relaxed mb-3">
                Come to me all the way to me my baby girl you are always safe. 
                I love you so very much baby. I hope I'm able to fill your face with a smile,
                I hope this little website and letter of mine helps your day be better.
                I know you're not feeling well my dear so please don't worry too much okay?
                You will always be loved by me, ALWAYS!!!!
              </p>

              <p className="mt-4 font-semibold">Yours Truly, 💌</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
