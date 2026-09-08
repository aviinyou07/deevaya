"use client";

import { useState } from "react";
import { Mail, Clock, MessageSquare, CheckCircle2, Send, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "decor-advice",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-zinc-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-bold tracking-[0.25em] text-amber-900 uppercase">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-zinc-950 font-normal tracking-tight">
            We’d Love to Hear From You.
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Every beautiful home begins with a conversation. Whether you have decorating
            questions, feedback on our guides, or collaboration ideas, we’re here to help.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200/80 p-8 sm:p-10 shadow-sm">
            <h2 className="font-serif text-2xl text-zinc-950 font-normal mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-zinc-500 mb-8">
              Fill out the form below and our team will get back to you within 24–48 business
              hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-emerald-950 font-medium">
                  Message Sent Successfully
                </h3>
                <p className="text-xs text-emerald-800/90 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. We have received your inquiry and
                  will respond to <strong className="font-semibold">{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", subject: "decor-advice", message: "" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-900 text-white text-xs uppercase tracking-wider font-semibold hover:bg-emerald-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Topic of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 bg-white"
                  >
                    <option value="decor-advice">Decor Advice & Room Refresh Questions</option>
                    <option value="room-formulas">Room Formula Digital Guide Support</option>
                    <option value="collaborations">Brand Collaborations & Partnerships</option>
                    <option value="affiliate-questions">Affiliate & Product Link Inquiries</option>
                    <option value="feedback">General Feedback & Reader Thoughts</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your home, questions, or how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200/80 space-y-6">
              <h3 className="font-serif text-xl text-zinc-950 font-normal">
                Direct Contact Details
              </h3>

              <div className="space-y-4 text-xs text-zinc-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-zinc-900 font-medium">Direct Email</strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-amber-900 hover:underline text-sm font-serif"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-zinc-900 font-medium">Response Commitment</strong>
                    <span>We reply to all reader inquiries within 24–48 business hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-zinc-900 font-medium">WhatsApp Community</strong>
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-900 hover:underline"
                    >
                      Chat with Deevaya on WhatsApp ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Formula Support Card */}
            <div className="p-8 rounded-3xl bg-amber-950 text-white space-y-3">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                Digital Download Help
              </div>
              <h4 className="font-serif text-lg font-normal">
                Purchased a Room Formula?
              </h4>
              <p className="text-xs text-amber-100/80 leading-relaxed font-light">
                If you need assistance accessing your downloadable PDF guide, paint swatches, or
                specs, please email us directly with your order email address.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
