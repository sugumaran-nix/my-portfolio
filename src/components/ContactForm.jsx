import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

// emailjs + Lucide icons + premium form pattern (premium-website skill §Forms)
const EMAILJS_SERVICE  = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID  || "service_id";
const EMAILJS_TEMPLATE = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID || "template_id";
const EMAILJS_KEY      = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY  || "public_key";

const inputBase = [
  "w-full rounded-xl px-4 py-3 text-sm",
  "bg-surfaceMuted dark:bg-[#0F0F0F]",
  "border border-borderLight dark:border-borderDark",
  "text-ink dark:text-white/90",
  "placeholder:text-inkMuted/50 dark:placeholder:text-white/25",
  "focus:outline-none focus:border-accentGreen/60 dark:focus:border-accentGreen/50",
  "transition-colors duration-200",
].join(" ");

export default function ContactForm() {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);

  // Client-side validation (premium-website skill — no empty error states)
  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE, EMAILJS_TEMPLATE,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_KEY
      );
      setSent(true);
      window.dispatchEvent(new CustomEvent('form-sent'));
    } catch {
      setErrors({ submit: "Something went wrong. Email me directly at sugumarankugan@gmail.com" });
    } finally { setLoading(false); }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
        <CheckCircle2 className="w-10 h-10 text-accentGreen" strokeWidth={1.5} />
        <p className="text-base font-semibold">Message sent!</p>
        <p className="text-sm text-inkMuted dark:text-white/50">I'll get back to you within a few hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-xs font-semibold text-inkMuted dark:text-white/40 uppercase tracking-wider">Name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Your name"
          className={inputBase} value={form.name} onChange={handleChange} />
        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-xs font-semibold text-inkMuted dark:text-white/40 uppercase tracking-wider">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="your@email.com"
          className={inputBase} value={form.email} onChange={handleChange} />
        {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-semibold text-inkMuted dark:text-white/40 uppercase tracking-wider">Message</label>
        <textarea id="cf-message" name="message" rows={5} placeholder="What are you working on?"
          className={`${inputBase} resize-none`} value={form.message} onChange={handleChange} />
        {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
      </div>

      {errors.submit && <p className="text-xs text-red-400">{errors.submit}</p>}

      <button type="submit" disabled={loading}
        className="btn-filled-pill mt-1 w-full" style={loading ? {opacity:0.6,pointerEvents:"none"} : {}}>
        {loading
          ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
          : <><Send className="w-4 h-4" /> Send Message</>
        }
      </button>
    </form>
  );
}
