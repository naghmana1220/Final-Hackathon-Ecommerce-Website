 import Image from "next/image";
 
 export default function Setup() {
     const images = [
        "/images/Set1.png",
     "/images/Set2.png", 
     "/images/Set3.png",
     "/images/Set4.png",
     "/images/Set5.png",
     "/images/Set6.png",
     "/images/Set7.png",
     "/images/Set8.png",
     "/images/Set9.png",
   ];
  
   return (
     <section className="py-10 bg-gray-100">
       <div className="container mx-auto px-4">
       <p className=" font-bold text-center text-[#616161] ">Share your setup with</p>
         <h2 className="text-4xl font-bold text-center text-[#3A3A3A] mb-8 pt-4">#FuniroFurniture</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     
           {images.map((src, index) => (
             <div key={index} className=" overflow-hidden sm:w-full sm:h-auto  bg-white">
               <Image
                 src={src}
                 alt={`Image ${index + 1}`}
                 width={451}
                 height={312}
                 className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
               />
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }


 


 