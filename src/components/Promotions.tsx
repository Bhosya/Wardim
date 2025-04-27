
import React from 'react';
import { Calendar } from 'lucide-react';

const Promotions = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative" id="promo">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-chinese-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="inline-block font-serif text-wardim-red text-lg mb-2">优惠 (Yōuhuì)</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Promo & Event</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nikmati penawaran spesial dan acara menarik di Wardim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lunch Special */}
          <div className="bg-red-gradient p-[2px] rounded-lg shadow-lg">
            <div className="bg-white rounded-lg p-6 h-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-wardim-red">Diskon 20% untuk Makan Siang</h3>
                  <p className="text-wardim-gold">每日特价 (Měi rì tèjià)</p>
                </div>
                <div className="flex items-center text-wardim-red font-bold text-xl">
                  -20%
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Nikmati diskon 20% untuk semua menu makan siang, Senin-Jumat pukul 11.00-14.00 WIB.
                Berlaku untuk dine-in dan take away.
              </p>
              
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Berlaku hingga 31 Desember 2024</span>
              </div>
            </div>
          </div>
          
          {/* Lunar New Year */}
          <div className="bg-gold-gradient p-[2px] rounded-lg shadow-lg">
            <div className="bg-white rounded-lg p-6 h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-serif font-bold text-wardim-gold">Festival Tahun Baru Imlek</h3>
                <p className="text-wardim-red">春节活动 (Chūnjié huódòng)</p>
              </div>
              
              <p className="text-gray-600 mb-4">
                Rayakan Tahun Baru Imlek dengan menu spesial dan pertunjukan barongsai.
                Dapatkan angpau keberuntungan setiap pembelian min. Rp 500.000.
              </p>
              
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>10-15 Februari 2025</span>
              </div>
            </div>
          </div>
          
          {/* Family Set */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Paket Keluarga Bahagia</h3>
              <p className="text-wardim-red">家庭套餐 (Jiātíng tàocān)</p>
            </div>
            
            <p className="text-gray-600 mb-2">
              Paket hidangan untuk 4-6 orang dengan harga spesial:
            </p>
            
            <ul className="text-gray-600 mb-4 space-y-1">
              <li>• Sup Jagung Kepiting</li>
              <li>• Bebek Peking (1/2 ekor)</li>
              <li>• Udang Saus Mentega</li>
              <li>• Sapo Tahu Seafood</li>
              <li>• Capcay Spesial</li>
              <li>• Nasi Putih (6 porsi)</li>
            </ul>
            
            <div className="flex justify-between items-center">
              <div className="text-wardim-red font-bold text-xl">Rp 650.000</div>
              <span className="text-wardim-gold font-medium">Hemat 15%</span>
            </div>
          </div>
          
          {/* Birthday Special */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Paket Ulang Tahun</h3>
              <p className="text-wardim-red">生日优惠 (Shēngrì yōuhuì)</p>
            </div>
            
            <p className="text-gray-600 mb-4">
              Rayakan ulang tahun Anda di Wardim dan dapatkan:
            </p>
            
            <ul className="text-gray-600 mb-6 space-y-1">
              <li>• 1 Kue ulang tahun tradisional Cina gratis</li>
              <li>• Diskon 10% untuk total tagihan</li>
              <li>• Dekorasi meja spesial</li>
              <li>• Foto kenang-kenangan</li>
            </ul>
            
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Reservasi min. 2 hari sebelumnya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
