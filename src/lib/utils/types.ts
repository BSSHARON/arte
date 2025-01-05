export interface ProductItem {
  id: string;
  name: string;
  price: number;
  images: { src: string; alt: string }[];
  description: string;
  quote: string;
}

export {};
