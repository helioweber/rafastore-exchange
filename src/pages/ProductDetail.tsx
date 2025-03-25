
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, ShoppingBag, Heart, Award, Shield, TruckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductBySlug, getProductsByCategory, getProductBySlug as getProduct } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { toast } from 'sonner';

const conditionMap = {
  'new': 'Novo',
  'like-new': 'Como novo',
  'good': 'Bom',
  'fair': 'Regular',
  'worn': 'Usado'
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const [quantity, setQuantity] = useState(1);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (!product) {
      // Handle product not found
      return;
    }
    
    setLoaded(true);
    window.scrollTo(0, 0);
  }, [product, slug]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <p className="mb-6">O produto que você está procurando não existe ou foi removido.</p>
        <Button asChild>
          <Link to="/products">Ver todos os produtos</Link>
        </Button>
      </div>
    );
  }
  
  const similarProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
    
  const handleAddToCart = () => {
    toast.success(`${product.name} adicionado ao carrinho`, {
      description: `Quantidade: ${quantity}`,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/products" 
          className="inline-flex items-center text-sm font-medium mb-8 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para produtos
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div 
            className={`relative rounded-2xl overflow-hidden bg-gray-100 transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {discount > 0 && (
              <div className="absolute top-4 left-4 z-10 rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
                {discount}% OFF
              </div>
            )}
            <img 
              src={product.imageSrc} 
              alt={product.name}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          
          {/* Product Info */}
          <div 
            className={`flex flex-col transition-all duration-700 delay-300 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-secondary rounded-full">
                    {product.brand}
                  </span>
                  <span className="text-sm font-medium px-3 py-1 bg-secondary rounded-full">
                    {conditionMap[product.condition]}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-bold">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <Separator className="my-6" />
            
            <div className="mb-8">
              <h3 className="font-medium mb-4">Quantidade</h3>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Button 
                className="rounded-full text-base h-12"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Adicionar ao carrinho
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full text-base h-12"
              >
                <Heart className="h-5 w-5 mr-2" />
                Adicionar à wishlist
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-gray-500" />
                <span>Produto verificado</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gray-500" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <TruckIcon className="h-5 w-5 text-gray-500" />
                <span>Entrega em todo Brasil</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="shipping">Envio</TabsTrigger>
              <TabsTrigger value="returns">Devoluções</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="text-gray-700">
              <h3 className="text-lg font-medium mb-3">Especificações do Produto</h3>
              <p className="mb-4">
                {product.description}
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Marca: {product.brand}</li>
                <li>Condição: {conditionMap[product.condition]}</li>
                <li>Categoria: {product.category}</li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="text-gray-700">
              <h3 className="text-lg font-medium mb-3">Informações de Envio</h3>
              <p className="mb-4">
                Nossos produtos são enviados em até 48 horas após a confirmação do pagamento.
                O prazo de entrega varia de acordo com a região do país, mas geralmente leva
                entre 3 e 10 dias úteis.
              </p>
              <p>
                Os custos de frete são calculados na finalização da compra, com base no CEP
                de destino e no peso/dimensões do produto.
              </p>
            </TabsContent>
            <TabsContent value="returns" className="text-gray-700">
              <h3 className="text-lg font-medium mb-3">Política de Devoluções</h3>
              <p className="mb-4">
                Na RafaWeber Store, você tem até 7 dias após o recebimento do produto para
                solicitar a devolução caso não esteja satisfeito.
              </p>
              <p>
                Para produtos com defeito, o prazo é de 30 dias. Entre em contato com nosso
                suporte para iniciar o processo de devolução.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <ProductGrid products={similarProducts} title="Produtos Similares" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
