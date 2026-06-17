"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface Props {
  inquiryTypes: string[];
}

export default function ContactForm({ inquiryTypes }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 border border-gold/30 bg-navy/2 text-center">
        <CheckCircle size={48} className="text-gold mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-navy mb-3">Message Received</h3>
        <p className="text-navy/60 leading-relaxed">
          Thank you for reaching out to Taukei Enterprises. We&rsquo;ll respond within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-navy text-sm font-semibold mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-gray-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-navy placeholder:text-navy/30 text-sm transition-colors duration-200 bg-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-navy text-sm font-semibold mb-2">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-gray-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-navy placeholder:text-navy/30 text-sm transition-colors duration-200 bg-white"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-navy text-sm font-semibold mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 border border-gray-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-navy placeholder:text-navy/30 text-sm transition-colors duration-200 bg-white"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-navy text-sm font-semibold mb-2">
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-3 border border-gray-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-navy placeholder:text-navy/30 text-sm transition-colors duration-200 bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="type" className="block text-navy text-sm font-semibold mb-2">
          Inquiry Type <span className="text-gold">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          value={form.type}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-navy text-sm transition-colors duration-200 bg-white cursor-pointer"
        >
          <option value="">Select inquiry type</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-navy text-sm font-semibold mb-2">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your inquiry..."
          className="w-full px-4 py-3 border border-gray-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-navy placeholder:text-navy/30 text-sm transition-colors duration-200 bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>

      <p className="text-navy/40 text-xs text-center">
        All inquiries are kept strictly confidential. We respond within 1–2 business days.
      </p>
    </form>
  );
}
