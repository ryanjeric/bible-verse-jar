import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Emotion } from "./EmotionSelector";

interface VerseJarProps {
  selectedEmotion: Emotion | null;
  onOpenJar: () => void;
}

const VerseJar: React.FC<VerseJarProps> = ({
  selectedEmotion = null,
  onOpenJar = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Reset jar state when emotion changes
  useEffect(() => {
    setIsOpen(false);
  }, [selectedEmotion]);

  const handleJarClick = () => {
    setIsOpen(true);
    onOpenJar();
  };

  if (!selectedEmotion) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md h-full">
        <div className="text-center text-gray-500 mb-4">
          <p>Select an emotion above to see your verse jar</p>
        </div>
        <motion.div
          className="w-48 h-64 bg-gray-100 rounded-3xl opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(240,240,240,0.5))",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-400 text-sm">Jar awaiting emotion</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md h-full">
      <div className="text-center mb-4">
        <h3 className={`text-xl font-medium ${selectedEmotion.color}`}>
          {isOpen
            ? "Your verse for feeling"
            : "Click jar to receive Bible verse for feeling"}{" "}
          <span className="font-bold">
            {selectedEmotion.name.toLowerCase()}
          </span>
        </h3>
      </div>

      <motion.div
        className={`w-48 h-64 rounded-3xl cursor-pointer ${isOpen ? "open" : ""} ${selectedEmotion.bgColor}`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
          boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
        }}
        onClick={!isOpen ? handleJarClick : undefined}
        animate={{
          scale: isOpen ? [1, 1.05, 1] : 1,
          rotate: isOpen ? [0, -2, 2, -1, 0] : 0,
        }}
        transition={{
          duration: isOpen ? 0.5 : 0.2,
          ease: "easeInOut",
        }}
      >
        {!isOpen && (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <p className={`${selectedEmotion.color} font-medium`}>
                Tap to open
              </p>
            </motion.div>
          </div>
        )}

        {isOpen && (
          <motion.div
            className="w-full h-full flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="text-center px-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div
                className={`w-10 h-10 mx-auto mb-2 rounded-full ${selectedEmotion.bgColor} flex items-center justify-center`}
              >
                <span className={`text-lg ${selectedEmotion.color}`}>✨</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default VerseJar;
