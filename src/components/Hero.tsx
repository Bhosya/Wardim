
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderNow = () => {
    // For now, just show an alert
    alert('Fitur pemesanan online akan segera tersedia!');
    // In a real app, you would navigate to an order page or open an order modal
  };
  
  return (
    <section className="pt-24 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-wardim-black/60 z-10"></div>
      
      {/* Background Image - Classic Chinese Restaurant */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://1.bp.blogspot.com/-t-KC19Ir3Rg/XmG6mghnM6I/AAAAAAAA9aw/kLeUKlNPnvEm02q2HIhC8yzkCBUrSqogwCKgBGAsYHg/s1600/Gerai%2BWARDIM%2BHorison%2BMT%2BHaryono%2BKota%2BLama%2BSemarang.jpg')",
          backgroundPosition: "center"
        }}
      ></div>
      
      {/* Chinese Pattern Overlay */}
      <div className="absolute inset-0 bg-chinese-pattern opacity-10 z-10"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-20">
        <div className="max-w-3xl text-center mx-auto">
          <div className="animate-float">
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-white">
              Selamat Datang di Wardim
              <span className="block text-wardim-gold mt-2">欢迎 (Huānyíng)</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light mb-8">
              Rasakan Kelezatan Autentik Masakan Cina di Hati Semarang
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-wardim-red hover:bg-wardim-red/90 text-white"
              onClick={handleOrderNow}
            >
              Pesan Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-wardim-gold text-wardim-gold hover:bg-wardim-gold/10"
              onClick={scrollToMenu}
            >
              Lihat Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="section-divider"></div>
    </section>
  );
};

export default Hero;
