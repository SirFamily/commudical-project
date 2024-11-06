import React, { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import PainBodyImage from "./assets/images/กินข้าว/1.jpg";
import Tool from "./assets/images/กินข้าว/2.jpg"

import AudioA from "./assets/audio/ปวดศีรษะ.mp3";
import AudioB from "./assets/audio/เจ็บปาก.mp3";
import AudioC from "./assets/audio/เจ็บคอ.mp3";
import AudioD from "./assets/audio/เจ็บหน้าอก.m4a";
import AudioE from "./assets/audio/ปวดท้อง.mp3";
import AudioF from "./assets/audio/ปวดแขนซ้าย.mp3";
import AudioG from "./assets/audio/ปวดแขนขวา.mp3";
import AudioH from "./assets/audio/ปวดขาซ้าย.mp3";
import AudioI from "./assets/audio/ปวดขาขวา.mp3";


const PainAssessment = ({ onPainSelect }) => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectlabel, setSelectlabel] = useState(null);

  const painSpots = [
    { id: 1, text: "ปวดศีรษะ", cx: "51%", cy: "8%",audio: AudioA },
    { id: 2, text: "เจ็บปาก", cx: "51%", cy: "15%",audio: AudioB },
    { id: 3, text: "เจ็บคอ", cx: "51%", cy: "19%",audio: AudioC },
    { id: 4, text: "เจ็บหน้าอก", cx: "51%", cy: "27%",audio: AudioD },
    { id: 5, text: "ปวดท้อง", cx: "51%", cy: "40%",audio: AudioE },
    { id: 6, text: "ปวดแขนซ้าย", cx: "31%", cy: "43%",audio: AudioF },
    { id: 7, text: "ปวดแขนขวา", cx: "71%", cy: "43%",audio: AudioG },
    { id: 8, text: "ปวดเข่าซ้าย", cx: "41%", cy: "77%",audio: AudioH },
    { id: 9, text: "ปวดเข่าขวา", cx: "61%", cy: "77%",audio: AudioI },
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
          className="w-full h-auto object-contain shadow-lg rounded-xl"
        />

        {painSpots.map((spot) => (
          <motion.div
            key={spot.id}
            onClick={() => {handleOnClick(spot);
                onPainSelect(selectlabel,spot.audio);
            }}
            className={`absolute cursor-pointer ${
              selectedSpot === spot.id ? "bg-red-500" : "bg-white"
            } rounded-full`}
            style={{
              top: spot.cy,
              left: spot.cx,
              width: "29px",
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
            className="w-full bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4">ระดับความ{selectlabel}</h3>
            <img src={Tool} alt="" className="w-full h-auto object-contain"/>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default PainAssessment;
