
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'worn';
  imageSrc: string;
  category: string;
  brand: string;
  featured?: boolean;
  slug: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon?: string;
};
