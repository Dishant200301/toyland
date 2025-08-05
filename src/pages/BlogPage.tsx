import React from 'react';

const BlogPage = () => {
    const blogPosts = [
        {
            emoji: '🧠',
            title: 'Top 5 Educational Toys for 2024',
            excerpt: 'Discover the best toys that make learning fun and engaging for your little ones.',
            date: 'March 15, 2024',
            color: 'from-pink-pastel/10 to-pink-pastel/20',
            buttonColor: 'bg-pink-pastel hover:bg-pink-400'
        },
        {
            emoji: '🛡️',
            title: 'Toy Safety Tips Every Parent Should Know',
            excerpt: 'Essential safety guidelines to keep playtime both fun and secure.',
            date: 'March 10, 2024',
            color: 'from-sky-pastel/10 to-sky-pastel/20',
            buttonColor: 'bg-sky-pastel hover:bg-sky-400'
        },
        {
            emoji: '🎨',
            title: 'DIY Craft Ideas for Rainy Days',
            excerpt: 'Creative activities to keep kids entertained when stuck indoors.',
            date: 'March 5, 2024',
            color: 'from-yellow-pastel/10 to-yellow-pastel/20',
            buttonColor: 'bg-yellow-pastel hover:bg-yellow-400'
        }
    ];

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-playful font-bold text-center text-gray-800 mb-12">📚 Parenting Tips & Fun 📚</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article key={index} className={`bg-gradient-to-br ${post.color} rounded-3xl overflow-hidden toy-shadow hover:transform hover:scale-105 transition-all cursor-pointer`}>
                            <div className="p-6 text-center">
                                <div className="text-6xl mb-4">{post.emoji}</div>
                            </div>
                            <div className="p-6 pt-0">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                    <button className={`${post.buttonColor} text-white px-4 py-2 rounded-full text-sm font-bold wiggle`}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;