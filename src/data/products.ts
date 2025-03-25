
import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Futebol',
    slug: 'futebol',
    icon: 'football'
  },
  {
    id: '2',
    name: 'Basquete',
    slug: 'basquete',
    icon: 'basketball'
  },
  {
    id: '3',
    name: 'Tênis',
    slug: 'tenis',
    icon: 'activity'
  },
  {
    id: '4',
    name: 'Corrida',
    slug: 'corrida',
    icon: 'running'
  },
  {
    id: '5',
    name: 'Ciclismo',
    slug: 'ciclismo',
    icon: 'bike'
  },
  {
    id: '6',
    name: 'Musculação',
    slug: 'musculacao',
    icon: 'dumbbell'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Chuteira Nike Mercurial',
    description: 'Chuteira Nike Mercurial Vapor 14 Elite em excelente estado, usada apenas por uma temporada. Solado em boas condições com travas intactas.',
    price: 399.90,
    originalPrice: 899.90,
    condition: 'good',
    imageSrc: 'https://images.unsplash.com/photo-1511886929837-354984c59970?q=80&w=1000',
    category: 'futebol',
    brand: 'Nike',
    featured: true,
    slug: 'chuteira-nike-mercurial'
  },
  {
    id: '2',
    name: 'Bola de Basquete Spalding NBA',
    description: 'Bola oficial da NBA, modelo Spalding, com poucos sinais de uso. Pressão de ar mantida e aderência perfeita.',
    price: 189.90,
    originalPrice: 349.90,
    condition: 'like-new',
    imageSrc: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1000',
    category: 'basquete',
    brand: 'Spalding',
    featured: true,
    slug: 'bola-basquete-spalding-nba'
  },
  {
    id: '3',
    name: 'Raquete Wilson Pro Staff RF97',
    description: 'Raquete de tênis profissional modelo Roger Federer, com poucos sinais de uso. Excelente equilíbrio e potência.',
    price: 999.90,
    originalPrice: 1899.90,
    condition: 'good',
    imageSrc: 'https://images.unsplash.com/photo-1622279457486-5c152d81332c?q=80&w=1000',
    category: 'tenis',
    brand: 'Wilson',
    featured: true,
    slug: 'raquete-wilson-prostaff-rf97'
  },
  {
    id: '4',
    name: 'Tênis Adidas Ultraboost',
    description: 'Tênis de corrida Adidas Ultraboost com tecnologia de amortecimento premium. Pouco uso, excelente para corridas de longa distância.',
    price: 449.90,
    originalPrice: 899.90,
    condition: 'like-new',
    imageSrc: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=1000',
    category: 'corrida',
    brand: 'Adidas',
    featured: false,
    slug: 'tenis-adidas-ultraboost'
  },
  {
    id: '5',
    name: 'Bike Trek Marlin 7',
    description: 'Mountain bike Trek Marlin 7 aro 29, com suspensão RockShox e transmissão Shimano Deore. Ótima condição, apenas alguns detalhes estéticos.',
    price: 4999.90,
    originalPrice: 7599.90,
    condition: 'good',
    imageSrc: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1000',
    category: 'ciclismo',
    brand: 'Trek',
    featured: true,
    slug: 'bike-trek-marlin-7'
  },
  {
    id: '6',
    name: 'Kit Halteres 10kg',
    description: 'Par de halteres de 10kg cada, emborrachados, em excelente estado. Ideal para musculação em casa.',
    price: 229.90,
    originalPrice: 399.90,
    condition: 'like-new',
    imageSrc: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=1000',
    category: 'musculacao',
    brand: 'Oxer',
    featured: false,
    slug: 'kit-halteres-10kg'
  },
  {
    id: '7',
    name: 'Camisa Seleção Brasileira 2022',
    description: 'Camisa oficial da Seleção Brasileira modelo 2022, usada apenas algumas vezes. Sem manchas ou marcas.',
    price: 179.90,
    originalPrice: 349.90,
    condition: 'like-new',
    imageSrc: 'https://images.unsplash.com/photo-1621891333507-02a232f6b35f?q=80&w=1000',
    category: 'futebol',
    brand: 'Nike',
    featured: false,
    slug: 'camisa-selecao-brasileira-2022'
  },
  {
    id: '8',
    name: 'Luvas de Goleiro Adidas Predator',
    description: 'Luvas profissionais para goleiro, modelo Adidas Predator, com tecnologia de aderência em condições úmidas. Usadas poucas vezes.',
    price: 149.90,
    originalPrice: 299.90,
    condition: 'good',
    imageSrc: 'https://images.unsplash.com/photo-1560089275-efd6dae3dfa0?q=80&w=1000',
    category: 'futebol',
    brand: 'Adidas',
    featured: false,
    slug: 'luvas-goleiro-adidas-predator'
  }
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(product => product.category === categorySlug);
};

export const getAllProducts = () => {
  return products;
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug);
};

export const getAllCategories = () => {
  return categories;
};
