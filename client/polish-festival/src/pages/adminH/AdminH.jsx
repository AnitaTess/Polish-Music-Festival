import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Ulist from "../../components/Ulist/Ulist";
import useFetch from "../../hooks/useFetch";
import "./adminH.css";


const AdminH = () =>{
    const { data, loading, error} = useFetch("/users");
    return(
        <div>
            <Navbar />
            <div className="list">
            <div className="listContainer">
                
                    <div className="listResult">
                    {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <Ulist item={item} key={item._id}/>
                ))}
              </>
            )}    
                    </div>
            </div>
        </div>
            <Footer />
        </div>
    )
}
export default AdminH