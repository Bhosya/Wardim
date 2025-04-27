
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wardim-black text-white" id="kontak">
      <div className="section-divider transform rotate-180"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-wardim-gold mb-4">
              Wardim <span className="text-wardim-red">华鼎</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Restoran Cina Autentik di Kota Lama Semarang. 
              Menyajikan hidangan tradisional dengan resep turun-temurun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-wardim-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-wardim-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-wardim-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Menu Favorit</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wardim-gold transition-colors">Bebek Peking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wardim-gold transition-colors">Kung Pao Ayam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wardim-gold transition-colors">Dimsum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wardim-gold transition-colors">Mie Goreng Szechuan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wardim-gold transition-colors">Cap Cay Seafood</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wardim-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-wardim-gold transition-colors">Menu</a></li>
              <li><a href="#promo" className="text-gray-300 hover:text-wardim-gold transition-colors">Promo</a></li>
              <li><a href="#lokasi" className="text-gray-300 hover:text-wardim-gold transition-colors">Lokasi</a></li>
              <li><a href="#kontak" className="text-gray-300 hover:text-wardim-gold transition-colors">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Hubungi Kami</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                Jl. Letjen Suprapto No. 123<br />
                Kota Lama, Semarang 50174
              </p>
              <p>
                Telepon: (024) 1234-5678<br />
                WhatsApp: +62 812-3456-7890
              </p>
              <p>
                Email: info@wardim.id
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Wardim - 华鼎. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-wardim-gold text-sm">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-wardim-gold text-sm">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-wardim-gold text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
