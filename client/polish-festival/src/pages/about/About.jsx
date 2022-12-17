import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import Calendar from 'react-calendar';
import "./about.css";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

const About = () =>{
  const [date, setDate] = useState([
    new Date(2023, 0, 9),
    new Date(2023, 0, 15),
  ]);

  const min = new Date(2023, 0, 9);
  const max = new Date(2023, 0, 15);
  
    const { data, loading, error} = useFetch("/shows");
    return(
        <div className="colorme">
            <Navbar />
         <div className="banner1">
                <img className="bannerImage" src="../../../banner.png" alt="concert"/>
            </div>
            <div className="aboutContainer">
            <h1 className="TheheaderTitle">Polish Music Festival 2023 in Glasgow</h1>
            <p className="headerDesc">It is 3rd Polish Music Festival organised in United Kingdom. This year Glasgow was chosen to host this amazing event which will last for whole 2 weeks. The festival will take place on Ibrox Stadium. Minimum 2 shows will take place each day and inbetween multiple additional entertainments will take place. 
The last 2 festivals which took places in London and Edinburgh were very successful. Attendence was amazingly high and even the weather was pretty good for the time of the event. The whole event was greatly enjoyed by everyone involved: performers, adjudicators, accompanists, audiences, stewards and administrators.
It is great to return to holding a festival of live performances and to welcome supportive audiences to all sessions. </p>
            <div className="imageContainer">
                <img className="imageimage" src="https://www.eurohostels.co.uk/files/cms_form_value/image_path/4415/CmsFormValue_5aa93ef7789dd.jpeg" alt="Concert" />
            </div>
            </div>
        <div className="aboutinfo">
        <h1>Polish artists performing on the Festival:</h1>
        <div className="aList">
        {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <div className="aListItem" item={item} key={item._id}>
                  <img src={item.photos} alt="artist" className="aListImg" />
                  <div className="aListTitles">
                      <h2>{item.artist}</h2>
                      <h3>{item.genre}</h3>
                  </div>
                              </div>
                ))}
              </>
            )}
           
            </div>
            <div className="calendar">
            <h1 className='text-center'>Shows Calendar:</h1>
      <div className='calendar-container'>
        <Calendar 
          onChange={setDate}
          selectRange={false}
          defaultValue={date}
          minDate={min}
          maxDate={max} />
      </div>
      <div className="write">
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'> There is one show on this day:</span>{' '}
          {date.toDateString()}
        </p>
      )}
      </div>
            </div>
            </div>
            <Footer />
            </div>
            
    )
}
export default About