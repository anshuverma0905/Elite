import React, { useState } from 'react';
import { Clock, Plus, Check, Search, Scissors, Sparkles, Feather, PackageCheck } from 'lucide-react';
import { SALON_SERVICES } from '../data/salonData';
import { SalonService, ServiceCategory } from '../types/salon';

interface ServicesSectionProps {
  onBookService: (serviceId: string) => void;
  selectedServices: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookService,
  selectedServices,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs: { id: ServiceCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'hair', label: 'Hair Care & Color', icon: <Scissors className="w-4 h-4" /> },
    { id: 'skin', label: 'Skin & Facials', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'grooming', label: 'Grooming & Spa', icon: <Feather className="w-4 h-4" /> },
    { id: 'packages', label: 'Curated Packages', icon: <PackageCheck className="w-4 h-4" /> },
  ];

  const filteredServices = SALON_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.idealFor && service.idealFor.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#dec47a] font-medium mb-3">
              Comprehensive Salon Menu
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Services & Transparent Pricing
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light mt-3 max-w-xl">
              All treatments include personalized consultation and premium salon formulations. No hidden charges.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search hair color, facial, d-tan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#14161b] border border-[#262a33] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs (Compliant Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#131519] border border-[#22252c] rounded-xl mb-10 overflow-x-auto no-scrollbar">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#dec47a] to-[#c5a059] text-[#0b0c0e] font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-[#1a1d23]'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#14161b] border border-[#22252c] rounded-2xl p-8">
            <p className="text-neutral-300 text-sm mb-2">No treatments found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs text-[#dec47a] underline font-medium hover:text-white"
            >
              Reset filter & view all services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const isSelected = selectedServices.includes(service.id);

              return (
                <div
                  key={service.id}
                  className={`p-6 rounded-2xl bg-[#13151a] border transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-black/60 ${
                    isSelected
                      ? 'border-[#c5a059] ring-1 ring-[#c5a059]/40'
                      : 'border-[#22252d] hover:border-[#383d4a]'
                  }`}
                >
                  <div>
                    {/* Header line: Title & Price */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-base font-semibold text-white group-hover:text-[#dec47a] transition-colors leading-snug">
                        {service.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-serif text-lg font-semibold text-[#f5eed8] tabular-nums">
                          ₹{service.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Metadata line with subtle separator (Zero-pill compliant) */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#dec47a]" />
                        <span>{service.duration}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{service.category}</span>
                      {service.featured && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#dec47a] font-medium">Guest Favorite</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Ideal For Note */}
                    {service.idealFor && (
                      <p className="text-[11px] text-neutral-400 italic">
                        Recommended for: {service.idealFor}
                      </p>
                    )}
                  </div>

                  {/* Booking Action */}
                  <div className="mt-6 pt-4 border-t border-[#1f2229] flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400">
                      Walk-ins & Appointments
                    </span>
                    <button
                      onClick={() => onBookService(service.id)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-[#c5a059] text-black hover:bg-[#dec47a]'
                          : 'text-[#dec47a] border border-[#dec47a]/40 hover:bg-[#dec47a] hover:text-black'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Selected</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Book Service</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Hair Coloring & Balayage Special Highlight Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#171920] to-[#121418] border border-[#2b2e37] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-xs uppercase tracking-wider text-[#dec47a] font-semibold">
                Greater Noida’s Signature Color Studio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1 mb-3">
                Thinking of a bold Balayage or subtle Highlights?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-light">
                Complimentary 15-minute strand test & skin patch test before any chemical service. Javed and our master colorists formulate custom tonal palettes to match your undertone and style goals.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <button
                onClick={() => onBookService('hair-3')}
                className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dec47a] to-[#c5a059] rounded hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap shadow-md"
              >
                Schedule Color Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
