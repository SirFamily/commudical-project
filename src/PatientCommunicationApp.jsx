import React, { useState, useRef } from "react";
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
  </motion.div>
);

import BlueA from './assets/images/กินข้าว/10.jpg';
import BlueB from './assets/images/กินข้าว/8.jpg';
import BlueC from './assets/images/กินข้าว/17.jpg';
import BlueD from './assets/images/กินข้าว/18.jpg';
import BlueE from './assets/images/กินข้าว/9.jpg';
import BlueF from './assets/images/กินข้าว/11.jpg';
import BlueG from './assets/images/กินข้าว/12.jpg';
import BlueH from './assets/images/กินข้าว/13.jpg';
import BlueI from './assets/images/กินข้าว/14.jpg';
import BlueJ from './assets/images/กินข้าว/15.jpg';
import BlueK from './assets/images/กินข้าว/16.jpg';
import BlueL from './assets/images/กินข้าว/19.jpg';
import YellowA from './assets/images/กินข้าว/7.jpg';
import YellowB from './assets/images/กินข้าว/6.jpg';
import YellowC from './assets/images/กินข้าว/21.jpg';
import YellowD from './assets/images/กินข้าว/20.jpg';
import YellowE from './assets/images/กินข้าว/3.jpg';
import YellowF from './assets/images/กินข้าว/4.jpg';
import YellowG from './assets/images/กินข้าว/5.jpg';
import YellowH from './assets/images/กินข้าว/22.jpg';
import YellowI from './assets/images/กินข้าว/23.jpg';
import YellowJ from './assets/images/กินข้าว/24.jpg';
import YellowK from './assets/images/กินข้าว/25.jpg';
import YellowL from './assets/images/กินข้าว/26.jpg';

// PatientCommunicationApp Component
const PatientCommunicationApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const touchableRef = useRef(null);

  const categories = [
    {
      id: 'pain',
      title: 'อาการปวด',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      component: PainAssessment,
    },
    {
      id: 'needs',
      title: 'ความต้องการ',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      phrases: [
        { text: 'ต้องการน้ำ', image: BlueA },
        { text: 'ปรับท่านอน', image: BlueB },
        { text: 'ต้องการพบแพทย์', image: BlueC },
        { text: 'ต้องการพบญาติ', image: BlueD },
        { text: 'หิว', image: BlueE },
        { text: 'พลิกตัว', image: BlueF },
        { text: 'ดูดเสมหะ', image: BlueG },
        { text: 'ปัสสาวะ', image: BlueH },
        { text: 'ถ่ายอุุจจาระ', image: BlueI },
        { text: 'อาบน้ำ', image: BlueJ },
        { text: 'เปิด ปิดไฟ', image: BlueK },
        { text: 'อยากกลับบ้าน', image: BlueL },
      ],
    },
    {
      id: 'feelings',
      title: 'ความรู้สึก',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
      phrases: [
        { text: 'ร้อน', image: YellowA },
        { text: 'หนาว', image: YellowB },
        { text: 'เหนื่อย', image: YellowC },
        { text: 'เครียด/วิตกกังวล', image: YellowD },
        { text: 'คลื่นไส้/อาเจียน', image: YellowE },
        { text: 'หายใจลำบาก', image: YellowF },
        { text: 'คัน', image: YellowG },
        { text: 'เบื่อ', image: YellowH },
        { text: 'ผิดหวัง', image: YellowI },
        { text: 'โกรธ', image: YellowJ },
        { text: 'สบายดี', image: YellowK },
        { text: 'ขอบคุณ', image: YellowL },
      ],
    },
  ];

  const handlePainSelection = (spot, level) => {
    console.log("Selected spot:", spot, "with level:", level);
  };

  const speak = (text) => {
    if (!('speechSynthesis' in window)) {
      console.error('Browser does not support speech synthesis');
      return;
    }

    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'th-TH';

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(speech);
  };

  const handleTouchStart = (e) => {
    if (touchableRef.current) {
      touchableRef.current.addEventListener('touchmove', handleTouchMove);
      touchableRef.current.addEventListener('touchend', handleTouchEnd);
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (touchableRef.current) {
      touchableRef.current.removeEventListener('touchmove', handleTouchMove);
      touchableRef.current.removeEventListener('touchend', handleTouchEnd);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 p-4"
      onTouchStart={handleTouchStart}
      ref={touchableRef}
    >
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
              React.createElement(categories.find((c) => c.id === selectedCategory).component, {
                onPainSelect: handlePainSelection,
              })
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {categories
                  .find((c) => c.id === selectedCategory)
                  .phrases.map((phrase, index) => (
                    <motion.button
                      key={index}
                      onClick={() => speak(phrase.text)}
                      onTouchStart={(e) => e.preventDefault()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white flex flex-col justify-between items-center justify-center rounded-xl p-4 shadow-lg border border-gray-200 transition duration-200 ease-in-out transform"
                    >
                      <img src={phrase.image} alt={phrase.text} className="w-50 h-50 mr-4" />
                      <span className="text-2xl">{phrase.text}</span>
                    </motion.button>
                  ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4">
        {isSpeaking && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <SpeakerIcon />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PatientCommunicationApp;