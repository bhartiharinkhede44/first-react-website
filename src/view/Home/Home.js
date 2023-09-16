import Navbar from "../../component/Navbar/Navbar";
import "./Home.css";
import Imghome from "../Product/coffie5.jpg"
import Footer from "../../component/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="home">

                <div>
                    <h1 className="heading">Rich in flavour, full-bodied espresso with hot water in true..</h1>
                </div>
                <div >
                    <img src={Imghome}className="imghome" />

                </div>



            </div>
            <Footer/>
        </>
    )
}