'use client';

import { useState } from 'react';
import { sendOtp, confirmOtp } from '../../../lib/api';

export default function LoginPage() {
  const [mobile, setMobile] = useState('');
  const [step, setStep] = useState('mobile');
  const [token, setToken] = useState(''); 
  const [code, setcode] = useState(['', '', '', '', '']);
  const [mobile1] = useState('0915***2738');
  const [mobileError, setMobileError] = useState("");


  //  اعتبارسنجی شماره موبایل ایران
  function validateIranianMobile(number) {
    //  با 09 شروع شود و 11 رقم باشد
    return /^09\d{9}$/.test(number);
  }

  
  const handleSendOtp = async () => {
    setMobileError("");
    if (!validateIranianMobile(mobile)) {
      setMobileError("شماره موبایل معتبر وارد کنید (مثال: 09123456789)");
      return;
    }
    const res = await sendOtp(mobile);
    if (res.message?.includes('ارسال')) {
      setStep('otp');
    } else {
      alert('خطا در ارسال کد');
    }
  };

    const handleVerify = async () => {
      const otpCode = code.join(''); 
        if (otpCode.length !== 5) {
    alert('لطفا کد ۵ رقمی را کامل وارد کنید');
    return;
  }
    const res = await confirmOtp(mobile, otpCode, "dsafrtw", "customer");
    if (res.object?.token) {
      setToken(res.object.token);
      // ذخیره توکن در کوکی (به مدت 7 روز)
      document.cookie = `token=${res.object.token}; path=/; max-age=${7 * 24 * 60 * 60}`;
      // ریدایرکت به صفحه اصلی با تاخیر کوتاه تا کوکی ست شود
      setTimeout(() => {
        window.location.replace("/");
      }, 200);
    } else {
      alert('کد اشتباه است');
    }
  };

    const handleChange = (value, index) => {

    if (value && !/^\d+$/.test(value)) return;

    const updated = [...code];
    updated[index] = value.slice(-1); 
    setcode(updated);

      if (value && index < 4) {
     const next = document.getElementById(`code-${index + 1}`);
    if (next) next.focus();
  }
      if (!value && index > 0) {
    const prev = document.getElementById(`code-${index - 1}`);
    if (prev) prev.focus();
  }
  }

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
          <div className="flex-none flex flex-col justify-center item-center">
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

      {/*  فرم ورود */}

      {step === 'mobile' ? (
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${mobileError ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="09xxxxxxxxx"
              />
              {mobileError && (
                <div className="text-red-600 text-sm mt-1">{mobileError}</div>
              )}
            </div>

            <button
              type="button"
              onClick={handleSendOtp}
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
      ):

      step === 'otp' && (
            <div className="w-full md:w-1/2 lg:w-2/5 bg-white p-8 flex flex-col justify-center">
              <div className="mx-auto w-full max-w-md">
      {/* عنوان و توضیح */}
      <h1 className="text-lg font-semibold text-center mb-1">احراز هویت با کد تایید پیامکی</h1>
      <p className="text-sm text-gray-500 text-center mb-2">
        کد تایید ۵ رقمی به شماره شما ارسال شد. <br />
        لطفا آن را وارد کنید.
      </p>

      {/* شماره موبایل */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-sm text-gray-600">{mobile1}</span>
        <button className="text-green-600 text-sm underline">ویرایش</button>
      </div>

      {/* ورودی کد تایید */}
      <div className="flex gap-2 justify-center mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="tel"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => {
           if (e.key === 'Backspace' && !digit && index > 0) {
           const prev = document.getElementById(`code-${index - 1}`);
           if (prev) prev.focus();
           }
          }}
           autoFocus={index === 0}
           className="w-12 h-12 text-center text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
      </div>

      {/* تایمر */}
      <p className="text-green-600 text-sm mb-4">۱:۳۰</p>

      {/* دکمه ورود */}
      <button 
      onClick={handleVerify}
      className="w-full bg-green-600 text-white py-3 rounded-full text-center text-base">
        ورود

      </button>
    </div>
    </div>
     ) }
    </div>
  );
}