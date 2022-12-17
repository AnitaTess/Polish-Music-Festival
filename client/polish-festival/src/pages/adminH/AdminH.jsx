import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Ulist from "../../components/Ulist/Ulist";
import useFetch from "../../hooks/useFetch";
import Swidget from "../../components/Swidget/Swidget";
import Uwidget from "../../components/Uwidget/Uwidget";
import "./adminH.css";


const AdminH = () =>{
    const navigate = useNavigate()
    
    return(
        <div>
            <Navbar />
            <Uwidget />
            <div className="cont">
            <div className="buttonNew" onClick={() => navigate('/newshow')}>Add New Show</div>
            </div>
            <Swidget />
            <Footer />
            
        </div>
    )
}
export default AdminH