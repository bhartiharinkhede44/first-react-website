import "./About.css"
import Navbar from "../../component/Navbar/Navbar";
import Image from "../About/WhatsApp_Image_2023-08-09_at_10.53.58-removebg-preview.png"
import Footer from "../../component/Footer/Footer";
export default function About() {
    return (
        <>

            <Navbar />
            <div className="container">
                

                <div className="card">

                    <img src={Image} className="image"></img>
                    <h1>Bharti harinkhede,</h1>
                    <p>I Am frontend webdevloper. </p>
                    <p>In This Project I have create the Coffie Website, </p>
                    <p>By using this we have order the coffie. </p>
                    <p>I developed this for learning the react...</p>

                  


                </div>


            </div>
         <Footer/>
     
        </>

    )
}