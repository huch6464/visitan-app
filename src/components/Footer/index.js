'use client'
import React, { useState } from 'react';
import { 
  Megaphone, 
  Grid3x3, 
  Timer, 
  MessageCircle, 
  BarChart3,
  User,
  ShoppingCart
} from 'lucide-react';

export default function Footer() {
  const [activeTab, setActiveTab] = useState('آگهی ها');

  const menuItems = [
    { 
      id: 1, 
      name: 'آگهی ها', 
      icon: Megaphone, 
      hasNotification: false,
      color: 'text-green-500'
    },
    { 
      id: 2, 
      name: 'ویترین', 
      icon: Grid3x3, 
      hasNotification: false,
      color: 'text-gray-400'
    },
    { 
      id: 3, 
      name: 'ویزیتان کلینیک', 
      icon: Timer, 
      hasNotification: false,
      color: 'text-gray-400'
    },
    { 
      id: 4, 
      name: 'چت', 
      icon: MessageCircle, 
      hasNotification: true,
      color: 'text-gray-400'
    },
    { 
      id: 5, 
      name: 'فاکتور ها', 
      icon: BarChart3, 
      hasNotification: true,
      color: 'text-gray-400'
    }
  ];

  return (
    <footer className="sticky bottom-0 z-20 mx-2 bg-green-500 overflow-hidden rounded-t-[50px]">

      <div className="bg-green-500 text-white px-4 py-3 -mt-1 ">
        <div className="flex items-center justify-between px-5">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-sm font-medium ms-2" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                سید خرید
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 space-x-reverse">
            <div className="text-right">
              <div className="text-xs opacity-90 me-4" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                ۳ فاکتور
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs opacity-90" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                تومان 125,000,000 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 rounded-t-[200px] ">
        <div className="flex justify-around items-center py-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.name)}
                className="flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 relative touch-manipulation"
              >
                <div className="relative mb-1">
                  <Icon 
                    className={`w-6 h-6 ${isActive ? 'text-green-500' : 'text-gray-400'}`}
                  />
                  {item.hasNotification && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                  )}
                </div>
                <span 
                  className={`text-xs font-medium ${isActive ? 'text-green-500' : 'text-gray-400'} truncate`}
                  style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

   

      <div className="bg-white h-2"></div>
    </footer>
  );
}