import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [preSelectedStylist, setPreSelectedStylist] = useState<string>('javed');
  const [activePreService, setActivePreService] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleViewServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceId: string) => {
    setActivePreService(serviceId);
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev : [...prev, serviceId]
    );
    setIsBookingOpen(true);
  };

  const handleSelectStylistForBooking = (stylistId: string) => {
    setPreSelectedStylist(stylistId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f3f4f6] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenBooking={handleOpenBooking}
          onViewServices={handleViewServices}
        />

        <AboutSection
          onSelectStylistForBooking={handleSelectStylistForBooking}
        />

        <ServicesSection
          onBookService={handleBookService}
          selectedServices={selectedServices}
        />

        <GallerySection />

        <ReviewsSection />

        <LocationContact />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedServiceId={activePreService}
        preSelectedStylistId={preSelectedStylist}
      />

      {/* Quick Direct Connect Actions */}
      <FloatingWhatsApp />
    </div>
  );
}
