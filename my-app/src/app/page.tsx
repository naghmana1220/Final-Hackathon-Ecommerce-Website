import Navbar from "./components/Navbar.tsx/page";
import Hero from "./components/Hero.tsx/page";
import Range from "./components/Range.tsx/page";
import Product from "./components/Product.tsx/page";
import Explore from "./components/Explore.tsx/page";
import Setup from "./components/Setup.tsx/page"
import Footer from "./components/Footer.tsx/page";
import Shop from "./components/Shop.tsx/page";
import Cart from "./components/Cart.tsx/page";
import Contact from "./components/Contact.tsx/page";

export default  function Home() {
  return(
<div>
  <Navbar />
  <Hero />
  <Range />
  <Product />
  <Explore />
  <Setup />  
  <Shop />
  <Cart /> 
  <Contact />
  <Footer /> 
</div>

  )
}