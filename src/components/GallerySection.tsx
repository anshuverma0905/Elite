import React, { useState } from 'react';
import { Eye, Sparkles, X } from 'lucide-react';
import { salonImages } from '../assets/imagePaths';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      img: salonImages.hero,
      title: 'Luxury Boutique Salon Sanctuary',
      subtitle: 'Modern styling stations, warm ambient glow & private wash suites',
      span: 'md:col-span-8',
      aspect: 'h-[320px] sm:h-[380px]',
    },
    {
      img: salonImages.hairColoring,
      title: 'Luminous Balayage & Tonal Highlights',
      subtitle: 'Bespoke hand-painted caramel and golden blonde transitions',
      span: 'md:col-span-4',
      aspect: 'h-[320px] sm:h-[380px]',
    },
    {
      img: salonImages.hairStyling,
      title: 'Master Shear Craft & Hair Contouring',
      subtitle: 'Javed detailing custom face-framing layers and blowout',
      span: 'md:col-span-6',
      aspect: 'h-[300px] sm:h-[340px]',
    },
    {
      img: salonImages.facialSpa,
      title: 'O3+ & 24K Gold Facial Spa Suite',
      subtitle: 'Therapeutic nourishment, deep pore renewal & lymphatic care',
      span: 'md:col-span-6',
      aspect: 'h-[300px] sm:h-[340px]',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#0b0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#dec47a] font-medium mb-3">
            Visual Lookbook & Atmosphere
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            The Elite Experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light mt-3">
            An inside look into our salon suites, artistry, and client transformations in Tech Zone IV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(item.img)}
              className={`${item.span} relative rounded-2xl overflow-hidden border border-[#23262f] bg-[#14161b] cursor-pointer group`}
            >
              <img
                src={item.img}
                alt={item.title}
                className={`w-full ${item.aspect} object-cover group-hover:scale-105 transition-transform duration-700`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#dec47a] font-medium mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Elite Lookbook</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 font-light hidden sm:block">
                  {item.subtitle}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#dec47a] transition-colors p-2"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Elite Salon Gallery Preview"
              className="w-full max-h-[85vh] object-contain rounded-xl border border-neutral-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
