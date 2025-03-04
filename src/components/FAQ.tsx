import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map(faq => (
        <div 
          key={faq.id} 
          className="mb-4 bg-gray-800 rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            onClick={() => toggleFAQ(faq.id)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            {openId === faq.id ? (
              <ChevronUp size={20} className="text-yellow-400" />
            ) : (
              <ChevronDown size={20} className="text-yellow-400" />
            )}
          </button>
          
          <div 
            className={`px-4 pb-4 transition-all duration-300 ease-in-out ${
              openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;