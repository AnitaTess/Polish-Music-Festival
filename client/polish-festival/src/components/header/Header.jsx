import "./header.css"

const Header = () =>{
    return(
        <div className="header">
            <div className="banner">
                <img className="bannerImg" src="../../../banner.png" alt="concert"/>
            </div>
            <div className="headerContainer">
            <h1 className="headerTitle">Glasgow's Most Unforgettable Music Experience of 2023</h1>
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