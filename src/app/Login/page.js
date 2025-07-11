'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [mobile, setMobile] = useState('');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* بخش تصویر (فقط در لنداسکیپ نمایش داده می‌شود) */}
      <div className="hidden md:block md:w-1/2 lg:w-3/5 relative">
        <div className="p-12 h-full flex flex-col justify-center text-black">
             {/* لوگو */}
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src="/img/logo.jpg" 
                    alt="Vision Logo" 
                    className="w-64 h-auto max-h-32 object-contain"
                  />
                </div>
          <div className="flex-none flex flex-col justfy-center item-center">
          <h2 className="text-3xl mb-6 text-center">ویزیتان</h2>
          <p className="text-lg mb-4 text-center">
            پلتفرمی قدرتمند برای اتصال مستقیم فرهنگ‌ها و تأمین‌کننده‌هاست.
          </p>
          <p className="text-lg text-center">
            با ابزارهای پیشرفته و هوشمند، سفارشات خود را مدیریت کنید. تحویل را بهینه کنید و کسب‌کارتان را رشد دهید.
          </p>
          </div>
        </div>
      </div>

      {/* بخش فرم ورود */}
      <div className="w-full md:w-1/2 lg:w-2/5 bg-white p-8 flex flex-col justify-center">
        <div className="mx-auto w-full max-w-md">
       

          {/* عنوان در حالت موبایل */}
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            ورود به حساب کاربری
          </h1>

          {/* فرم ورود */}
          <div className="space-y-6">
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                شماره موبایل
              </label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="09xxxxxxxxx"
              />
            </div>

            <button
              type="button"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              ورود
            </button>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>حساب ندارید؟ <a href="#" className="text-green-600 hover:underline">مهمان وارد شوید</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}