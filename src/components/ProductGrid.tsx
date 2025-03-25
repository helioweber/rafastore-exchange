
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/product-card';
import { Product } from '@/types';

type ProductGridProps = {
  products: Product[];
  title?: string;
};

const ProductGrid = ({ products, title }: ProductGridProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`transition-all duration-500 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
