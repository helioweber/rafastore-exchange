
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

type ProductCardProps = {
  product: Product;
};

const conditionMap = {
  'new': 'Novo',
  'like-new': 'Como novo',
  'good': 'Bom',
  'fair': 'Regular',
  'worn': 'Usado'
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {discount > 0 && (
          <div className="absolute top-2 left-2 z-10 rounded-full bg-black px-2 py-1 text-xs font-medium text-white">
            {discount}% OFF
          </div>
        )}
        
        <div className="absolute top-2 right-2 z-10 rounded-full bg-white px-2 py-1 text-xs font-medium">
          {conditionMap[product.condition]}
        </div>
        
        <img
          src={product.imageSrc}
          alt={product.name}
          className={`h-full w-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-105' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button asChild size="sm" variant="secondary" className="rounded-full">
            <Link to={`/products/${product.slug}`}>
              <Eye className="h-4 w-4 mr-1" />
              Ver detalhes
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 transition-all duration-300 group-hover:text-black/80">
          {product.name}
        </h3>
        
        <div className="flex items-end gap-2 mb-1">
          <span className="text-lg font-bold">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {product.brand}
          </span>
          <Button size="sm" variant="outline" className="rounded-full">
            <ShoppingBag className="h-4 w-4 mr-1" />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
