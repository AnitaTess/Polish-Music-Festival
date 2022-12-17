import {useState} from 'react'
import "./NewShow.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NewShow = () => {

    const navigate = useNavigate()

    const [ show, setShow] = useState({
        artist: "",
        genre:"",
        times:"",
        photos: "",
        desc: "",
        cheapestPrice: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setShow({
            ...show,
            [name]: value
        })
    }

    const createShow = async (e) => {
        e.preventDefault();
        const { artist, genre, times, photos, desc, cheapestPrice } = show
        try {
        if( artist && genre && times && photos && desc && cheapestPrice){
            await axios.post("/shows", show)
            .then( res => {
                alert("Success")
                navigate('/admin')
            })
        } else {
            alert("invlid input")
        }}catch(err){

        }
        
    }

    return (
        <div className="register">
            <div className="regContainer">
            {console.log("Show", show)}
            <h1>Add new Show</h1>
            <input type="text" name="artist" value={show.artist} placeholder="artist" onChange={ handleChange } required></input>
            <input type="text" name="genre" value={show.genre} placeholder="genre" onChange={ handleChange } required></input>
            <input type="text" name="times" value={show.times} placeholder="times" onChange={ handleChange } required></input>
            <input type="text" name="photos" value={show.photos} placeholder="photo url" onChange={ handleChange } required></input>
            <input type="text" name="desc" value={show.desc} placeholder="description" onChange={ handleChange } required></input>
            <input type="number" min="20" max="20" name="cheapestPrice" value={show.cheapestPrice} placeholder="cheapest Price" onChange={ handleChange } required></input>
            <div className="button" onClick={createShow} >Submit</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/admin')}>Go Back</div>
            </div>
        </div>
    )
}

export default NewShow
