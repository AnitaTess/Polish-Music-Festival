import "./Ulist.css";


const Ulist = ({item}) =>{ 

    let admin = ""

    if(item.isAdmin === true){
    admin = "admin"
    }
    else{
        admin = "user"
    }


    return(
        <div className="results">

<tr className="rowa">
    <td>{admin}:</td>
    <td>{item.username},</td>
    <td>{item.email}</td>
    
  </tr>

            </div>

)}
export default Ulist