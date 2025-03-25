
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter,
  SheetClose 
} from '@/components/ui/sheet';
import ProductGrid from '@/components/ProductGrid';
import { 
  getAllProducts, 
  getProductsByCategory, 
  getAllCategories, 
  getCategoryBySlug 
} from '@/data/products';

const Products = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const [products, setProducts] = useState(getAllProducts());
  const [activeCategory, setActiveCategory] = useState<string | null>(categorySlug || null);
  const [isLoading, setIsLoading] = useState(true);
  const categories = getAllCategories();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    
    setTimeout(() => {
      if (categorySlug) {
        setActiveCategory(categorySlug);
        setProducts(getProductsByCategory(categorySlug));
      } else {
        setActiveCategory(null);
        setProducts(getAllProducts());
      }
      setIsLoading(false);
    }, 300);
  }, [categorySlug]);
  
  const categoryName = activeCategory 
    ? (getCategoryBySlug(activeCategory)?.name || 'Categoria') 
    : 'Todos os Produtos';

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{categoryName}</h1>
            <p className="text-gray-500">
              {products.length} {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </p>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtrar Produtos</SheetTitle>
                  <SheetDescription>
                    Refine sua busca utilizando os filtros abaixo.
                  </SheetDescription>
                </SheetHeader>
                
                <div className="py-6">
                  <h3 className="text-sm font-medium mb-3">Categorias</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <Link
                        key={category.id}
                        to={`/products/category/${category.slug}`}
                        className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                          activeCategory === category.slug
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <h3 className="text-sm font-medium mb-3">Condição</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="condition-new" className="mr-2" />
                      <label htmlFor="condition-new">Novo</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="condition-like-new" className="mr-2" />
                      <label htmlFor="condition-like-new">Como novo</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="condition-good" className="mr-2" />
                      <label htmlFor="condition-good">Bom</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="condition-fair" className="mr-2" />
                      <label htmlFor="condition-fair">Regular</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="condition-worn" className="mr-2" />
                      <label htmlFor="condition-worn">Usado</label>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <h3 className="text-sm font-medium mb-3">Faixa de Preço</h3>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="Min" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <span>-</span>
                    <input 
                      type="text" 
                      placeholder="Max" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </SheetClose>
                  <Button>Aplicar Filtros</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Ordenar
            </Button>
            
            {activeCategory && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1"
                asChild
              >
                <Link to="/products">
                  <X className="h-4 w-4" />
                  Limpar filtros
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-2xl bg-gray-100 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
