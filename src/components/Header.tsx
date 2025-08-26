import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      className="text-center py-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Main Title with vibrant red glow */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-300 drop-shadow-lg"
        style={{
          WebkitTextStroke: "1px rgba(255, 60, 60, 0.9)", // deep red outline
          textShadow:
            "0 0 10px rgba(255, 99, 99, 0.8), 0 0 20px rgba(255, 0, 0, 0.9), 0 0 40px rgba(255, 99, 99, 0.7)",
        }}
        animate={{
          textShadow: [
            "0 0 10px rgba(255, 99, 99, 0.8), 0 0 20px rgba(255, 0, 0, 0.9), 0 0 40px rgba(255, 99, 99, 0.7)",
            "0 0 15px rgba(255, 80, 80, 0.9), 0 0 30px rgba(255, 0, 0, 1), 0 0 50px rgba(255, 99, 99, 0.8)",
            "0 0 10px rgba(255, 99, 99, 0.8), 0 0 20px rgba(255, 0, 0, 0.9), 0 0 40px rgba(255, 99, 99, 0.7)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Happy 13th Months of Love BABYYY💖
      </motion.h1>

      {/* Subtitle with stronger pink lightning underline */}
      <motion.p
        className="relative inline-block text-lg md:text-xl mt-3 text-pink-200 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        395 days and counting...
        {/* Strong pink glow */}
        <span
          className="absolute left-0 bottom-0 w-full h-1 rounded-full blur-sm"
          style={{
            background:
              "linear-gradient(90deg, #ff4d94, #ffb6c1, #ff4d94, #ffb6c1, #ff4d94)",
            backgroundSize: "300% 100%",
          }}
        ></span>
        {/* Animated lightning effect */}
        <motion.span
          className="absolute left-0 bottom-0 w-full h-0.5 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #ff4d94, #ffb6c1, #ff4d94, #ffb6c1, #ff4d94)",
            backgroundSize: "300% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.span>
      </motion.p>
    </motion.div>
  );
}
