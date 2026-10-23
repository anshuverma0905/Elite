import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick WhatsApp Button */}
      <a
        href={`https://wa.me/${SALON_INFO.phoneClean}?text=${encodeURIComponent(
          'Hello Elite Professional Looks Salon, I would like to book an appointment.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Elite Professional Looks Salon"
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-black font-semibold text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-4 h-4 fill-black" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Quick Phone Call on Mobile */}
      <a
        href={`tel:${SALON_INFO.phoneClean}`}
        aria-label="Call Elite Professional Looks Salon"
        className="sm:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#c5a059] text-black shadow-lg hover:brightness-110 active:scale-95 transition-all"
      >
        <Phone className="w-4 h-4" />
      </a>
    </div>
  );
};
