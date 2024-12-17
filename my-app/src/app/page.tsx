import Hero from "./components/Hero.tsx/page";
import Range from "./components/Range.tsx/page";
import Product from "./components/Product.tsx/page";
import Explore from "./components/Explore.tsx/page";
import Setup from "./components/Setup.tsx/page"
import Comparison from "./components/Comparison.tsx/page";
import Shop from "./components/Shop.tsx/page";
import Cart from "./components/Cart.tsx/page";
import Contact from "./components/Contact.tsx/page";
import Blog from "./components/Blog.tsx/page";
import Cartmain from "./components/Cartmain.tsx/page";
import Description from "./components/Description";
import Checkout from "./components/Checkout.tsx/page";



export default  function Home () {
  return(
<div>
   <Hero />
  <Range />
  <Product />
  <Explore />
  <Setup />  
  <Shop /> 
  <Cart />  
  <Description /> 
  <Cartmain /> 
   <Comparison />   
   <Checkout /> 
   <Blog />  
    <Contact />   
  
   
</div>

  )
}