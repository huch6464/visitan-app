import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Logo_brands from '../components/Logo_brands';

export default function Homepage() {
 
  return(
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <Header/>
      </div>
      <div className="flex-1 overflow-y-auto touch-pan-y"style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
       <Logo_brands/>
        <Products/>
      </div>
      <div className="flex-none">
       <Footer/>
      </div>
    </div>
  )
};
