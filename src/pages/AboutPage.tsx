import React from 'react';

const AboutPage = () => (
    <section id="about" className="py-20 bg-gradient-to-br from-sky-pastel/10 to-mint-pastel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-playful font-bold text-gray-800 mb-4">🌟 About ToyLand 🌟</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Spreading joy through play since 2020! We believe every child deserves magical moments filled with wonder, learning, and endless fun.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="bg-white rounded-3xl p-8 toy-shadow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">👨‍👩‍👧‍👦 Our Story</h3>
                    <p className="text-gray-600 mb-4">Founded by parents who understand the magic of childhood, ToyLand was born from a simple mission: to create a world where every toy sparks imagination and brings families together.</p>
                    <p className="text-gray-600">We carefully curate each toy in our collection, ensuring they meet our high standards for safety, quality, and fun!</p>
                </div>

                <div className="bg-white rounded-3xl p-8 toy-shadow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Our Mission</h3>
                    <div className="space-y-3">
                        {[
                            { icon: '✨', text: 'Inspire creativity and imagination' },
                            { icon: '🛡️', text: 'Ensure safety in every product' },
                            { icon: '🌱', text: 'Support sustainable play' },
                            { icon: '❤️', text: 'Bring families together' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-gray-600">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-3xl font-playful font-bold text-gray-800 mb-8">Meet Our Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { emoji: '👨‍💼', name: 'Alex Johnson', role: 'Founder & CEO', quote: 'Every child deserves to dream big!' },
                        { emoji: '👩‍🔬', name: 'Sarah Chen', role: 'Head of Safety', quote: 'Safety first, fun always!' },
                        { emoji: '👨‍🎨', name: 'Mike Rodriguez', role: 'Creative Director', quote: 'Imagination has no limits!' }
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6 toy-shadow">
                            <div className="text-6xl mb-4">{member.emoji}</div>
                            <h4 className="font-bold text-gray-800 mb-2">{member.name}</h4>
                            <p className="text-gray-600 text-sm">{member.role}</p>
                            <p className="text-gray-600 text-sm mt-2">"{member.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default AboutPage;