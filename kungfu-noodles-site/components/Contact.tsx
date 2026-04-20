'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      // Initialize EmailJS (use your public key)
      emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'contact@kungfunoodles.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again or call us directly.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-brand-bg"
      style={{ backgroundColor: '#0d0d0d' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-5xl text-brand-text mb-2">
              Get in Touch
            </h2>
            <p className="text-brand-muted text-lg mb-10">
              Have questions? Want to reserve a table? Reach out and we'll get back to you soon.
            </p>

            <div className="space-y-8">
              {/* Tempe Location */}
              <div>
                <h3 className="text-brand-text font-semibold text-sm uppercase tracking-wide mb-3">
                  Tempe Location
                </h3>
                <address className="not-italic text-brand-muted text-sm leading-relaxed mb-3">
                  1845 E Broadway Rd Unit 127<br />
                  Tempe, AZ 85282
                </address>
                <a
                  href="tel:4802687331"
                  className="text-brand-red hover:text-brand-redHover transition-colors duration-200 font-medium"
                >
                  (480) 268-7331
                </a>
              </div>

              {/* Chandler Location */}
              <div>
                <h3 className="text-brand-text font-semibold text-sm uppercase tracking-wide mb-3">
                  Chandler Location
                </h3>
                <address className="not-italic text-brand-muted text-sm leading-relaxed mb-3">
                  2886 N Alma School Rd Suite A<br />
                  Chandler, AZ 85224 (Chandler Central Center)
                </address>
                <a
                  href="tel:4802928142"
                  className="text-brand-red hover:text-brand-redHover transition-colors duration-200 font-medium"
                >
                  (480) 292-8142
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-brand-text font-semibold text-sm uppercase tracking-wide mb-3">
                  Hours
                </h3>
                <div className="text-brand-muted text-sm space-y-1">
                  <p>Mon - Thu: 11am - 9pm</p>
                  <p>Fri - Sat: 11am - 10pm</p>
                  <p>Sun: 11am - 9pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-brand-bgWarm border border-brand-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-brand-text text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-bg border border-brand-border rounded px-4 py-2.5 text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-red transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-brand-text text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-bg border border-brand-border rounded px-4 py-2.5 text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-red transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-brand-text text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-brand-bg border border-brand-border rounded px-4 py-2.5 text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-red transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-900/20 border border-green-700/30 text-green-300 px-4 py-3 rounded text-sm">
                  Message sent successfully! We'll be in touch soon.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-900/20 border border-red-700/30 text-red-300 px-4 py-3 rounded text-sm">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-red hover:bg-brand-redHover text-brand-text font-semibold py-3 rounded transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
