import React from "react";
import { motion } from "framer-motion";
import tulip from "../assets/images/tulip.png";

const NUM_TULIPS = 10;

export default function FloatingTulip() {
  const tulips = Array.from({ length: NUM_TULIPS });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {tulips.map((_, idx) => {
        const size = 30 + Math.random() * 40; // random size
        const left = Math.random() * 100; // random horizontal position
        const duration = 8 + Math.random() * 5; // random float speed

        return (
          <motion.img
            key={idx}
            src={tulip}
            alt="tulip"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
            }}
            className="absolute bottom-[-50px] opacity-70"
            animate={{ y: [-50, -800] }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
