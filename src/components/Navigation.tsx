
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllCategories } from '@/data/products';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const categories = getAllCategories();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight relative group"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
            RafaWeber
          </span>
          <span className="relative ml-1 bg-black text-white px-2 py-1 text-xs font-medium rounded-md">
            Store
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">
            Início
          </Link>
          <Link to="/products" className="nav-link">
            Produtos
          </Link>
          <Link to="/about" className="nav-link">
            Sobre
          </Link>
          <Link to="/contact" className="nav-link">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
              0
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-background transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <Link to="/" className="text-xl font-medium">
            Início
          </Link>
          <Link to="/products" className="text-xl font-medium">
            Produtos
          </Link>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground">Categorias</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/products/category/${category.slug}`}
                  className="text-sm py-2 px-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className="text-xl font-medium">
            Sobre
          </Link>
          <Link to="/contact" className="text-xl font-medium">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
