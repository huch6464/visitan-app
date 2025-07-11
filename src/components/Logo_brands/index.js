export default function Logo_brands() {
       const brands = [
        { id: 1, name: 'شیبابا', logo: '/img/brands/shibaba.png', rating: 2.5 },
        { id: 2, name: 'پخش برنده', logo: '/img/brands/pakhsh.png', rating: 4.2 },
        { id: 3, name: 'تُن مزرعه', logo: '/img/brands/ton.png', rating: 4.8 },
        { id: 4, name: 'دنا', logo: '/img/brands/dena.png', rating: 1.6 },
        { id: 5, name: 'تلولوک', logo: '/img/brands/telolook.png', rating: 4.3 },
        { id: 6, name: 'برند نمونه', logo: '/img/brands/sample.png', rating: 3.7 },
      ];
    return(
         <section>
      {/* Brands Section */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="flex md:justify-between space-x-4 space-x-reverse overflow-x-auto scrollbar-hide px-4 touch-pan-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {brands.map((brand) => (
            <div key={brand.id} className="flex-shrink-0 text-center touch-manipulation">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 relative active:bg-gray-200 transition-colors">
                  {/* Brand Logo Placeholder */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xs text-gray-500">Logo</span>
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -top-0 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(brand.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Brand Name */}
                <span className="text-xs text-gray-700 font-medium whitespace-nowrap" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-white px-4 py-4">
        <div className="relative bg-gradient-to-r from-yellow-400 to-green-400 rounded-2xl overflow-hidden">
          <div className="p-6 flex items-center justify-between">
            <div className="flex-1">
              <div className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                پیشنهاد ویژه
              </div>
              <h3 className="text-white text-lg font-bold mb-1" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                فروش ویژه محصولات
              </h3>
              <p className="text-white text-sm font-medium" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                جزئی و عمده!!
              </p>
              <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium mt-2 inline-block">
                فقط امروز
              </div>
            </div>
            <div className="flex-shrink-0">
              {/* Product Image Placeholder */}
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-500">محصول</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
    )
};
