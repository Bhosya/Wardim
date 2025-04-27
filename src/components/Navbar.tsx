
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

type NavItemProps = {
  label: string;
  href: string;
};

const NavItem = ({ label, href }: NavItemProps) => (
  <li>
    <a 
      href={href}
      className="inline-block px-4 py-2 text-base hover:text-wardim-gold transition-colors duration-300"
    >
      {label}
    </a>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleReservation = () => {
    // For now, we'll just show an alert, but in a real app,
    // you would open a reservation modal or navigate to a reservation page
    alert('Fitur reservasi akan segera tersedia!');
  };

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="#" className="flex items-center">
              <span className="font-serif font-bold text-2xl text-wardim-red">
                Wardim <span className="text-wardim-gold">华鼎</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            <NavItem label="Home" href="#" />
            <NavItem label="Menu" href="#menu" />
            <NavItem label="Promo" href="#promo" />
            <NavItem label="Lokasi" href="#lokasi" />
            <NavItem label="Kontak" href="#kontak" />
            <li>
              <Button 
                className="ml-4 bg-wardim-red hover:bg-wardim-red/90 text-white"
                onClick={handleReservation}
              >
                Reservasi
              </Button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <Button 
            onClick={toggleMenu} 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <ul className="flex flex-col space-y-2">
              <NavItem label="Home" href="#" />
              <NavItem label="Menu" href="#menu" />
              <NavItem label="Promo" href="#promo" />
              <NavItem label="Lokasi" href="#lokasi" />
              <NavItem label="Kontak" href="#kontak" />
              <li className="mt-4">
                <Button 
                  className="w-full bg-wardim-red hover:bg-wardim-red/90 text-white"
                  onClick={handleReservation}
                >
                  Reservasi
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="h-1 bg-gold-gradient"></div>
    </header>
  );
};

export default Navbar;
