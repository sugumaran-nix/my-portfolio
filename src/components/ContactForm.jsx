import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="f-name" className="text-sm font-medium">Name</label>
            <input id="f-name" type="text" placeholder="Your name" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="f-email" className="text-sm font-medium">Email</label>
            <input id="f-email" type="email" placeholder="your.email@example.com" required className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-subject" className="text-sm font-medium">Subject</label>
          <input id="f-subject" type="text" placeholder="What's this about?" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="f-message" className="text-sm font-medium">Message</label>
          <textarea
            id="f-message"
            placeholder="Tell me about your project..."
            required
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="self-start mt-1 inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-accent dark:bg-accentDark text-white transition-colors hover:bg-accentHover dark:hover:opacity-90 disabled:opacity-60"
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
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
