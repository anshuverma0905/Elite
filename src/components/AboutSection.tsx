import React from 'react';
import { Award, Heart, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { salonImages } from '../assets/imagePaths';
import { SALON_STYLISTS } from '../data/salonData';

interface AboutSectionProps {
  onSelectStylistForBooking: (stylistId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectStylistForBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0f1115] border-t border-b border-[#1f2229] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#dec47a] font-medium mb-3">
            Our Philosophy & Craftsmanship
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white text-balance mb-6">
            Where Technical Mastery Meets <span className="italic text-[#dec47a]">Warm Hospitality</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            At Elite Professional Looks Salon, we believe that true elegance is deeply personal. Nestled in Greater Noida’s Tech Zone IV, our boutique studio was created to provide a sanctuary where you can unwind, receive honest consultation, and leave feeling extraordinary.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2b2e37] bg-[#14161a]">
              <img
                src={salonImages.hairStyling}
                alt="Stylist Javed detailing hair at Elite Professional Looks Salon"
                className="w-full h-[400px] sm:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl italic font-normal text-[#f5eed8] mb-1">
                  “Every face has its own geometry; our craft is highlighting its effortless beauty.”
                </p>
                <p className="text-xs text-[#dec47a] font-medium tracking-wide uppercase">
                  Javed · Lead Stylist & Creative Director
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f25] border border-[#2d313b] flex items-center justify-center shrink-0 text-[#dec47a]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1.5">Expertise of Javed & Senior Stylists</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    With over a decade of mastery in advanced balayage, international hair contouring, and scalp therapy, our friendly team brings high-fashion precision without any pretension.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f25] border border-[#2d313b] flex items-center justify-center shrink-0 text-[#dec47a]">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1.5">Unrushed Personalized Attention</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    We never double-book or rush through appointments. Every session starts with an honest consultation to understand your hair texture, lifestyle, and aesthetic desires.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f25] border border-[#2d313b] flex items-center justify-center shrink-0 text-[#dec47a]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1.5">Hospital-Grade Hygiene & Premium Products</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    We exclusively partner with world-renowned hair and skin formulations (L’Oréal Professionnel, O3+, Cheryl’s Cosmeceuticals, Matrix) with strict sterilization for every tool.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c1f25] border border-[#2d313b] flex items-center justify-center shrink-0 text-[#dec47a]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1.5">Serene, Welcoming Ambiance</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Step away from Greater Noida’s daily rush into ambient warm lighting, plush ergonomic wash chairs, and complimentary artisanal refreshments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Showcase */}
        <div id="stylists" className="pt-10">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#22252c]">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">Meet Our Artists</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Passionate professionals dedicated to perfecting your signature look
              </p>
            </div>
            <div className="text-xs text-[#dec47a] font-medium hidden sm:block">
              Dedicated Consultation with Every Booking
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SALON_STYLISTS.map((stylist) => (
              <div
                key={stylist.id}
                className="p-6 rounded-xl bg-[#14161b] border border-[#262a33] hover:border-[#c5a059]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#dec47a] transition-colors">
                        {stylist.name}
                      </h4>
                      <p className="text-xs text-[#dec47a] font-medium mt-0.5">{stylist.role}</p>
                    </div>
                    <span className="text-xs text-neutral-400 tabular-nums bg-neutral-900/60 px-2 py-1 rounded border border-neutral-800">
                      {stylist.experience}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 font-medium mb-3">
                    Specialty: {stylist.specialty}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {stylist.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#242730]">
                  <button
                    onClick={() => onSelectStylistForBooking(stylist.id)}
                    className="w-full py-2 text-xs uppercase tracking-wider font-semibold text-neutral-300 hover:text-white hover:bg-[#1f222b] rounded border border-neutral-700 transition-colors text-center"
                  >
                    Request with {stylist.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
