export interface Freight {
  id: number;
  price: string;
  paymentType: string;
  priceBy: string;
  loadType: string;
  weight: string;
  distance: string;
  cargo: string;
  origin: string;
  destination: string;
  publisher: string;
  isNew: boolean;
  isVip: boolean;
  advancement: string | null;
  negotiations: number;
}
