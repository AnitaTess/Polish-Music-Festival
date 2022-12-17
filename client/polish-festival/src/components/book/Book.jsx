import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./book.css";



const movies = [
    {
      name: 'Back Section',
      price: 20,
      occupied: [20, 21, 30, 1, 2, 8],
    },
    {
      name: 'Middle Section',
      price: 30,
      occupied: [9, 41, 35, 11, 65, 26],
    },
    {
      name: 'Front Section',
      price: 50,
      occupied: [37, 25, 44, 13, 2, 3],
    },
    {
      name: 'VIP Section',
      price: 75,
      occupied: [1, 10, 12, 50, 33, 28, 47],
    },
  ]
  
  const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

const Book = () =>{
    const navigate = useNavigate()
    const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])

   return(
    <div className="theApp">
    <Movies
      movie={selectedMovie}
      onChange={movie => {
        setSelectedSeats([])
        setSelectedMovie(movie)
      }}
    />
    <ShowCase />
    <Cinema
      movie={selectedMovie}
      selectedSeats={selectedSeats}
      onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
    />

    <p className="info">
      You have selected <span className="count">{selectedSeats.length}</span>{' '}
      seats for the price of{' '}
      <span className="total">
        {selectedSeats.length * selectedMovie.price}$
      </span>
    </p>
    <button onClick={() => alert("You Tickets have been booked!") || navigate('/')} className="bookit">Book Tickets</button>
  </div>
)
}

function Movies({ movie, onChange }) {
return (
  <div className="Movies">
    <label htmlFor="movie">Pick Section</label>
    <select
      id="movie"
      value={movie.name}
      onChange={e => {
        onChange(movies.find(movie => movie.name === e.target.value))
      }}
    >
      {movies.map(movie => (
        <option key={movie.name} value={movie.name}>
          {movie.name} (${movie.price})
        </option>
      ))}
    </select>
  </div>
)
}

function ShowCase() {
return (
  <ul className="ShowCase">
    <li>
      <span className="seat" /> <small>N/A</small>
    </li>
    <li>
      <span className="seat selected" /> <small>Selected</small>
    </li>
    <li>
      <span className="seat occupied" /> <small>Occupied</small>
    </li>
  </ul>
)
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
function handleSelectedState(seat) {
  const isSelected = selectedSeats.includes(seat)
  if (isSelected) {
    onSelectedSeatsChange(
      selectedSeats.filter(selectedSeat => selectedSeat !== seat),
    )
  } else {
    onSelectedSeatsChange([...selectedSeats, seat])
  }
}

return (
  <div className="Cinema">
    <div className="screen" />

    <div className="seats">
      {seats.map(seat => {
        const isSelected = selectedSeats.includes(seat)
        const isOccupied = movie.occupied.includes(seat)
        return (
          <span
            tabIndex="0"
            key={seat}
            className={clsx(
              'seat',
              isSelected && 'selected',
              isOccupied && 'occupied',
            )}
            onClick={isOccupied ? null : () => handleSelectedState(seat)}
            onKeyPress={
              isOccupied
                ? null
                : e => {
                    if (e.key === 'Enter') {
                      handleSelectedState(seat)
                    }
                  }
            }
          />
        )
      })}
    </div>
  </div>
   )
        
}
    export default Book