import Link from 'next/link'
import { UserIcon, SearchIcon, HeartIcon, ShoppingBagIcon } from  '@heroicons/react/outline'
import React from "react"
import Image from 'next/image'


const Navbar = () => {
    return(
        <header className="text-gray-600 body-font bg-[#FFFFFF]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <div className="w-[50px] h-[32px]">
          <Image src={"/images/Logo1.png"} alt="Logo" width={100} height={100} className="w-24 h-auto" ></Image>
</div>

            <span className="ml-3 text-3xl font-['Montserrat'] font-bold leading-[41.45px] size-[34px] text-[#000000] w-[130px] h-[41px]">Furniro</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center   text-base justify-center w-[430px] h-[24px]  text-[#000000]">
            <Link  href= {"/"} className="mr-5   text-[#000000] w-[48px] h-[24px] font-medium leading-6 size-[16px] font-['Poppins']">Home</Link>
            <Link  href={"#Shop"} className="mr-5 text-[#000000] w-[42px] h-[24px] font-['Poppins'] font-medium size-[16px] leading-6">Shop</Link>
            <Link   href={"#Blog"} className="mr-5 text-[#000000] w-[36px] h-[24px] font-['Poppins'] font-medium leading-6 size-[16px]">Blog</Link>
            <Link href={"#Contact"}  className="mr-5 text-[#000000] w-[66px] h-[24px] font-['Poppins'] leading-6 font-medium size-[16px]">Contact</Link>
          </nav>
          

          <div className="flex space-x-4 ">
         
          <a href="#" className="text-[#000000]">
          <UserIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#000000]">
            <SearchIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#000000]">
            <HeartIcon className="w-6 h-6" />
          </a>
          <Link href="/components/ShoppingCart" className="text-[#000000]">
            <ShoppingBagIcon className="w-6 h-6" />
          </Link>
</div>

        </div>
      </header>
      


    )
}
export default Navbar