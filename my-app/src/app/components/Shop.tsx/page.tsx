"use client"
import Image from "next/image"

const Shop = () => {
     return (
         <div id="Shop">
          <div >   
         <Image 
         src="/images/Shop1.png"
         alt="shop image"  
      className="w-full h-full"
      width={1440}
      height={700}
         ></Image>
         
         <div className="max-w-full  mx-auto py-[38px] flex bg-[#FAF3EA] lg:items-center lg:justify-center lg:font-medium">
            <Image  src="/images/Sicon6.png" alt="icon" width={100} height={100} ></Image>
            <p className="text-[#000000] sm:pl-2">Filter</p>
            <Image  src="/images/Sicon5.png" alt="icon"   className="sm:pl-2 "></Image>
            <Image  src="/images/Sicon4.png"  alt="icon" width={100} height={100} className="sm:pl-2 "></Image>
           
            <div className='sm:w-[1px] sm:h-[1px] bg-[#9F9F9F] '></div>
            <p className='border-l border-[#9F9F9F] pl-[34px] hover:underline cursor-pointer'>Showing 1-16 of 32 results</p>
            <p className="sm:pl-2 lg:pl-20 lg:text-xl ">Short by</p>
            <div className="sm:w-8 sm:pl-2 bg-white lg:ml-4 lg:text-xl lg:px-15 lg:w-24 lg:pl-2 lg:py-[20px]">Default</div>
            
                    </div>
         
 </div>
 </div>
 )
 }
 export default Shop



               

