import {useState} from 'react'
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        username: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async (e) => {
        e.preventDefault();
        const { username, email, password, reEnterPassword } = user
        try {
        if( username && email && password && (password === reEnterPassword)){
            await axios.post("/auth/register", user)
            .then( res => {
                alert("You Registered In Successfuly")
                navigate('/login')
            })
        } else {
            alert("invlid input")
        }}catch(err){

        }
        
    }

    return (
        <div className="register">
            <div className="regContainer">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="username" value={user.username} placeholder="Your username" onChange={ handleChange } required></input>
            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } required></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } required></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange } required></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/login')}>Login</div>
            </div>
        </div>
    )
}

export default Register
