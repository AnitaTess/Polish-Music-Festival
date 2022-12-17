import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import "./home.css";
import List from "../../components/list/List";



const Home = () =>{
    const { data, loading, error} = useFetch("/shows");
    return(
        <div>
            <Navbar />
            <Header />
            <div className="list">
            <div className="listContainer">
                    <div className="listResult">
                    {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <List item={item} key={item._id}/>
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
export default Home