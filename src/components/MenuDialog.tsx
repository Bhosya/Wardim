
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MenuItem from './MenuItem';

type MenuDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const allMenuItems = [
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
  },
  {
    name: "Cap Cay Seafood",
    chinese: "杂菜",
    pinyin: "Zácài",
    description: "Tumis aneka sayuran segar dengan udang, cumi, dan seafood pilihan.",
    price: "Rp 75.000",
    image: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const MenuDialog = ({ isOpen, onClose }: MenuDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] w-full max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Menu Lengkap
            <span className="block text-wardim-gold text-lg">完整菜单 (Wánzhěng càidān)</span>
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {allMenuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuDialog;
