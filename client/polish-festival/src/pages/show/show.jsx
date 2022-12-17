import moment from "moment";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Book from "../../components/book/Book";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import "./show.css";

const Show = () =>{

    const [openModal, setOpenModal] = useState(false);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
  
  const handleClick = () => {
      if (user) {
        setOpenModal(true);
      } else {
        navigate("/login");
      }
    };

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const { data, loading, error} = useFetch(`/shows/${id}`);
    return(
        <div className="show">
            <Navbar />
            <div className="theshow">
            {loading ? (
              "loading"
            ) : (
                    <div className="showContainer">
            <img className="showImage" src={data.photos} alt="show"/>
            <div className="Artist"><h1>{data.artist}</h1></div>
            <div className="Genre"><h2>{data.genre}</h2></div>
            <div className="DateTime"><h2>{moment(data.date).format('DD-MM-YYYY')} {data.times}</h2></div>
            <div className="Cheapest"><h2>Cheapest price for a ticket available: £{data.cheapestPrice}</h2></div>
            <div className="Description"><h3>{data.desc}</h3></div>
            <button onClick={handleClick} className="bookTicket">Get Tickets</button>
            </div>
            )}
            </div>
            <div className="tickets">
          {openModal && <Book setOpen={setOpenModal} showId={id}/>}
          </div>
            <Footer />
        </div>
    )
}
export default Show