export default function Products() {
    return(
        <div className="grid grid-cols-1 gap-2  sm:grid-cols-2">
            {/* به جای کارت محصولات برای شبیه سازی فعلا از تصویر استفاده کردم */}
              <img 
                 src="/img/product1.jpg" 
                 alt="product" 
                 className="w-full h-72 aspect-square object-contain"
              />
                  <img 
                 src="/img/product2.jpg" 
                 alt="product" 
                 className="w-full h-60 aspect-square object-contain"
              />
                  <img 
                 src="/img/product3.jpg" 
                 alt="product" 
                 className="w-full h-72 aspect-square object-contain"
              />
              <img 
                 src="/img/product1.jpg" 
                 alt="product" 
                 className="w-full h-72 aspect-square object-contain"
              />
                  <img 
                 src="/img/product2.jpg" 
                 alt="product" 
                 className="w-full h-60 aspect-square object-contain"
              />
                  <img 
                 src="/img/product3.jpg" 
                 alt="product" 
                 className="w-full h-72 aspect-square object-contain"
              />
         </div>
    )
};
