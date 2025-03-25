
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts, getAllCategories } from '@/data/products';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const featuredProducts = getFeaturedProducts();
  const categories = getAllCategories();
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Produtos em Destaque</h2>
              <p className="text-gray-500 mt-2">Equipamentos selecionados a dedo para você</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/products" className="flex items-center gap-2">
                Ver todos os produtos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      <Separator />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorias</h2>
            <p className="text-gray-500">
              Explore nossa seleção de equipamentos esportivos organizados por categorias
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={category.id}
                to={`/products/category/${category.slug}`}
                className={`bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 ${
                  loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square rounded-full bg-gray-100 flex items-center justify-center mb-4 mx-auto max-w-[100px]">
                  {/* You can add icons for each category here */}
                </div>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Separator />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className={`transition-all duration-700 delay-300 ${
                loaded ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a RafaWeber Store?</h2>
              <p className="text-gray-700 mb-6">
                Na RafaWeber Store, acreditamos que equipamentos esportivos de qualidade devem ser acessíveis a todos.
                Nossa missão é dar uma segunda vida a itens esportivos em ótimas condições.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Produtos Verificados</h3>
                    <p className="text-gray-600 text-sm">
                      Todos os nossos produtos passam por uma rigorosa inspeção de qualidade.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Preços Acessíveis</h3>
                    <p className="text-gray-600 text-sm">
                      Economize até 70% em comparação com produtos novos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Sustentabilidade</h3>
                    <p className="text-gray-600 text-sm">
                      Reutilização de equipamentos esportivos é bom para o planeta.
                    </p>
                  </div>
                </li>
              </ul>
              
              <Button asChild className="mt-8 rounded-full">
                <Link to="/about">Conheça nossa história</Link>
              </Button>
            </div>
            
            <div 
              className={`relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${
                loaded ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0'
              }`}
            >
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000" 
                alt="Sports equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece Agora</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Encontre o equipamento perfeito para seu esporte favorito por um preço acessível.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
            <Link to="/products">Ver todos os produtos</Link>
          </Button>
        </div>
      </section>
      
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">RafaWeber Store</h3>
              <p className="text-gray-600 mb-4">
                Equipamentos esportivos de qualidade por preços acessíveis.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Categorias</h3>
              <ul className="space-y-2">
                {categories.slice(0, 4).map(category => (
                  <li key={category.id}>
                    <Link 
                      to={`/products/category/${category.slug}`} 
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-gray-900">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-900">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-900">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-600">
                <li>contato@rafaweberstore.com</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} RafaWeber Store. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
