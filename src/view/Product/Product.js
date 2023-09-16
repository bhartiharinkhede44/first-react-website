
import Navbar from "../../component/Navbar/Navbar";
import "./Product.css"
import ProductCard from "../../component/ProductCard/ProductCard"
import Vegimg from './veg.png'
import Coffieimg from '../About/cofy.webp';
import Coffieimg1 from '../Product/coffie1.jpg'
import Coffieimg2 from '../Product/coffie2.jpg'
import Coffieimg3 from '../Product/coffie3.jpg'
import Footer from "../../component/Footer/Footer"



 
export default function Product() {
    return (
        <>

            <Navbar />
            <div className="mainconatiner">
                <ProductCard Coffieimg={Coffieimg} Vegimg={Vegimg} NameOfCoffie=
                'Java Chip Frappuccino' Calaries='TALL(354 ML) .392 kcal' AboutCoffie='We blend mocha sauce and Frappuccino® chips with Frappuccino...' Price='₹ 367.50' />
            <ProductCard Coffieimg={Coffieimg1} Vegimg={Vegimg} NameOfCoffie=
                'Caffe Americano' Calaries='SHORT(237 Ml) .0 kcal' AboutCoffie='Rich in flavour, full-bodied espresso with hot water in true... ' Price='₹ 262.50' />
            <ProductCard Coffieimg={Coffieimg2} Vegimg={Vegimg} NameOfCoffie=
                'Cold coffee' Calaries='TALL(354 ML) .354 kcal' AboutCoffie='Our signature rich in flavour espresso blended with delicate... ' Price='₹ 362.25' /></div>
                <div className="mainconatiner">
             <ProductCard Coffieimg={Coffieimg3} Vegimg={Vegimg} NameOfCoffie=
                'Double Chocolate Chip Frappuccino' Calaries='TALL(354 ML) .415 kcal' AboutCoffie='Rich mocha-flavored sauce meets up with chocolaty chips, mil... ' Price='₹  399.00' />
              <ProductCard Coffieimg={Coffieimg} Vegimg={Vegimg} NameOfCoffie=
                'Cappuccino' Calaries='Dark, Rich in flavour espresso lies in wait under a smoothed... ' Price=' 283.50' />
                <ProductCard Coffieimg={Coffieimg} Vegimg={Vegimg} NameOfCoffie=
                'Java Chip Frappuccino' Calaries='TALL(354 ML) .392 kcal' AboutCoffie='We blend mocha sauce and Frappuccino® chips with Frappuccino...' Price='₹ 367.50' />
     
            </div>
            <Footer/>
            
        </>

    )
}