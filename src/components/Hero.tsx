import React from 'react';
import { ArrowRight, Star, Clock, MapPin, Sparkles } from 'lucide-react';
import { salonImages } from '../assets/imagePaths';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onViewServices }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker without pills */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dec47a] font-medium mb-4">
              <span>Premium Hair & Beauty Sanctuary</span>
              <span aria-hidden="true">·</span>
              <span>Greater Noida West</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] mb-6 text-balance">
              Transform Your Look, <br className="hidden sm:inline" />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#f5eed8] via-[#dec47a] to-[#c5a059]">
                Elevate Your Confidence.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8 font-light">
              {SALON_INFO.subheadline} Immerse yourself in personalized styling, couture hair color, rejuvenating facials, and relaxing spa therapy.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 text-sm uppercase tracking-wider font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dec47a] to-[#c5a059] rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#c5a059]/20 flex items-center gap-2 group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onViewServices}
                className="px-7 py-3.5 text-sm uppercase tracking-wider font-medium text-white border border-neutral-700 hover:border-[#dec47a] hover:text-[#dec47a] bg-neutral-900/40 backdrop-blur-sm rounded transition-all"
              >
                View Services
              </button>
            </div>

            {/* Credibility & Trust Strip */}
            <div className="pt-6 border-t border-[#22252c] flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="flex text-[#dec47a]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#dec47a]" />
                  ))}
                </div>
                <span className="font-semibold text-white tabular-nums">4.8★</span>
                <span>(180+ Google Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#dec47a]" />
                <span>Open Daily 9:00 AM – 10:00 PM</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dec47a]" />
                <span>Amrapali Dream Valley</span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2b2e37] shadow-2xl bg-[#14161a]">
              <img
                src={salonImages.hero}
                alt="Elite Professional Looks Salon Interior in Greater Noida"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/20 pointer-events-none" />

              {/* Floating aesthetic feature tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#101216]/90 backdrop-blur-md border border-[#2e323b] text-xs">
                <div className="flex items-center justify-between text-neutral-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#dec47a]" />
                    <span className="font-medium text-white">Private Styling Lounges</span>
                  </div>
                  <span className="text-[#dec47a] font-medium">Bespoke Hair & Skin Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
