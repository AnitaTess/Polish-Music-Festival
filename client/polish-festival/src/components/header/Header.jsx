import "./header.css"

const Header = () =>{
    return(
        <div className="header">
            <div className="banner">
                <img className="bannerImg" src="../../../banner.png" alt="flag"/>
            </div>
            <div className="headerContainer">
            <h1 className="headerTitle">Glasgow's Most Unforgettable Music Experience of 2023</h1>
            <div className="imageeContainer">
            <img className="imagee" src="https://media.istockphoto.com/id/1186188125/photo/filming-concert-on-smart-phone.jpg?s=612x612&w=0&k=20&c=56lNcdsCPCj_bpliEO_41IpbOs3dbtu24UKgIgaOIOE=" alt="concert"/>
            </div>
            <p className="headerDesc">Dawid Podsiadło, Sanah, Dawid Kwiatkowski, Grubson, Kamil Bednarek and many more polish music stars will join us in February 2023 for Polish Music Festival in Glasgow! 
            <br/>Get ready for 2 weeks of non-stop fun with the most popular polish bands and singers.<br/> Minimum 2 different concerts guaranteed for each day of the festival!<br/> Over 10 different music genres waiting for YOU to discover!
            <br/><br/><strong>Don't miss it, get tickets now to see your favourite singers! <br/> Want to find out more?</strong></p>
            <button className="headerBtn"><a className="linkit" href="/about">More Information</a></button>
</div>
<div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" className="searchButton">Search</button>
   </div>
</div>
        </div>
    )
}
export default Header