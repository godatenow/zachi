'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Connect to backend email service (Formspree, Resend, Supabase, or your own API)
      // Example for Formspree:
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // For now, just simulate success
      console.log('Form data:', formData);
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
          שם מלא *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="כתוב את שמך"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
          דואר אלקטרוני *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
          טלפון *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="050-XXX-XXXX"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
          נושא *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="מה הנושא שלך?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
          הודעה *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="כתוב את הודעתך כאן..."
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          ✓ הודעתך נשלחה בהצלחה! אחזור אליך בקרוב.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          ✗ אירעה שגיאה בשליחת הודעתך. אנא נסה שוב.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'שליחה...' : 'שלח הודעה'}
      </button>
    </form>
  );
}
