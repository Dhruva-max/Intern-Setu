import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MatchesCarousel = ({ matches }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMatch = () => {
    setCurrentIndex((prev) => (prev + 1) % matches.length);
  };

  const prevMatch = () => {
    setCurrentIndex((prev) => (prev - 1 + matches.length) % matches.length);
  };

  if (!matches || matches.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No matches found</p>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-lg shadow-offset-yellow border-2 border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Your Matches</h2>
        <div className="flex gap-2">
          <button
            onClick={prevMatch}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            disabled={matches.length <= 1}
          >
            ←
          </button>
          <button
            onClick={nextMatch}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            disabled={matches.length <= 1}
          >
            →
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-internYellow rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
            🎯
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{matches[currentIndex].title}</h3>
          <p className="text-gray-600 text-sm mb-4">{matches[currentIndex].description}</p>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
              ✕ Pass
            </button>
            <button className="px-4 py-2 bg-internYellow text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors">
              ✓ Accept
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-4 gap-2">
        {matches.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-internBlue' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchesCarousel;
