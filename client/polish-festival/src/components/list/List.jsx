import moment from "moment/moment";
import { Link } from "react-router-dom";
import "./list.css";

const List = ({item}) =>{

    return(
        <div className="result">
                    <div className="Item">
            <img className="showImg" src={item.photos} alt="show"/>
            <div className="showArtist">{item.artist}</div>
            <div className="dateTime">{moment(item.date).format('DD-MM-YYYY')} {item.times}</div>
            <Link to={`/shows/${item._id}`}>
            <button className="book">Show Details</button>
            </Link>
            </div>
            </div>

)}
export default List