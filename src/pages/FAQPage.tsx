import React, { useState } from 'react';
import { faqData } from '../data/faqData.js';
import FAQItem from '../components/common/FAQItem.js';

const FAQPage = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-br from-yellow-pastel/10 to-pink-pastel/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-playful font-bold text-center text-gray-800 mb-12">❓ Frequently Asked Questions ❓</h2>

                <div className="space-y-4">
                    {faqData.map(faq => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openFAQ === faq.id}
                            onToggle={() => toggleFAQ(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQPage;