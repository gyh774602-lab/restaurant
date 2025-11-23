export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'dessert' | 'drink';
  image: string;
  popular?: boolean;
}

export interface RecommendationResponse {
  recommendation: string;
  pairingNotes: string;
}

export interface ReservationForm {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}