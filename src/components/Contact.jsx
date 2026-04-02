import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, MapPin, Clock, CheckCircle, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(false);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Portfolio Inquiry',
      message: formData.message,
      to_name: 'Rohit Kumar Singh',
    };

    emailjs.send(
      'service_qj4i41z',
      'template_6uebbcq',
      templateParams,
      'MgnUUvBHKEl7skZtf'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setIsSending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setIsSending(false);
      setError(true);
    });
  };

  const contactCards = [
    {
      label: 'Email Me',
      value: 'rajputrohitsingh998@gmail.com',
      href: 'mailto:rajputrohitsingh998@gmail.com',
      icon: <Mail size={22} />,
      color: 'text-sky-400',
      bg: 'hover:bg-sky-500/10 hover:border-sky-400/30',
      desc: 'Best way to reach me',
    },
    {
      label: 'LinkedIn',
      value: 'rohit-kumar-singh-25168a226',
      href: 'https://www.linkedin.com/in/rohit-kumar-singh-25168a226/',
      icon: <Linkedin size={22} />,
      color: 'text-indigo-400',
      bg: 'hover:bg-indigo-500/10 hover:border-indigo-400/30',
      desc: 'Connect professionally',
    },
    {
      label: 'GitHub',
      value: 'github.com/Rohitkr2002',
      href: 'https://github.com/Rohitkr2002',
      icon: <Github size={22} />,
      color: 'text-slate-300',
      bg: 'hover:bg-white/10 hover:border-white/20',
      desc: 'Check my open source work',
    },
    {
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: '#',
      icon: <MapPin size={22} />,
      color: 'text-emerald-400',
      bg: 'hover:bg-emerald-500/10 hover:border-emerald-400/30',
      desc: 'Open to remote & relocate',
    },
  ];

  const subjects = ['Internship Opportunity', 'Project Collaboration', 'Freelance Work', 'General Query'];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 xl:px-32 2xl:px-48 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
          </motion.p>
          <h2 className="heading-xl text-white mb-5">
            Let's <span className="text-transparent-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            Looking for internship or fresher opportunities. Whether it's a project, collaboration, or just saying hi — my inbox is always open!
          </p>
        </div>

        {/* Availability strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-14 p-5 glass-card border-emerald-500/20 bg-emerald-500/5 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest">Available for Work</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock size={14} className="text-sky-400" />
            Typically replies within <span className="text-white font-semibold ml-1">24 hours</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <CheckCircle size={14} className="text-indigo-400" />
            Open to <span className="text-white font-semibold ml-1">Remote Internships / Jobs</span>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-card p-6 flex flex-col gap-3 border-white/10 transition-all duration-300 ${card.bg}`}
            >
              <div className={`${card.color} p-2 bg-white/5 rounded-xl w-fit`}>{card.icon}</div>
              <div>
                <p className={`font-bold text-sm ${card.color}`}>{card.label}</p>
                <p className="text-xs text-slate-500 mb-1">{card.desc}</p>
                <p className="text-slate-300 text-xs font-medium break-all">{card.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 border-white/5 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-4">
                  Ready to <span className="text-transparent-gradient">Collaborate?</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                  I'm currently seeking <strong className="text-white">Frontend / Data Analyst internships</strong> and fresher roles. If you have an opportunity that matches my skills, I'd love to connect.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: '⚛️', text: 'React.js / JavaScript development' },
                    { icon: '📊', text: 'Data analysis & visualization projects' },
                    { icon: '🤝', text: 'Collaborative team environments' },
                    { icon: '🌍', text: 'Remote or Patna-based opportunities' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LinkedIn CTA */}
              <a
                href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-white transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #38bdf8, #6366f1)' }}
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-6 sm:p-8 md:p-10 border-white/5"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-20 w-20 rounded-full bg-emerald-400/20 border-2 border-emerald-400 flex items-center justify-center mb-6"
                >
                  <CheckCircle size={36} className="text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl font-display font-black text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">I'll get back to you within 24 hours. 🚀</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="text-white font-display font-bold text-lg mb-1 flex items-center gap-2">
                    <MessageSquare size={18} className="text-sky-400" /> Send a Message
                  </p>
                  <p className="text-slate-500 text-xs mb-6">Fill in the form and I'll reach out soon.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Name *</label>
                    <input
                      type="text" required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-sky-400/60 focus:bg-sky-500/5 outline-none transition-all placeholder:text-slate-600"
                      placeholder="Recruiter Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address *</label>
                    <input
                      type="email" required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-sky-400/60 focus:bg-sky-500/5 outline-none transition-all placeholder:text-slate-600"
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Subject pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Subject</label>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((s) => (
                      <button
                        type="button" key={s}
                        onClick={() => setFormData({...formData, subject: s})}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                          formData.subject === s
                            ? 'bg-sky-500/20 border-sky-400/50 text-sky-300'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    rows="4" required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-sky-400/60 focus:bg-sky-500/5 outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="Hi Rohit, I'm reaching out about..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }} whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className={`w-full btn-gradient py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-base ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSending ? (
                    <>Sending Message...</>
                  ) : (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </motion.button>
                {error && (
                   <p className="text-center text-red-500 text-xs font-bold mt-2">
                     Something went wrong. Please try again or email me directly!
                   </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
