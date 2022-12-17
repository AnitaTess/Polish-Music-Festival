import axios from "axios";
import moment from "moment/moment";
import "./Slist.css";

const SList = ({item}) =>{

    const deleteShow = async (id) => {
        try {
          await axios.delete(`/shows/${id}`)
          window.location.reload();
        } catch (err) {}
      };
    
    

    return(
        <div className="result">
                    <div className="Item">
            <img className="showImg" src={item.photos} alt="show"/>
            <div className="showArtist">{item.artist}</div>
            <div className="showGenre">{item.genre}</div>
            <div className="dateTime">{moment(item.date).format('DD-MM-YYYY')} {item.times}</div>
            <div className="showdesc">{item.desc}</div>
            <div className="showprice">{item.cheapestPrice}</div>
            
            <button onClick={() => deleteShow(item._id)} className="book">Delete</button>
            
            </div>
            </div>

)}
export default SList