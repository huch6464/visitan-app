
export default function Loading() {
  return (
<div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Logo */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/img/logo.jpg" 
          alt="Vision Logo" 
          className="w-64 h-auto max-h-32 object-contain"
        />
      </div>

      {/* Content - Bottom of screen */}
      <div className="pb-6 px-4 text-center">
        {/* Title in Persian */}
        <h1 className="text-3xl  text-green-600 mb-4" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
          ویزیتان
        </h1>

        {/* Subtitle in Persian */}
        <p className="text-gray-600 text-base leading-relaxed mb-8" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
          بازاری هوشمند، راهی هوشمندانه برای موفقیت کسب‌وکار شما
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
        </div>
      </div>
    </div>
  )

}
