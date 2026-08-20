'use client';

import { FormEvent, useState } from 'react';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id';
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id';
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key';

type FormValues = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setSubmitError('');
  };

  const validate = () => {
    const next: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) next.name = 'Name must be at least 2 characters';
    if (!/^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) next.email = 'Enter a valid email address';
    if (!values.message.trim() || values.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    setErrors(next);
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(validate()).length) return;
    setStatus('sending');
    setSubmitError('');

    try {
      const { default: emailjs } = await import('@emailjs/browser');
      const send = emailjs.send(serviceId, templateId, {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      }, publicKey);
      const timeout = new Promise<never>((_, reject) => window.setTimeout(() => reject(new Error('timeout')), 10000));
      await Promise.race([send, timeout]);
      setStatus('sent');
    } catch (error) {
      setStatus('idle');
      setSubmitError(error instanceof Error && error.message === 'timeout'
        ? 'Request timed out. Try emailing me directly at sugumarankugan@gmail.com'
        : 'Something went wrong. Email me directly at sugumarankugan@gmail.com');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 py-14 text-center" role="status" aria-live="polite">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-ink dark:text-white/80" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <p className="text-base font-semibold">Message sent!</p>
        <p className="text-sm text-inkMuted dark:text-white/50">I’ll reply within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form className="flex h-full flex-col gap-4" onSubmit={onSubmit} noValidate>
      <Field label="Name" id="cf-name" value={values.name} onChange={(value) => update('name', value)} error={errors.name} autoComplete="name" placeholder="Your name" maxLength={80} />
      <Field label="Email" id="cf-email" type="email" value={values.email} onChange={(value) => update('email', value)} error={errors.email} autoComplete="email" placeholder="your@email.com" maxLength={120} />
      <Field label="Message" id="cf-message" multiline value={values.message} onChange={(value) => update('message', value)} error={errors.message} placeholder="Your message..." maxLength={2000} />

      {submitError && <p className="text-xs font-medium italic text-ink/70 dark:text-white/65" role="alert">{submitError}</p>}

      <button type="submit" disabled={status === 'sending'} className="btn-filled-pill contact-send-action mt-auto w-full disabled:cursor-wait disabled:opacity-70">
        {status === 'sending' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 animate-spin" aria-hidden="true"><path d="M12 3a9 9 0 109 9" strokeLinecap="round" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        )}
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
  placeholder,
  maxLength,
  multiline = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder: string;
  maxLength: number;
  multiline?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-inkMuted dark:text-white/60">{label}</label>
      {multiline ? (
        <textarea id={id} name={id} value={value} onChange={(event) => onChange(event.target.value)} rows={5} placeholder={placeholder} maxLength={maxLength} className="control-input resize-none" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} />
      ) : (
        <input id={id} name={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} autoComplete={autoComplete} placeholder={placeholder} maxLength={maxLength} className="control-input" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} />
      )}
      {error && <p id={`${id}-error`} className="text-xs font-medium italic text-ink/70 dark:text-white/65" role="alert">{error}</p>}
    </div>
  );
}
