import "./subscribe.css";

const Subscribe = () =>{
    return(
        <div className="mail">
            <div className="banner">
                <img className="bannerImage" src="../../../banner.png" alt="concert"/>
            </div>
            <div className="mailContainer">
            <h1 className="mailTitle">Be the first one that finds out about any updates!</h1>
            <span className="mailDesc">Sign up and we will inform you about any chnges, discounts, additional information and updates.</span>
            <div className="mailInputContainer">
                <input type="email" placeholder="Your Email"/>
                <button>Subscribe</button>
            </div>
            </div>
        </div>
    )
}
export default Subscribe