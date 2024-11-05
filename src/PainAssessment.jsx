import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PainBodyImage from "./assets/images/กินข้าว/1.jpg";

const PainAssessment = ({ onPainSelect }) => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [painLevel, setPainLevel] = useState(null);
  const [selectlabel, setSelectlabel] = useState(null);

  const painLevels = [
    { level: 0, color: "#4CAF50", text: "ไม่ปวด" },
    { level: 2, color: "#8BC34A", text: "ปวดน้อย" },
    { level: 4, color: "#FFEB3B", text: "ปวดปานกลาง" },
    { level: 6, color: "#FFC107", text: "ปวดมาก" },
    { level: 8, color: "#FF9800", text: "ปวดมากที่สุด" },
    { level: 10, color: "#F44336", text: "ปวดรุนแรงที่สุด" },
  ];

  const painSpots = [
    { id: 1, text: "ศีรษะ", cx: "51%", cy: "8%" },
    { id: 2, text: "ปาก", cx: "51%", cy: "15%" },
    { id: 3, text: "คอ", cx: "51%", cy: "19%" },
    { id: 4, text: "หน้าอก", cx: "51%", cy: "27%" },
    { id: 5, text: "ท้อง", cx: "51%", cy: "40%" },
    { id: 6, text: "แขนซ้าย", cx: "31%", cy: "43%" },
    { id: 7, text: "แขนขวา", cx: "71%", cy: "43%" },
    { id: 8, text: "เข่าซ้าย", cx: "41%", cy: "77%" },
    { id: 9, text: "เข่าขวา", cx: "61%", cy: "77%" },
  ];

  const handleOnClick = (spot) => {
    setSelectedSpot(spot.id);
    setSelectlabel(spot.text);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-4">
      <div className="relative w-94 h-120">
        <img
          src={PainBodyImage}
          alt="Pain assessment body"
          className="w-full h-auto object-contain"
        />

        {painSpots.map((spot) => (
          <motion.div
            key={spot.id}
            onClick={() => handleOnClick(spot)}
            className={`absolute cursor-pointer ${
              selectedSpot === spot.id ? "bg-red-500" : "bg-white"
            } rounded-full`}
            style={{
              top: spot.cy,
              left: spot.cx,
              width: "20px",
              height: "20px",
              transform: "translate(-50%, -50%)",
              border: "2px solid #666",
            }}
          />
        ))}
      </div>

      {selectedSpot && (
        <AnimatePresence>
          <motion.div
            key="pain-level-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="w-full max-w-md bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4">ระดับความปวด {selectlabel}</h3>
            <div className="grid grid-cols-3 gap-4">
              {painLevels.map((pain) => (
                <motion.button
                  key={pain.level}
                  onClick={() => {
                    setPainLevel(pain.level);
                    onPainSelect(selectlabel, pain.text);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    painLevel === pain.level
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-200"
                  }`}
                  style={{ backgroundColor: pain.color }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {pain.level}
                    </div>
                    <div className="text-sm text-white">{pain.text}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default PainAssessment;
