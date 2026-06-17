import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Contact form with animated submit states. Replaces the old
 * vanilla-JS setTimeout handler. Mount with client:visible.
 * Wire the onSubmit handler to your real backend/email service.
 */
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

  return (
    <motion.form
      className="flex flex-col gap-3.5"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] text-textDim uppercase tracking-widest" htmlFor="f-name">
            Name
          </label>
          <input
            className="bg-bg2 border border-border rounded-[10px] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 placeholder:text-textDim"
            id="f-name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] text-textDim uppercase tracking-widest" htmlFor="f-email">
            Email
          </label>
          <input
            className="bg-bg2 border border-border rounded-[10px] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 placeholder:text-textDim"
            id="f-email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] text-textDim uppercase tracking-widest" htmlFor="f-subject">
          Subject
        </label>
        <input
          className="bg-bg2 border border-border rounded-[10px] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 placeholder:text-textDim"
          id="f-subject"
          type="text"
          placeholder="What's this about?"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] text-textDim uppercase tracking-widest" htmlFor="f-message">
          Message
        </label>
        <textarea
          className="bg-bg2 border border-border rounded-[10px] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/30 placeholder:text-textDim resize-none min-h-[130px] leading-relaxed"
          id="f-message"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        className="font-mono text-[13px] px-9 py-4 bg-white text-bg rounded-full tracking-wide transition-opacity hover:opacity-86 self-start mt-1 disabled:opacity-60"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Transmitting...' : status === 'sent' ? 'Transmitted ✓' : 'Send Transmission ➔'}
      </button>

      <AnimatePresence>
        {status === 'sent' && (
          <motion.p
            className="font-mono text-[11px] text-textMuted mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Message received. I'll get back to you shortly.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
