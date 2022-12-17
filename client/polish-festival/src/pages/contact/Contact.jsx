import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Subscribe from "../../components/Subscribe/Subscribe";
import "./contact.css";

const Contact = () =>{
    return(
        <div>
            <Navbar />
            <Subscribe />
            <div className="info">
                <div className="infoItem">
                <h1>&#9743; CALL US</h1>
                <h2>Polish Line: +48 666555321</h2>
                <h2>English Line: +44 7866543212</h2>
                </div>
                <div className="infoItem">
                <h1>&#9993; EMAIL US</h1>
                <h2>Polish Email: polishmusicfestival.glasgow@op.pl</h2>
                <h2>English Email: polishmusicfestival.glasgow@gmail.co</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact