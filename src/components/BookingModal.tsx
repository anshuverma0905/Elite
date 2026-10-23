import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Scissors, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { SALON_SERVICES, SALON_STYLISTS, SALON_TIME_SLOTS, SALON_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
  preSelectedStylistId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
  preSelectedStylistId,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedStylist, setSelectedStylist] = useState<string>('javed');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [step, setStep] = useState<'details' | 'confirmed'>('details');
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServices((prev) =>
        prev.includes(preSelectedServiceId) ? prev : [...prev, preSelectedServiceId]
      );
    }
  }, [preSelectedServiceId]);

  useEffect(() => {
    if (preSelectedStylistId) {
      setSelectedStylist(preSelectedStylistId);
    }
  }, [preSelectedStylistId]);

  useEffect(() => {
    // Default to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateString);
  }, []);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const chosenServices = SALON_SERVICES.filter((s) => selectedServices.includes(s.id));
  const estimatedTotal = chosenServices.reduce((sum, s) => sum + s.price, 0);

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert('Please select at least one salon service.');
      return;
    }
    if (!fullName.trim() || !phone.trim()) {
      alert('Please provide your name and phone number for appointment confirmation.');
      return;
    }

    const ref = `EPL-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setStep('confirmed');
  };

  const selectedStylistName =
    selectedStylist === 'any'
      ? 'Any Available Specialist'
      : SALON_STYLISTS.find((s) => s.id === selectedStylist)?.name || 'Javed';

  const generateWhatsAppMessage = () => {
    const serviceNames = chosenServices.map((s) => s.name).join(', ');
    const text = `*New Appointment Request - Elite Professional Looks Salon*
Booking ID: ${bookingRef}
Client: ${fullName}
Phone: ${phone}
Services: ${serviceNames}
Total Est.: ₹${estimatedTotal}
Date: ${selectedDate}
Time: ${selectedTime}
Preferred Stylist: ${selectedStylistName}
${notes ? `Notes: ${notes}` : ''}`;

    return encodeURIComponent(text);
  };

  const handleReset = () => {
    setStep('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#121419] border border-[#262a34] rounded-2xl max-w-2xl w-full my-auto shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="p-6 bg-[#16181f] border-b border-[#232731] flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[#dec47a] font-medium">
              Elite Professional Looks Salon
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-white font-medium">
              {step === 'details' ? 'Schedule Your Appointment' : 'Appointment Reserved'}
            </h2>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#20242e] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {step === 'details' ? (
          <form onSubmit={handleConfirmBooking} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Select Services */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                1. Select Desired Services (Click to toggle) *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto p-1 bg-[#0d0f12] rounded-xl border border-[#20232b]">
                {SALON_SERVICES.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between gap-2 text-xs ${
                        isChecked
                          ? 'bg-[#1e1c15] border-[#c5a059] text-white'
                          : 'bg-[#15171d] border-transparent text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="font-medium truncate">{service.name}</div>
                        <div className="text-[11px] text-neutral-400">
                          {service.duration} · ₹{service.price}
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded shrink-0 flex items-center justify-center border ${
                          isChecked
                            ? 'bg-[#dec47a] border-[#dec47a] text-black'
                            : 'border-neutral-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {chosenServices.length > 0 && (
                <div className="mt-2 text-xs text-neutral-400 flex items-center justify-between px-1">
                  <span>
                    Selected: {chosenServices.length} {chosenServices.length === 1 ? 'service' : 'services'}
                  </span>
                  <span className="font-semibold text-[#dec47a] tabular-nums">
                    Est. Total: ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>

            {/* Step 2: Preferred Stylist */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                2. Preferred Stylist / Specialist
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SALON_STYLISTS.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStylist(st.id)}
                    className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                      selectedStylist === st.id
                        ? 'border-[#c5a059] bg-[#1d1b15] text-[#dec47a]'
                        : 'border-[#242832] bg-[#14161b] text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold truncate">{st.name}</div>
                    <div className="text-[10px] text-neutral-400 truncate mt-0.5">{st.role.split(' ')[0]}</div>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setSelectedStylist('any')}
                  className={`p-2.5 rounded-lg border text-xs text-left transition-all ${
                    selectedStylist === 'any'
                      ? 'border-[#c5a059] bg-[#1d1b15] text-[#dec47a]'
                      : 'border-[#242832] bg-[#14161b] text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="font-semibold">First Available</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Quickest slot</div>
                </button>
              </div>
            </div>

            {/* Step 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#dec47a]" />
                  <span>3. Preferred Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#272b35] rounded-lg text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#dec47a]" />
                  <span>Time Slot (9 AM - 10 PM)</span>
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#272b35] rounded-lg text-white focus:outline-none focus:border-[#c5a059]"
                >
                  {SALON_TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshi Verma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#272b35] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 088827 23448"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#0b0c0e] border border-[#272b35] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Special Requests or Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Long hair, sensitive skin, previous hair color history..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-[#0b0c0e] border border-[#272b35] rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#20232b]">
              <div className="text-[11px] text-neutral-400">
                Payment upon service at salon. Cash, UPI & Cards accepted.
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 text-xs uppercase tracking-wider font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dec47a] to-[#c5a059] rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#1e1c15] border border-[#c5a059] flex items-center justify-center mx-auto text-[#dec47a]">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#dec47a] font-medium">
                Appointment Reference: {bookingRef}
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mt-1">
                We Look Forward to Welcoming You!
              </h3>
              <p className="text-xs text-neutral-300 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Your appointment has been scheduled for{' '}
                <strong className="text-white">{selectedDate}</strong> at{' '}
                <strong className="text-white">{selectedTime}</strong> with{' '}
                <strong className="text-white">{selectedStylistName}</strong>.
              </p>
            </div>

            {/* Summary Box */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-[#0e1014] border border-[#242833] text-left text-xs space-y-2">
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-500">Salon:</span>
                <span>Elite Professional Looks</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-500">Address:</span>
                <span className="text-right">Commercial -2, Tech Zone IV</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-500">Services:</span>
                <span className="text-right font-medium text-white truncate max-w-[200px]">
                  {chosenServices.map((s) => s.name).join(', ')}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#1f222b] font-semibold text-white">
                <span>Estimated Total:</span>
                <span className="text-[#dec47a] font-serif text-sm">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* WhatsApp Quick Notification Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${SALON_INFO.phoneClean}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-xs font-semibold text-black flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Booking to Salon WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#1a1d24] hover:bg-[#222732] border border-neutral-700 text-xs font-medium text-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
