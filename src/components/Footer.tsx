import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Share2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#08090b] text-neutral-400 border-t border-[#1b1d24] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1b1d24]">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="font-serif text-2xl font-semibold text-white tracking-wide block hover:text-[#dec47a] transition-colors"
            >
              Elite Professional Looks
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-sm">
              Greater Noida’s premier destination for couture hair styling, dimensional balayage, rejuvenating skin therapies, and executive grooming.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-8 h-8 rounded-lg bg-[#14161c] border border-[#232731] flex items-center justify-center text-neutral-300 hover:text-[#dec47a] hover:border-[#c5a059] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-8 h-8 rounded-lg bg-[#14161c] border border-[#232731] flex items-center justify-center text-neutral-300 hover:text-[#dec47a] hover:border-[#c5a059] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-[#14161c] border border-[#232731] flex items-center justify-center text-neutral-300 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Hair Styling & Color
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Skin & O3+ Facials
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Grooming & Spa
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Javed & Team
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Reviews (4.8★)
                </a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Salon Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-[#dec47a]" />
                <span>Mon – Sun: 9:00 AM – 10:00 PM</span>
              </div>
              <p className="text-[11px] text-neutral-500 pt-1">
                Open all 7 days for scheduled appointments and walk-in consultations.
              </p>
              <button
                onClick={onOpenBooking}
                className="mt-3 inline-block text-xs text-[#dec47a] underline font-medium hover:text-white"
              >
                Book online in 30 seconds
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Visit Salon
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#dec47a] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Commercial -2, Tech Zone IV, Amrapali Dream Valley, Greater Noida, UP 201318
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#dec47a]" />
                <a href={`tel:${SALON_INFO.phoneClean}`} className="hover:text-white font-medium">
                  {SALON_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} Elite Professional Looks Salon. All rights reserved.</p>
          <p className="text-neutral-400">
            Powered by <span className="text-neutral-200 font-medium">Elite Professional Looks Salon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
