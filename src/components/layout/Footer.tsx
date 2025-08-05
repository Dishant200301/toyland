import React, { useState, FormEvent, ChangeEvent } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}! 🎉`);
      setEmail('');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="bg-gradient-to-r from-sky-pastel to-mint-pastel py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding and Newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">🧸</div>
              <span className="text-2xl font-playful font-bold text-white">ToyLand</span>
            </div>
            <p className="text-white/80 mb-4">
              Spreading joy through play! We're your trusted partner in creating magical childhood memories.
            </p>

            <div className="bg-white/20 rounded-2xl p-4">
              <h4 className="font-bold text-white mb-2">🎁 Join our newsletter!</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-pink-pastel hover:bg-pink-400 text-white px-4 py-2 rounded-full font-bold wiggle"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'Categories', 'About Us', 'Contact'].map((link, index) => (
                <li key={index}>
                  <button className="text-white/80 hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Help & Support</h4>
            <ul className="space-y-2">
              {['FAQ', 'Shipping Info', 'Returns', 'Size Guide', 'Safety Info'].map((link, index) => (
                <li key={index}>
                  <button className="text-white/80 hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {['📘', '📷', '🐦', '📌'].map((icon, index) => (
              <button
                key={index}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors wiggle"
              >
                {icon}
              </button>
            ))}
          </div>
          <p className="text-white/80 text-sm">
            © 2024 ToyLand. Made with ❤️ for happy kids everywhere!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
