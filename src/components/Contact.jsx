import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef(null);
  const { email, github, linkedin, instagram } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ text: '', type: '' });

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMsg({ text: 'Please fill out all fields.', type: 'error' });
      setLoading(false);
      return;
    }

    // Check if EmailJS keys are configured in environment variables (fallback to mock send if empty)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mock flow for testing
      setTimeout(() => {
        setStatusMsg({
          text: 'Message sent successfully! (Mock mode: Configure EmailJS environment variables for real deliveries).',
          type: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      }, 1500);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatusMsg({ text: 'Thank you! Your message has been sent successfully.', type: 'success' });
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setStatusMsg({ text: 'Oops! Something went wrong. Please try again later.', type: 'error' });
          setLoading(false);
        }
      );
  };

  const socialLinks = [
    { icon: <FaEnvelope className="w-5 h-5" />, label: 'Email', url: `mailto:${email}`, color: 'text-red-500' },
    { icon: <FaGithub className="w-5 h-5" />, label: 'GitHub', url: github, color: 'text-slate-800 dark:text-white' },
    { icon: <FaLinkedin className="w-5 h-5" />, label: 'LinkedIn', url: linkedin, color: 'text-blue-500' },
    { icon: <FaInstagram className="w-5 h-5" />, label: 'Instagram', url: instagram, color: 'text-pink-500' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 text-left space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-850 dark:text-white">
              Let's talk about your next project!
            </h3>
            <p className="text-slate-655 dark:text-slate-400 leading-relaxed">
              I am available for freelance work, contract roles, and full-time positions. Drop a message or reach out via email/social media channels.
            </p>

            <div className="space-y-4 pt-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className={`p-3 bg-white dark:bg-slate-800 rounded-xl shadow-inner group-hover:scale-110 transition-transform ${link.color}`}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {link.label}
                    </h4>
                    <p className="text-slate-800 dark:text-slate-200 font-medium break-all text-sm mt-0.5">
                      {link.url.replace(/(mailto:|https:\/\/)/, '')}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right form submission panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 bg-slate-100 dark:bg-slate-900 border border-slate-200/10 rounded-3xl space-y-6 text-left"
            >
              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-350 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200/20 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-accent outline-none text-slate-850 dark:text-slate-100 placeholder-slate-400 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-350 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200/20 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-accent outline-none text-slate-850 dark:text-slate-100 placeholder-slate-400 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-350 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Hi Jaydev, let's collaborate..."
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200/20 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-accent outline-none text-slate-850 dark:text-slate-100 placeholder-slate-400 transition-all text-sm resize-none"
                  required
                />
              </div>

              {statusMsg.text && (
                <div
                  className={`p-4 rounded-xl text-sm font-semibold ${
                    statusMsg.type === 'success'
                      ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                      : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}
                >
                  {statusMsg.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/30 transition-all cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                {!loading && <FaPaperPlane className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
