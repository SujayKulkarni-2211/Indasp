import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ScrollEffect = () => {
  const messages = [
    "🚀 Skills get you internships!",
    "🌟 Top 3-10 performers get industry expert guidance!",
    "🎯 Top 3 are trained for research papers and interview opportunities."
  ];

  return (
    <div className="relative w-full h-20 overflow-hidden bg-gray-900 text-green-400 flex items-center justify-center">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear"
        }}
        className="absolute flex flex-col space-y-4 text-center text-xl font-bold"
      >
        {messages.map((msg, index) => (
          <div key={index} className="py-2">{msg}</div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollEffect;
