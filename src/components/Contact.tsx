import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:dharmatejapamarthi143@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <Mail className="text-amber-600" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900">Get In Touch</h2>
          </div>
          <p className="text-stone-600 text-lg">Let's connect and discuss opportunities together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-900">Contact Information</h3>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Email</h4>
                  <a
                    href="mailto:dharmatejapamarthi143@gmail.com"
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    dharmatejapamarthi143@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Phone</h4>
                  <a
                    href="tel:+919346312961"
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    +91 9346 312961
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Location</h4>
                  <p className="text-stone-600">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-stone-200">
              <h4 className="font-semibold text-stone-900 mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-stone-100 text-stone-900 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-stone-100 text-stone-900 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:dharmatejapamarthi143@gmail.com"
                  className="p-3 bg-stone-100 text-stone-900 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                  placeholder="Collaboration opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
