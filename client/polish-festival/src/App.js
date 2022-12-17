import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import About from "./pages/about/About";
import AdminH from "./pages/adminH/AdminH";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Searched from "./pages/searched/Searched";
import Show from "./pages/show/show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/admin" element= {<AdminH/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/about" element= {<About/>}/>
         {/* <Route path="/shows" element= {<Searched/>}/> */}
        <Route path="/shows/:id" element= {<Show/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
