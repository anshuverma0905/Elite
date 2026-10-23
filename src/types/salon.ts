export type ServiceCategory = 'all' | 'hair' | 'skin' | 'grooming' | 'packages';

export interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'grooming' | 'packages';
  description: string;
  duration: string;
  price: number;
  featured?: boolean;
  idealFor?: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface BookingFormState {
  services: string[];
  stylistId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  notes: string;
}
