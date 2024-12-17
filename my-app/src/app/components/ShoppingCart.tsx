import Link from "next/link"
import Image from "next/image"

const ShoppingCart = () => {
  return (
    <div id="ShoppingBagIcon">
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg flex-1 h-[746px]">
  
<div className="flex justify-between mb-3">
<h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
<Image src="/images/Shopping1.png" alt="image"  width={100} height={100}  className="text-2xl font-semibold mb-4 w-4 h-6"></Image>
</div>
<hr />
<div className="flex justify-between mb-4 mt-4">
  <Image src="/images/Shopping4.png"  alt="image"  width={100} height={100} className="font-medium text-[#9F9F9F]" ></Image>
  <span className="font-medium mt-2">Asgaard Sofa
    <p className="text-[#B88E2E] mt-2">1 * Rs. 250.000.00</p>
  </span>
  <Image src="/images/Shopping2.png" alt="image"  width={100} height={100} className="font-medium mb-4 w-4 h-6"></Image>
</div>
<div className="flex justify-between mb-4">
  <Image src="/images/Shopping5.png"  alt="image"  width={100} height={100}  className="font-medium text-[#9F9F9F]" ></Image>
  <span className="font-medium mt-2">Casaliving Wood
    <p className="text-[#B88E2E] mt-2">1 *  Rs. 270.000.00</p>
  </span>
  <Image src="/images/Shopping3.png"  alt="image"  width={100} height={100}  className="mb-4 w-4 h-6 mt-4" ></Image>
</div>
<div className="flex justify-between mb-6">
  <span className="font-medium mt-20">Subtotal</span>
  <span className=" text-xl text-[#B88E2F] font-semibold mt-20">Rs. 520,000.00</span>
</div>
<hr />
<div className="flex justify-evenly mb-4">
  <Link href="/Cartmain">
   <button className="rounded-full mt-3 border-black border-[1px] w-[87px] h-[30px]">cart</button>
   </Link>
   <Link href="/Checkout">
   <button className="rounded-full mt-3 border-black border-[1px] w-[118px] h-[30px]">checkout</button>
   </Link>
   <Link href="/Comparison">
   <button className="rounded-full mt-3 border-black border-[1px] w-[135px] h-[30px]">comparison</button>
   </Link>
</div>
</div>
</div>


  )
}
export default ShoppingCart
