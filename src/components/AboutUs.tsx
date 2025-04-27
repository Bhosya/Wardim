
import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="tentang-kami">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block font-serif text-wardim-red text-lg mb-2">关于我们 (Guānyú wǒmen)</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Tentang Kami</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                <span className="text-wardim-red font-semibold">Wardim</span> menghadirkan hidangan Cina klasik dengan resep turun-temurun, 
                terletak di bangunan bersejarah Kota Lama Semarang.
              </p>
              <p className="mb-6">
                Didirikan pada tahun 1989, restoran kami menawarkan pengalaman gastronomi autentik dari berbagai provinsi 
                di Tiongkok, dipadukan dengan sentuhan rasa lokal yang menggugah selera.
              </p>
              <p>
                Setiap hidangan kami dipersiapkan dengan bahan-bahan segar berkualitas premium dan teknik memasak tradisional, 
                menjadikan Wardim destinasi kuliner terbaik bagi pecinta masakan Cina di Semarang.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="p-3 bg-wardim-gold/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-wardim-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Resep Autentik</h4>
                <p className="text-gray-600">Resep turun-temurun dari generasi ke generasi</p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center space-x-4">
              <div className="p-3 bg-wardim-gold/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-wardim-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Bahan Premium</h4>
                <p className="text-gray-600">Selalu segar dan berkualitas tinggi</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 chinese-border p-8">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Dim Sum tradisional" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-serif text-lg">Dim Sum 点心 (Diǎnxīn)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
