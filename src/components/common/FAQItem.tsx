import React from 'react';

interface FAQItemData {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

interface FAQItemProps {
  faq: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => (
  <div className="bg-white rounded-3xl toy-shadow overflow-hidden">
    <button
      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      onClick={onToggle}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">{faq.icon}</span>
        <span className="font-bold text-gray-800">{faq.question}</span>
      </div>
      <span className="text-2xl text-gray-400">
        {isOpen ? '−' : '+'}
      </span>
    </button>
    {isOpen && (
      <div className="px-6 pb-6">
        <p className="text-gray-600 ml-10">{faq.answer}</p>
      </div>
    )}
  </div>
);

export default FAQItem;
