import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Stylists', href: '#stylists' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-[#24272f] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white hover:text-[#dec47a] transition-colors whitespace-nowrap shrink-0"
          >
            Elite Professional Looks
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#dec47a] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#c5a059]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dec47a] to-[#c5a059] rounded hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="p-2 text-[#dec47a] hover:text-white transition-colors"
              aria-label="Call salon"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101216] border-b border-[#24272f] px-6 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-[#dec47a] text-base py-1 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#24272f] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dec47a] to-[#c5a059] rounded hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Book Appointment
            </button>
            <div className="text-center text-xs text-neutral-400">
              Open Daily 9:00 AM – 10:00 PM · Greater Noida
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
