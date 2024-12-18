import React from "react"
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
    const items = [
          { id: 1, imgSrc: "/images/Cart1.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000"  },
          { id: 2, imgSrc: "/images/Cart2.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
          { id: 3, imgSrc: "/images/Cart3.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
          { id: 4, imgSrc: "/images/Cart4.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },   
          { id: 5, imgSrc: "/images/Cart5.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
          { id: 6, imgSrc: "/images/Cart6.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
          { id: 7, imgSrc: "/images/Cart7.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
          { id: 8, imgSrc: "/images/Cart8.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
          { id: 9, imgSrc: "/images/Cart9.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },   
          { id: 10, imgSrc: "/images/Cart10.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
          { id: 11, imgSrc: "/images/Cart11.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
          { id: 12, imgSrc: "/images/Cart12.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
          { id: 13, imgSrc: "/images/Cart13.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },   
          { id: 14, imgSrc: "/images/Cart14.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
          { id: 15, imgSrc: "/images/Cart15.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
          { id: 16, imgSrc: "/images/Cart16.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
        
    ];

    return (
      <div id="Shop">
       <div className="container w-[440px]  sm:w-full p-4  lg:pl-56">
           <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      
         
             {items.map((item) => (
              <div key={item.id} className="bg-white border  shadow hover:shadow-cyan-400 p-4 ">
                <Link href="/Description">
                <Image src={item.imgSrc} alt={item.title}  width={285} height={301} className="w-full md:w-auto md:max-h-screen sm:justify-center sm:items-center mb-4" />
                </Link>
                <h3 className="text-lg font-semibold text-[#3A3A3A]">{item.title}</h3>
                <p className="text-[#898989]">{item.description}</p>
                <p className="text-xl font-bold text-[#3A3A3A] 600 mt-2">{item.price}</p>
              </div>
            ))}

          </div> 





          <div className="flex flex-wrap gap-[38px] justify-center mt-[117px] ">
            <button className="bg-[#B88E2E]  text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">1</button>
            <button className="bg-[#F9F1E7]  text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">2</button>
            <button className="bg-[#F9F1E7]  text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">3</button>
            <button className="bg-[#F9F1E7]  text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">Next</button>
        </div>
</div>
        
</div>


      );
    };
    
    export default Cart;