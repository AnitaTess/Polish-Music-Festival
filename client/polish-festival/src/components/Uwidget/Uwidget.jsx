import Footer from "../footer/Footer";
import Header from "../header/Header";
import List from "../list/List";
import Navbar from "../navbar/Navbar";
import Ulist from "../Ulist/Ulist";
import useFetch from "../../hooks/useFetch";
import "./Uwidget.css";


const Uwidget = () =>{
    const { data, loading, error} = useFetch("/users");
    return(
        <div>
            <div className="list">
              
            <div className="listContainer">

            
                
                    <div className="listResult">
                    <table className="tablea">
            <tr className="rowa">
    <th>All Users List:</th>
  </tr>
  <tr>
                    {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <Ulist item={item} key={item._id}/>
                ))}
              </>
            )}  
            </tr>  
            </table>
                    </div>
            </div>
        </div>
            
        </div>
    )
}
export default Uwidget