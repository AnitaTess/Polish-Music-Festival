
import List from "../list/List";
import useFetch from "../../hooks/useFetch";
import "./Swidget.css";
import SList from "../SList/SList";


const Swidget = () =>{
    const { data, loading, error} = useFetch("/shows");
    return(
        <div>
            <div className="list">
              
            <div className="listContainer">

            
                
                    <div className="listResult">
                    <table className="tablea">
            <tr className="rowa">
    <th>All Shows List:</th>
  </tr>
  <tr>
                    {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SList item={item} key={item._id}/>
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
export default Swidget