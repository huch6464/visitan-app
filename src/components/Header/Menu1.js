// components/header/MobileMenu.js
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Menu1({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, name: 'حساب کاربری' },
    { id: 2, name: 'اطلاعات فروشگاه' },
    { id: 3, name: 'درخواست ها' },
    { id: 4, name: 'نظرات و پیشنهادات' },
    { id: 5, name: 'راهنمای استفاده از سامانه' },
    { id: 6, name: 'سوالات متداول' },
    { id: 7, name: 'قوانین و مقررات' },
    { id: 8, name: 'درباره ویریتان' },
    { id: 9, name: 'اشتراک گذاری برنامه' },
    { id: 10, name: 'ارتباط با ما' },
    { id: 11, name: 'پشتیبانی و تیکت ها' },
    { id: 12, name: 'امتیاز تامین کنندگان به شما' },
    { id: 13, name: 'تنظیمات' },
    { id: 14, name: 'خروج از حساب کاربری' },
  ];

  return (
    <>
      <button 
        className="p-2 rounded-full hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 " onClick={() => setIsOpen(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col "
            onClick={(e) => e.stopPropagation()}
          >
            {/* محتوای منو */}
            <div className="p-4 border-b flex-none ">
              <div className="text-lg font-bold">سوبرماریک طاها</div>
              <div className="text-sm text-gray-500">طاها مرادی فر اصل</div>
            </div>
            <div className="flex-1 overflow-y-auto">
            <nav className="p-2 ">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="block px-4 py-3 text-sm hover:bg-gray-100 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            </div>
                {/* فوتر منو (ثابت) */}
            <div className="p-4 border-t flex-none text-center text-xs text-gray-500">
              Version 1.0.0
            </div>
          </div>
        </div>
      )}
    </>
  );
}