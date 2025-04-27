
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import MenuDialog from './MenuDialog';

const FeaturedMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    {
      name: "Mie Goreng Szechuan",
      chinese: "四川炒面",
      pinyin: "Sìchuān chǎomiàn",
      description: "Mie goreng pedas khas Szechuan dengan daging sapi, sayuran, dan cabai Szechuan.",
      price: "Rp 65.000",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMG5vb2RsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Bebek Peking",
      chinese: "北京烤鸭",
      pinyin: "Běijīng kǎoyā",
      description: "Bebek panggang khas Peking dengan kulit renyah, disajikan dengan daun bawang, mentimun, dan pancake tipis.",
      price: "Rp 180.000",
      image: "https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVraW5nJTIwZHVja3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Kung Pao Ayam",
      chinese: "宫保鸡丁",
      pinyin: "Gōngbǎo jīdīng",
      description: "Potongan ayam dengan kacang mete, cabai kering, dan sayuran dalam saus kung pao yang kaya rasa.",
      price: "Rp 68.000",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a3VuZyUyMHBhbyUyMGNoaWNrZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Dimsum Campuran",
      chinese: "点心拼盘",
      pinyin: "Diǎnxīn pīnpán",
      description: "Piring dimsum dengan hakau udang, siomay ayam, dan pangsit goreng.",
      price: "Rp 58.000",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="menu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block font-serif text-wardim-red text-lg mb-2">菜单 (Càidān)</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Menu Unggulan</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nikmati hidangan terbaik kami dengan resep autentik dari berbagai provinsi di Tiongkok.
            Setiap hidangan dimasak dengan bahan-bahan premium dan teknik tradisional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
          {menuItems.map((item, index) => (
            <div key={index} className="flex">
              <MenuItem
                name={item.name}
                chinese={item.chinese}
                pinyin={item.pinyin}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-wardim-red hover:bg-wardim-red/90 text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            Lihat Menu Lengkap <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <MenuDialog 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </div>
    </section>
  );
};

export default FeaturedMenu;
