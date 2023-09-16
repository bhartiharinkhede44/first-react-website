import "./ProductCard.css"
export default function OrderCard({Coffieimg,Vegimg,NameOfCoffie,Calaries,AboutCoffie,Price}) {
    return (
        <div className="maincontainer ">

            <div className="conatainer ">
                <img src={Coffieimg} className="image"></img>

                <div className="containcontainer">
                    <img src={Vegimg} className="vegimg"></img>
                    <h3 className="highlight">{NameOfCoffie}</h3>
                    <p className="calaries"> {Calaries}</p>
                    <p className="about">{AboutCoffie}</p>
                </div>
            </div>
            <div className=" lastcontainer">
                <h3 className="price">{Price}</h3>
               <button type="button" className="itembtn">Add Item </button>

            </div>
        </div>
    )
}