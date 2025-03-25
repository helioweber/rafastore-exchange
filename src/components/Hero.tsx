
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
          loaded ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000"
          alt="Equipment background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10 mt-16">
        <div className="max-w-3xl">
          <h3 
            className={`text-lg md:text-xl font-medium mb-4 transition-all duration-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Equipamentos esportivos de qualidade por preços acessíveis
          </h3>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 transition-all duration-700 delay-150 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Encontre o equipamento perfeito para o seu esporte
          </h1>
          
          <p 
            className={`text-lg md:text-xl leading-relaxed text-white/80 mb-8 max-w-xl transition-all duration-700 delay-300 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Na RafaWeber Store, você encontra equipamentos esportivos usados em ótimas condições, 
            selecionados com cuidado para oferecer a melhor experiência para sua prática esportiva.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 text-base">
              <Link to="/products">
                Ver produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 text-base">
              <Link to="/about">
                Sobre nós
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
