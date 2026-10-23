import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Hair & Skin Consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Hair & Skin Consultation',
        message: '',
      });
    }, 800);
  };

  const encodedMapAddress = encodeURIComponent(
    'Amrapali Dream Valley Commercial 2 Tech Zone 4 Greater Noida Uttar Pradesh 201318'
  );

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0f1115] border-t border-[#1e2128] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#dec47a] font-medium mb-3">
            Visit & Connect
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Find Us in Greater Noida
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light mt-3">
            Conveniently situated in Tech Zone IV at Amrapali Dream Valley with ample client parking and private styling cabins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#14161c] border border-[#232731] space-y-6">
              <h3 className="font-serif text-xl text-white font-medium pb-4 border-b border-[#22252e]">
                Salon Details
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1c1f26] border border-[#2c303a] flex items-center justify-center shrink-0 text-[#dec47a]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1">
                    Address
                  </h4>
                  <p className="text-sm text-neutral-200 leading-relaxed font-light">
                    {SALON_INFO.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodedMapAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#dec47a] hover:underline mt-2 font-medium"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1c1f26] border border-[#2c303a] flex items-center justify-center shrink-0 text-[#dec47a]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1">
                    Direct Salon Phone
                  </h4>
                  <a
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="text-base text-white hover:text-[#dec47a] font-medium transition-colors tabular-nums"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Call for instant bookings & bridal queries
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1c1f26] border border-[#2c303a] flex items-center justify-center shrink-0 text-[#dec47a]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1">
                    Operating Hours
                  </h4>
                  <p className="text-sm text-white font-medium">
                    Open Daily: 9:00 AM – 10:00 PM
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Monday to Sunday (All 7 Days Open)
                  </p>
                </div>
              </div>

              {/* Fast Connect Buttons */}
              <div className="pt-4 border-t border-[#22252e] grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="py-2.5 px-3 rounded-lg bg-[#1f2229] hover:bg-[#282c35] text-xs font-semibold text-white text-center flex items-center justify-center gap-2 transition-colors border border-neutral-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dec47a]" />
                  <span>Call Reception</span>
                </a>
                <a
                  href={`https://wa.me/${SALON_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hello Elite Professional Looks Salon, I would like to inquire about booking an appointment.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-xs font-semibold text-[#4ade80] text-center flex items-center justify-center gap-2 transition-colors border border-[#25D366]/30"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#14161c] border border-[#232731]">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1">
                Send an Inquiry or Custom Request
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-light">
                Have specific hair coloring questions or seeking bridal package options? Reach out and our salon manager will assist you shortly.
              </p>

              {submitted ? (
                <div className="py-12 text-center bg-[#0d0f12] rounded-xl border border-emerald-500/30 p-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-1">Message Received!</h4>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto">
                    Thank you for contacting Elite Professional Looks Salon. Our reception team will call or message you back promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs text-[#dec47a] underline font-medium hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#292d37] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 098765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#292d37] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#292d37] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Service Interest
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#292d37] rounded-lg text-white focus:outline-none focus:border-[#c5a059]"
                      >
                        <option value="Hair Styling & Cut">Hair Styling & Cut</option>
                        <option value="Global Hair Coloring & Balayage">Global Hair Coloring & Balayage</option>
                        <option value="Facial & D-Tan Skin Treatment">Facial & D-Tan Skin Treatment</option>
                        <option value="Beard & Spa Grooming">Beard & Spa Grooming</option>
                        <option value="Bridal / Event Package">Bridal / Event Package</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Your Message or Consultation Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Let us know your preferred date, hair type, or specific treatment you're looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#292d37] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-[#dec47a] to-[#c5a059] rounded hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="rounded-2xl overflow-hidden border border-[#232731] bg-[#14161c] shadow-2xl relative">
          <div className="p-4 bg-[#101216] border-b border-[#22252c] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <Navigation className="w-4 h-4 text-[#dec47a]" />
              <span className="font-semibold text-white">Interactive Salon Map</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Commercial -2, Tech Zone IV, Greater Noida</span>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedMapAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#dec47a] hover:underline flex items-center gap-1 font-medium"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="relative w-full h-[360px] sm:h-[420px] bg-[#1a1c22]">
            <iframe
              title="Elite Professional Looks Salon Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={`https://maps.google.com/maps?q=${encodedMapAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-90 opacity-85 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
