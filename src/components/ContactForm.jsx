import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Fill these in from your EmailJS dashboard (emailjs.com):
// - Service ID: Email Services tab
// - Template ID: Email Templates tab — your template should use {{name}}, {{email}}, {{subject}}, {{message}}
// - Public Key: Account > General
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch((err) => {
        console.error('EmailJS send failed:', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const inputClass =
    'w-full bg-surface dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-lg px-4 py-2.5 text-sm text-ink dark:text-white outline-none transition-colors focus:border-accent dark:focus:border-accentDark focus:ring-2 focus:ring-accent/15 dark:focus:ring-accentDark/20 placeholder:text-inkMuted/60 dark:placeholder:text-white/30';

  return (
    <motion.div
      className="rounded-xl border border-borderLight dark:border-borderDark bg-cardLight dark:bg-cardDark shadow-card dark:shadow-cardDark p-6 md:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
    >
      <h3 className="text-base font-semibold mb-5">Send me a message</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="f-name" className="text-sm font-medium">Name</label>
            <input id="f-name" name="name" type="text" placeholder="Your name" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="f-email" className="text-sm font-medium">Email</label>
            <input id="f-email" name="email" type="email" placeholder="your.email@example.com" required className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-subject" className="text-sm font-medium">Subject</label>
          <input id="f-subject" name="subject" type="text" placeholder="What's this about?" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-message" className="text-sm font-medium">Message</label>
          <textarea
            id="f-message"
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="self-start mt-1 inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-accent dark:bg-accentDark text-white transition-all duration-150 hover:bg-accentHover dark:hover:opacity-90 disabled:opacity-60 hover:scale-105"
        >
          {status === 'idle' && (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Send Message
            </>
          )}
          {status === 'sending' && 'Sending...'}
          {status === 'sent' && 'Sent ✓'}
          {status === 'error' && 'Failed — try again'}
        </button>

        <AnimatePresence>
          {status === 'sent' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-inkMuted dark:text-white/60"
            >
              Message received. I'll get back to you shortly.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-500 dark:text-red-400"
            >
              Something went wrong sending that — please email me directly at sugumarankugan@gmail.com instead.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
