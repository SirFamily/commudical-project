import React, { useState } from 'react';

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

const PatientCommunicationApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);

  const categories = [
    {
      id: 'pain',
      title: 'อาการปวด',
      icon: '/api/placeholder/64/64',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      phrases: [
        { text: 'ปวดมาก', image: '/api/placeholder/48/48', description: 'ปวดรุนแรง ต้องการยาแก้ปวด' },
        { text: 'ปวดท่อช่วยหายใจ', image: '/api/placeholder/48/48', description: 'รู้สึกระคายเคืองที่ท่อช่วยหายใจ' },
        { text: 'ปวดหัว', image: '/api/placeholder/48/48', description: 'มีอาการปวดศีรษะ' },
        { text: 'ปวดท้อง', image: '/api/placeholder/48/48', description: 'มีอาการปวดบริเวณท้อง' },
      ]
    },
    {
      id: 'needs',
      title: 'ความต้องการ',
      icon: '/api/placeholder/64/64',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      phrases: [
        { text: 'ต้องการน้ำ', image: '/api/placeholder/48/48', description: 'ต้องการดื่มน้ำ' },
        { text: 'ปรับท่านอน', image: '/api/placeholder/48/48', description: 'ต้องการเปลี่ยนท่านอน' },
        { text: 'ต้องการพบแพทย์', image: '/api/placeholder/48/48', description: 'ต้องการปรึกษาแพทย์' },
        { text: 'ต้องการพบญาติ', image: '/api/placeholder/48/48', description: 'ต้องการพบครอบครัว' },
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

  const handlePhraseClick = (phrase) => {
    setMessageHistory(prev => [...prev, { 
      text: phrase.text, 
      description: phrase.description,
      timestamp: new Date() 
    }]);
    
    const speech = new SpeechSynthesisUtterance(phrase.text);
    speech.lang = 'th-TH';
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">ระบบสื่อสารสำหรับผู้ป่วย</h1>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
            aria-label="แจ้งเตือนพยาบาล"
          >
            <AlertIcon />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 pb-24">
        {/* Quick Access Emergency */}
        <div className="mb-8">
          <div className="bg-rose-50 p-4 rounded-lg border-2 border-rose-200">
            <h2 className="text-lg font-semibold text-rose-700 mb-4">กรณีฉุกเฉิน</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {emergencyPhrases.map((phrase, index) => (
                <button
                  key={index}
                  onClick={() => handlePhraseClick(phrase)}
                  className="bg-white border-2 border-rose-200 rounded-lg p-4 hover:bg-rose-50 transition-colors flex items-center space-x-3"
                >
                  <img src={phrase.image} alt="" className="w-12 h-12 rounded" />
                  <div className="text-left">
                    <p className="font-medium text-rose-700">{phrase.text}</p>
                    <p className="text-sm text-gray-500">{phrase.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`${category.color} ${category.hoverColor} text-white rounded-lg shadow-sm transition-all duration-200 hover:scale-102 flex flex-col items-center justify-center p-6 space-y-3`}
            >
              <img src={category.icon} alt="" className="w-16 h-16 rounded-lg" />
              <span className="text-xl font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Phrases */}
        {selectedCategory && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">
              {categories.find(c => c.id === selectedCategory)?.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories
                .find(c => c.id === selectedCategory)
                ?.phrases.map((phrase, index) => (
                  <button
                    key={index}
                    onClick={() => handlePhraseClick(phrase)}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors flex flex-col items-center justify-center space-y-2"
                  >
                    <img src={phrase.image} alt="" className="w-12 h-12 rounded" />
                    <p className="font-medium text-gray-800 text-center">{phrase.text}</p>
                    <p className="text-sm text-gray-500 text-center">{phrase.description}</p>
                    <SpeakerIcon className="text-gray-400" />
                  </button>
              ))}
            </div>
          </div>
        )}

        {/* Message History */}
        {messageHistory.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">ประวัติการสื่อสาร</h2>
            <div className="space-y-3">
              {messageHistory.slice(-5).reverse().map((message, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{message.text}</p>
                    <p className="text-sm text-gray-500">{message.description}</p>
                  </div>
                  <span className="text-sm text-gray-400">
                    {message.timestamp.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer Emergency Button */}
      <button
        onClick={() => setSelectedCategory('emergency')}
        className="fixed bottom-4 right-4 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2"
      >
        <span>ฉุกเฉิน</span>
        <span className="animate-pulse">●</span>
      </button>
    </div>
  );
};

export default PatientCommunicationApp;