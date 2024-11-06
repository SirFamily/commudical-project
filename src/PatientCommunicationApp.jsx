import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PainAssessment from "./PainAssessment";

// Component สำหรับไอคอนเสียง
const SpeakerIcon = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  </motion.div>
);

import BlueA from "./assets/images/กินข้าว/10.jpg";
import BlueB from "./assets/images/กินข้าว/8.jpg";
import BlueC from "./assets/images/กินข้าว/17.jpg";
import BlueD from "./assets/images/กินข้าว/18.jpg";
import BlueE from "./assets/images/กินข้าว/9.jpg";
import BlueF from "./assets/images/กินข้าว/11.jpg";
import BlueG from "./assets/images/กินข้าว/12.jpg";
import BlueH from "./assets/images/กินข้าว/13.jpg";
import BlueI from "./assets/images/กินข้าว/14.jpg";
import BlueJ from "./assets/images/กินข้าว/15.jpg";
import BlueK from "./assets/images/กินข้าว/16.jpg";
import BlueL from "./assets/images/กินข้าว/19.jpg";
import YellowA from "./assets/images/กินข้าว/7.jpg";
import YellowB from "./assets/images/กินข้าว/6.jpg";
import YellowC from "./assets/images/กินข้าว/21.jpg";
import YellowD from "./assets/images/กินข้าว/20.jpg";
import YellowE from "./assets/images/กินข้าว/3.jpg";
import YellowF from "./assets/images/กินข้าว/4.jpg";
import YellowG from "./assets/images/กินข้าว/5.jpg";
import YellowH from "./assets/images/กินข้าว/22.jpg";
import YellowI from "./assets/images/กินข้าว/23.jpg";
import YellowJ from "./assets/images/กินข้าว/24.jpg";
import YellowK from "./assets/images/กินข้าว/25.jpg";
import YellowL from "./assets/images/กินข้าว/26.jpg";

import AudioA from "./assets/audio/ดื่มน้ำ.mp3";
import AudioB from "./assets/audio/ปรับระดับเตียง.mp3";
import AudioC from "./assets/audio/ต้องการพบแพทย์.mp3";
import AudioD from "./assets/audio/ต้องการพบญาติ.mp3";
import AudioE from "./assets/audio/หิวข้าว.mp3";
import AudioF from "./assets/audio/ต้องการพลิกตัว.mp3";
import AudioG from "./assets/audio/ต้องการดูดเสมหะ.mp3";
import AudioH from "./assets/audio/ปัสสาวะ.mp3";
import AudioI from "./assets/audio/ถ่ายอุจจาระ.mp3";
import AudioJ from "./assets/audio/ต้องการอาบน้ำ.mp3";
import AudioK from "./assets/audio/เปิด ปิดไฟ.mp3";
import AudioL from "./assets/audio/อยากกลับบ้าน.mp3";

import AudioAA from "./assets/audio/รู้สึกร้อน.mp3";
import AudioBB from "./assets/audio/รู้สึกหนาว.mp3";
import AudioCC from "./assets/audio/รู้สึกเหนื่อย.mp3";
import AudioDD from "./assets/audio/เครียด วิตกกังวล.mp3";
import AudioEE from "./assets/audio/คลื่นไส้ อาเจียน.mp3";
import AudioFF from "./assets/audio/หายใจลำบาก.mp3";
import AudioGG from "./assets/audio/รู้สึกคัน.mp3";
import AudioHH from "./assets/audio/รู้สึกเบื่อ.mp3";
import AudioII from "./assets/audio/รู้สึกผิดหวัง.mp3";
import AudioJJ from "./assets/audio/รู้สึกโกรธ.mp3";
import AudioKK from "./assets/audio/รู้สึกสบายดี.mp3";
import AudioLL from "./assets/audio/ขอบคุณ.mp3";

// PatientCommunicationApp Component
const PatientCommunicationApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const categories = [
    {
      id: "pain",
      title: "อาการปวด",
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      component: PainAssessment,
    },
    {
      id: "needs",
      title: "ความต้องการ",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      phrases: [
        { text: "ดื่มน้ำ", image: BlueA, audio: AudioA },
        { text: "ต้องการปรับระดับเตียง", image: BlueB, audio: AudioB  },
        { text: "ต้องการพบแพทย์", image: BlueC, audio: AudioC },
        { text: "ต้องการพบญาติ", image: BlueD, audio: AudioD  },
        { text: "หิวข้าว", image: BlueE, audio: AudioE  },
        { text: "ต้องการพลิกตัว", image: BlueF, audio: AudioF  },
        { text: "ต้องการดูดเสมหะ", image: BlueG, audio: AudioG  },
        { text: "ปัสสาวะ", image: BlueH, audio: AudioH  },
        { text: "ถ่ายอุจจาระ", image: BlueI, audio: AudioI  },
        { text: "ต้องการอาบน้ำ", image: BlueJ, audio: AudioJ  },
        { text: "เปิด ปิดไฟ", image: BlueK, audio: AudioK  },
        { text: "อยากกลับบ้าน", image: BlueL, audio: AudioL  },
      ],
    },
    {
      id: "feelings",
      title: "ความรู้สึก",
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      phrases: [
        { text: "รู้สึกร้อน", image: YellowA, audio: AudioAA },
        { text: "รู้สึกหนาว", image: YellowB, audio: AudioBB },
        { text: "รู้สึกเหนื่อย", image: YellowC, audio: AudioCC },
        { text: "เครียด วิตกกังวล", image: YellowD, audio: AudioDD },
        { text: "คลื่นไส้ อาเจียน", image: YellowE, audio: AudioEE },
        { text: "หายใจลำบาก", image: YellowF, audio: AudioFF },
        { text: "รู้สึกคัน", image: YellowG, audio: AudioGG },
        { text: "รู้สึกเบื่อ", image: YellowH, audio: AudioHH },
        { text: "รู้สึกผิดหวัง", image: YellowI, audio: AudioII },
        { text: "รู้สึกโกรธ", image: YellowJ, audio: AudioJJ },
        { text: "รู้สึกสบายดี", image: YellowK, audio: AudioKK },
        { text: "ขอบคุณ", image: YellowL, audio: AudioLL },
      ],
    },
  ];

  const handlePainSelection = (spot,audio) => {
    console.log("Selected spot:", spot);
    speak(audio)
  };

const speak = (audioFile) => {
  const audio = new Audio(audioFile);
  audio.play();

  // Optional: ถ้าต้องการแสดงไอคอนเมื่อเล่นเสียง
  setIsSpeaking(true);
  setTimeout(() => setIsSpeaking(false), 3000); // ตั้งเวลาเพื่อให้ไอคอนหายไปหลัง 2 วินาที

  audio.onerror = () => {
    console.error("Error playing audio");
    setIsSpeaking(false);
  };
};

  

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <head>
        <meta name="description" content="ระบบการสื่อสารสำหรับผู้ป่วยเพื่อสื่อสารความต้องการและความรู้สึก" />
      </head>
      <motion.h1
        className="text-4xl font-extrabold text-blue-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Smart Voice
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold text-gray-700 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        การสื่อสารอัจฉริยะสำหรับผู้ป่วยใส่ท่อช่วยหายใจ
      </motion.h2>
      <motion.h2
        className="text-lg font-semibold text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
      >
        (Smart Communication For Intubated Patients)
      </motion.h2>
      <div className="grid grid-row-3 gap-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`${category.color} ${category.hoverColor} text-white rounded-xl p-8 text-2xl font-bold shadow-lg`}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedCategory && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {categories.find((c) => c.id === selectedCategory)?.component ? (
              React.createElement(
                categories.find((c) => c.id === selectedCategory).component,
                {
                  onPainSelect: handlePainSelection,
                }
              )
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {categories
                  .find((c) => c.id === selectedCategory)
                  .phrases.map((phrase, index) => (
                    <motion.button
                      key={index}
                      onClick={() => speak(phrase.audio)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white flex flex-col justify-between items-center rounded-xl p-4 shadow-lg border border-gray-200 transition duration-200 ease-in-out transform"
                    >
                      <img
                        src={phrase.image}
                        alt={phrase.text}
                        className="w-50 h-50 mr-4"
                      />
                      <span className="text-xl">{phrase.text}</span>
                    </motion.button>
                  ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

            {isSpeaking && <div className="fixed bottom-4 right-4"><SpeakerIcon /></div>}

    </div>
  );
};

export default PatientCommunicationApp;
