
import React from 'react';

type MenuItemProps = {
  name: string;
  chinese: string;
  pinyin: string;
  description: string;
  price: string;
  image: string;
};

const MenuItem = ({ name, chinese, pinyin, description, price, image }: MenuItemProps) => {
  const handleAddToOrder = () => {
    // For now, just show an alert with the item name
    alert(`${name} ditambahkan ke pesanan Anda!`);
    // In a real app, you would use state management to add the item to a cart
  };

  return (
    <div className="relative group h-full flex flex-col">
      <div className="overflow-hidden rounded-lg shadow-md transition-all duration-500 group-hover:shadow-xl flex flex-col h-full">
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-medium font-serif">{name}</h3>
            <p className="text-wardim-gold">{chinese} <span className="opacity-80">({pinyin})</span></p>
          </div>
        </div>
        <div className="p-4 bg-white flex flex-col flex-grow justify-between">
          <p className="text-gray-600 text-sm mb-3 flex-grow">{description}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-wardim-red font-bold">{price}</span>
            <button 
              className="text-sm font-medium text-wardim-gold hover:text-wardim-red transition-colors"
              onClick={handleAddToOrder}
            >
              Tambah ke Pesanan +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
