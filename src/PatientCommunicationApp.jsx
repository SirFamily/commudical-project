import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const SpeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

import RedB from './assets/อาการปวด/ปวดท่อช่วยหายใจ.png'
import RedC from './assets/อาการปวด/ปวดหัว.png'
import RedD from './assets/อาการปวด/ปสดท้อง.png'

import BlueA from './assets/ความต้องการ/ต้องการน้ำ.png'
import BlueB from './assets/ความต้องการ/ปรับท่านอน.png'
import BlueC from './assets/ความต้องการ/พบแพทย์.png'
import BlueD from './assets/ความต้องการ/พบญาติ.png'

const PatientCommunicationApp = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [messageHistory, setMessageHistory] = useState([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
  
  const categories = [
    {
      id: 'pain',
      title: 'อาการปวด',
      icon: '/api/placeholder/64/64',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      phrases: [
        { text: 'ปวดมาก', image: '/api/placeholder/48/48', description: 'ปวดรุนแรง ต้องการยาแก้ปวด' },
        { text: 'ปวดท่อช่วยหายใจ', image: RedB, description: 'รู้สึกระคายเคืองที่ท่อช่วยหายใจ' },
        { text: 'ปวดหัว', image: RedC, description: 'มีอาการปวดศีรษะ' },
        { text: 'ปวดท้อง', image: RedD, description: 'มีอาการปวดบริเวณท้อง' },
      ]
    },
    {
      id: 'needs',
      title: 'ความต้องการ',
      icon: '/api/placeholder/64/64',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      phrases: [
        { text: 'ต้องการน้ำ', image: BlueA, description: 'ต้องการดื่มน้ำ' },
        { text: 'ปรับท่านอน', image: BlueB, description: 'ต้องการเปลี่ยนท่านอน' },
        { text: 'ต้องการพบแพทย์', image: BlueC, description: 'ต้องการปรึกษาแพทย์' },
        { text: 'ต้องการพบญาติ', image: BlueD, description: 'ต้องการพบครอบครัว' },
      ]
    },
    {
      id: 'feelings',
      title: 'ความรู้สึก',
      icon: '/api/placeholder/64/64',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
      phrases: [
        { text: 'รู้สึกร้อน', image: '/api/placeholder/48/48', description: 'รู้สึกร้อน ต้องการปรับอุณหภูมิ' },
        { text: 'รู้สึกหนาว', image: '/api/placeholder/48/48', description: 'รู้สึกหนาว ต้องการผ้าห่ม' },
        { text: 'เหนื่อย', image: '/api/placeholder/48/48', description: 'รู้สึกเหนื่อย ต้องการพัก' },
        { text: 'นอนไม่หลับ', image: '/api/placeholder/48/48', description: 'มีปัญหาการนอน' },
      ]
    },
  ];

  const emergencyPhrases = [
    { text: 'หายใจลำบาก', image: '/api/placeholder/48/48', description: 'มีปัญหาในการหายใจ' },
    { text: 'เจ็บหน้าอกมาก', image: '/api/placeholder/48/48', description: 'มีอาการเจ็บหน้าอกรุนแรง' },
    { text: 'คลื่นไส้อาเจียน', image: '/api/placeholder/48/48', description: 'รู้สึกไม่สบาย คลื่นไส้' },
  ];

  const speak = (text) => {
    // ตรวจสอบว่าเบราว์เซอร์รองรับ speech synthesis หรือไม่
    if (!('speechSynthesis' in window)) {
      console.error('Browser does not support speech synthesis');
      return;
    }

    // หยุดการพูดที่กำลังทำงานอยู่ (ถ้ามี)
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'th-TH';
    
    // ตั้งค่า callback functions
    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
    };

    // เริ่มการพูด
    window.speechSynthesis.speak(speech);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handlePhraseClick = (phrase) => {
    setMessageHistory(prev => [{
      text: phrase.text,
      description: phrase.description,
      timestamp: new Date()
    }, ...prev]);

    speak(phrase.text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with animation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white shadow-sm fixed top-0 w-full z-10"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">ระบบสื่อสารสำหรับผู้ป่วย</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="แจ้งเตือนพยาบาล"
          >
            <AlertIcon />
          </motion.button>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pt-20 pb-24">
        {/* Emergency Section with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-8"
        >
          <div className="bg-rose-50 p-4 rounded-lg border-2 border-rose-200">
            <h2 className="text-lg font-semibold text-rose-700 mb-4">กรณีฉุกเฉิน</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {emergencyPhrases.map((phrase, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePhraseClick(phrase)}
                  className="bg-white border-2 border-rose-200 rounded-lg p-4 hover:bg-rose-50 transition-all duration-200 flex items-center space-x-3"
                >
                  <img src={phrase.image} alt="" className="w-12 h-12 rounded" />
                  <div className="text-left">
                    <p className="font-medium text-rose-700">{phrase.text}</p>
                    <p className="text-sm text-gray-500">{phrase.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Categories Grid with Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`${category.color} ${category.hoverColor} text-white rounded-lg shadow-sm transition-all duration-200 flex flex-col items-center justify-center p-6 space-y-3`}
            >
              <img src={category.icon} alt="" className="w-16 h-16 rounded-lg" />
              <span className="text-xl font-medium">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Category Content with Animation */}
        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              className="bg-white rounded-lg shadow-sm p-4"
            >
              <h2 className="text-lg font-semibold mb-4">
                {categories.find(c => c.id === selectedCategory)?.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories
                  .find(c => c.id === selectedCategory)
                  ?.phrases.map((phrase, index) => (
                    <motion.button
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handlePhraseClick(phrase)}
                      className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-all duration-200 flex flex-col items-center justify-center space-y-2"
                    >
                      <img src={phrase.image} alt="" className="w-32 h-32 rounded" />
                      <p className="font-medium text-gray-800 text-center">{phrase.text}</p>
                      <p className="text-sm text-gray-500 text-center">{phrase.description}</p>
                      <motion.div
                        animate={isSpeaking ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        <SpeakerIcon className="text-gray-400" />
                      </motion.div>
                    </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message History with Animation */}
        <AnimatePresence>
          {messageHistory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 bg-white rounded-lg shadow-sm p-4"
            >
              <h2 className="text-lg font-semibold mb-4">ประวัติการสื่อสาร</h2>
              <motion.div className="space-y-3">
                {messageHistory.slice(0, 5).map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b last:border-0"
                  >
                    <div>
                      <p className="font-medium">{message.text}</p>
                      <p className="text-sm text-gray-500">{message.description}</p>
                    </div>
                    <span className="text-sm text-gray-400">
                      {message.timestamp.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Emergency Button with Animation */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            "0 10px 15px -3px rgba(220, 38, 38, 0.3)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          ]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => setSelectedCategory('emergency')}
        className="fixed bottom-4 right-4 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg transition-colors duration-200 flex items-center space-x-2"
      >
        <span>ฉุกเฉิน</span>
        <span className="animate-pulse">●</span>
      </motion.button>
    </div>
  );
};

export default PatientCommunicationApp;