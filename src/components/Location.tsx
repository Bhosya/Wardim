import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="lokasi">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block font-serif text-wardim-red text-lg mb-2">位置 (Wèizhì)</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Lokasi</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Temukan kami di jantung kawasan bersejarah Kota Lama Semarang
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 h-[500px] relative rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2282108571604!2d110.42639937412319!3d-6.9683700178953395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b59d51526bd%3A0xb91390541920185a!2sKota%20Lama%20Semarang!5e0!3m2!1sen!2sid!4v1713402357121!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Wardim di Kota Lama Semarang"
            ></iframe>
          </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-start mb-6">
                <MapPin className="text-wardim-red h-6 w-6 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center">
                    Alamat
                  </h3>
                  <p className="text-gray-600">
                    Jl. Letjen Suprapto No. 123<br />
                    Kota Lama, Semarang 50174<br />
                    Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Clock className="text-wardim-red h-6 w-6 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Jam Operasional</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-600">
                    <div>Senin - Jumat:</div>
                    <div>10.00 - 22.00 WIB</div>
                    <div>Sabtu - Minggu:</div>
                    <div>09.00 - 23.00 WIB</div>
                    <div>Hari Libur:</div>
                    <div>09.00 - 23.00 WIB</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <Phone className="text-wardim-red h-6 w-6 mr-3" />
                    <h3 className="font-bold text-xl">Telepon</h3>
                  </div>
                  <p className="text-gray-600 pl-9">
                    (024) 1234-5678
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-4">
                <div>
                  <div className="flex items-center mb-4">
                    <Mail className="text-wardim-red h-6 w-6 mr-3" />
                    <h3 className="font-bold text-xl">Email</h3>
                  </div>
                  <p className="text-gray-600 pl-9">
                    info@wardim.id
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Location;
