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
                    <div className="Itemm">
                    <table id="table">
                    <tr>
    <th>User Type:</th>
    <th>Username:</th>
    <th>Email:</th>
  </tr>
  <tr>
    <td>{admin}</td>
    <td>{item.username}</td>
    <td>{item.email}</td>
  </tr>
  </table>
            </div>
            </div>

)}
export default Ulist