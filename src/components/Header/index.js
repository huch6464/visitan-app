import React from 'react';
import Menu1 from './Menu1';
import { Search, Mic } from 'lucide-react';

export default function Header() {
  // نمونه داده‌ها
  const categories = [
    { id: 1, name: 'خرید', active: false },
    { id: 2, name: 'پرسود ترین', active: false },
    { id: 3, name: 'پرتخفیف ها', active: false },
    { id: 4, name: 'دسته بندی', active: false },
    { id: 5, name: 'فیلتر', active: true },
    { id: 6, name: 'محصولات', active: false },
    { id: 7, name: 'برندها', active: false },
  ];



  return (
<>
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      {/* سرچ */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 ">
        <div className="flex flex-row-reverse items-center justify-between">
          {/*لگو */}
          <div className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
            ویزیتان
          </div>

          {/* اینپوت سرچ */}
          <div className="flex-1 mx-4 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pr-10 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Mic className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* دکمه منو */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Menu1 categories={categories} />
          </button>
        </div>
      </div>

      {/* دسته بندیها */}
      <div className="bg-white py-3 border-b border-gray-100">
        <div className="flex md:justify-between space-x-2 space-x-reverse overflow-x-auto scrollbar-hide px-4 touch-pan-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap touch-manipulation ${
                category.active
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 active:bg-gray-200'
              }`}
              style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
</header>

    </>
  );
}

