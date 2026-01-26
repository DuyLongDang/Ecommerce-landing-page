import React from 'react';

// DATA

// 1. Categories
const categories = [
  { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=400" },
  { name: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400" },
  { name: "All Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400" },
  { name: "Engagement Rings", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=400" },
];

// 2. Latest Jewelry
const latestJewelry = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500", // Woman necklace
  "https://images.unsplash.com/photo-1603975762024-817e089d81d5?auto=format&fit=crop&q=80&w=500", // Man chain
  "https://images.unsplash.com/photo-1543233604-3b84742a1976?auto=format&fit=crop&q=80&w=500", // Woman earrings
];

// 3. Reviews
const reviews = [
  { text: "Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.", author: "Nico Jones" },
  { text: "What an amazing shopping experience! I tried other jewelers and didn't find anything looking like this. Thank you so much.", author: "Tracy Willis" },
  { text: "Great quality, and showed they can work through a problem and maintain excellent customer service!!", author: "Susanne Turner" },
];

// 4. Services
const services = [
  { title: "JEWELRY REPAIR", image: "https://images.unsplash.com/photo-1596918894677-22d765870029?auto=format&fit=crop&q=80&w=400" },
  { title: "RING SIZING", image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=400" },
  { title: "JEWELRY POLISHING", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400" },
];

//  COMPONENT CHÍNH 

export default function App() {
  return (
    <div className="min-h-screen font-sans text-[#0F2644]"> {/* Màu chữ chính: Xanh đậm tối */}
      
      {/*HEADER */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold text-[#1e40af] font-serif tracking-wide uppercase">
            Bayside Fine Jewelry
          </div>
          <nav className="hidden md:flex space-x-8 items-center text-gray-700 font-medium text-sm">
            {['Home', 'Shop', 'Services', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-[#1e40af] transition-colors">{item}</a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#1e40af]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </button>
            <button className="md:hidden text-gray-700">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
        <div className="h-1.5 w-full bg-[#8b5cf6]"></div> 
      </header>

      {/*HERO SECTION*/}
      <section className="relative w-full h-[500px] md:h-[650px]">
        <img 
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" 
          alt="Hand wearing jewelry" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10"></div> 
      </section>

      {/*SHOP BY TYPE*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2644] uppercase mb-10">
            Shop By Jewelry Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="group cursor-pointer flex flex-col items-center">
                <div className="w-full aspect-square bg-[#f4f4f0] overflow-hidden mb-4 hover:shadow-md transition-all">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-300"/>
                </div>
                <h3 className="text-[#0F2644] font-semibold text-xs md:text-sm uppercase tracking-wider text-center">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*HAND CRAFTED (Blue Section)*/}
      <section className="flex flex-col md:flex-row bg-[#0F2644]">
        {/* Text Side */}
        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase leading-tight">
            Hand Crafted <br/> Fine Pieces.
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
            We also firmly believed that our customers deserved more choices, straightforward information and legendary service.
          </p>
          <button className="bg-white text-[#0F2644] px-6 py-3 font-bold text-sm uppercase tracking-wider w-fit hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
        {/* Image Side */}
        <div className="w-full md:w-1/2 h-80 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1590422749842-73138356c9a3?auto=format&fit=crop&q=80&w=1000" 
            alt="Jewelry crafting" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/*LATEST JEWELRY*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2644] uppercase mb-10">
            Our Latest Jewelry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {latestJewelry.map((img, idx) => (
              <div key={idx} className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img src={img} alt="Latest jewelry" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-[#0F2644] text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#1e40af] transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/*CUSTOMER REVIEWS*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2644] uppercase mb-10">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="p-6 border border-gray-100 shadow-sm bg-white flex flex-col">
                <span className="text-4xl text-[#0F2644] font-serif mb-4">“</span>
                <p className="text-gray-600 text-sm italic mb-6 flex-grow leading-relaxed">
                  {review.text}
                </p>
                <p className="text-[#0F2644] font-bold text-xs uppercase">
                  - {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*OUR SERVICES*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2644] uppercase mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-full aspect-square overflow-hidden mb-4">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <h3 className="text-[#0F2644] font-bold text-sm uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-[#0F2644] text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#1e40af] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/*FOOTER & STAY IN TOUCH*/}
      <div className="bg-[#BEE3F8] pt-16 pb-10"> {/* Nền xanh nhạt */}
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Card: Stay in Touch */}
          <div className="bg-white flex flex-col md:flex-row shadow-xl overflow-hidden mb-16 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800" alt="Ring" className="w-full h-full object-cover"/>
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center text-center">
              <h3 className="text-[#0F2644] text-xl font-bold uppercase mb-4">Stay in Touch?</h3>
              <p className="text-gray-500 text-xs mb-6">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
              <button className="bg-[#0F2644] text-white px-8 py-2 font-bold text-sm uppercase hover:bg-[#1e40af] transition-colors w-full md:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[#0F2644] text-xs">
            <div>
              <h4 className="font-bold mb-4 uppercase">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="flex items-start justify-start md:justify-end space-x-4">
               {/* Social Icons (SVG placeholder) */}
               <div className="w-6 h-6 bg-[#0F2644] rounded-full flex items-center justify-center text-white text-[10px]">f</div>
               <div className="w-6 h-6 bg-[#0F2644] rounded-full flex items-center justify-center text-white text-[10px]">in</div>
               <div className="w-6 h-6 bg-[#0F2644] rounded-full flex items-center justify-center text-white text-[10px]">t</div>
            </div>
          </div>
          
          <div className="mt-10 border-t border-gray-400/30 pt-4 text-center text-[10px] text-gray-500">
            © Bayside Fine Jewelry 2024
          </div>
        </div>
      </div>

    </div>
  );
}