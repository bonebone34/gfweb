import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";

const images = [
  { src: img1, caption: "You will ❤️" },
  { src: img2, caption: "always be 💕" },
  { src: img3, caption: "my babyyy 💗" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <div className="flex justify-center gap-8 flex-wrap mt-10">
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white p-3 rounded-xl shadow-lg border-4 border-pink-200 transition-all cursor-pointer"
            style={{
              transform: `rotate(${idx % 2 === 0 ? "-4deg" : "4deg"})`,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              boxShadow: "0 12px 25px rgba(255, 182, 193, 0.5)",
            }}
            onClick={() => setSelectedImg(item.src)}
          >
            {/* Heart decoration */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-pink-400 text-xl">
              ❤️
            </div>

            {/* Photo */}
            <img
              src={item.src}
              alt={item.caption}
              className="w-44 h-44 object-cover rounded-lg shadow-md"
            />

            {/* Caption */}
            <p className="text-center text-sm font-bold mt-2 text-pink-600 font-sans">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg border-4 border-pink-300"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
