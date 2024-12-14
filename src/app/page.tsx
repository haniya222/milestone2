import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import About from "../components/About"
import FoodCata from "../components/FoodCata" 
import AboutUs from "../AboutUs/Page";
// import About from "../About/page"
import Faq from "../Faq/Page"
export default function Home() {
  return (
   
   <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <FoodCata/>
   <AboutUs/>
    <Footer/>
   </>
  );
}