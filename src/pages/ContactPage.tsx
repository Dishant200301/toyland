import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon. 🎉");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactDetails = [
    { icon: '📞', title: 'Phone', info: '1-800-TOYLAND', bg: 'bg-pink-pastel/10' },
    { icon: '📧', title: 'Email', info: 'hello@toyland.com', bg: 'bg-yellow-pastel/10' },
    { icon: '📍', title: 'Address', info: '123 Toy Street\nPlaytown, PT 12345', bg: 'bg-mint-pastel/10' },
    { icon: '⏰', title: 'Hours', info: 'Mon-Fri: 9AM-6PM\nSat-Sun: 10AM-4PM', bg: 'bg-lavender-pastel/10' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-playful font-bold text-center text-gray-800 mb-12">
          📞 Get in Touch 📞
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-gradient-to-br from-sky-pastel/10 to-mint-pastel/10 rounded-3xl p-8 toy-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">👤 Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-pastel"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">📧 Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-pastel"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">💬 Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-pastel"
                  placeholder="Tell us how we can help!"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-sky-pastel hover:bg-sky-400 text-white"
              >
                🚀 Send Message
              </Button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-6">
            {contactDetails.map((contact, index) => (
              <div
                key={index}
                className={`${contact.bg} rounded-3xl p-6 toy-shadow`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{contact.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{contact.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
