import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center mt-16 mb-20">
      {/* Envelope Container */}
      <motion.div
        className="relative w-80 h-52 cursor-pointer"
        onClick={() => setOpen(!open)}
        initial={false}
        animate={{ scale: open ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Envelope Base (Back) */}
        <div className="absolute inset-0 bg-pink-900 rounded-lg shadow-2xl" />

        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/2 bg-pink-700 rounded-t-lg origin-top"
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Show Letter only when open */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="letter"
              className="absolute inset-4 bg-gradient-to-b from-pink-800/80 via-purple-900/80 to-pink-900/90 rounded-xl shadow-2xl p-4 text-pink-50 text-center font-[cursive] overflow-hidden"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "-40%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl text-pink-300 font-bold mb-2">My Love 💖</h2>
              <p className="text-sm leading-relaxed">
                From the moment we met, my world has been brighter.  
                You’re my safe place, my happiness, and my forever.  
                I’ll love you endlessly. 💕
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
