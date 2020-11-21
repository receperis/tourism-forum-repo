import React from "react";
import Auth from '../../services/Auth';
import travel1 from '../../assets/images/travel1.jpeg';
import travel2 from '../../assets/images/travel2.jpeg';
import travel3 from '../../assets/images/travel3.jpeg';
import travel4 from '../../assets/images/travel4.jpeg';
import travel5 from '../../assets/images/travel5.jpeg';
import travel6 from '../../assets/images/travel6.jpeg';



function HomePage() {
    const user = Auth.getUser();
    
    return (
        <div className="home">
            <div className="home-body">
            {user &&  <p className="welcome"> Welcome {user.name} </p> }
                <h2 className="welcome-header">Beautiful Destinations</h2>
                <p className="welcome-p">This is the  place where we inspire people to connect and have positive impact through travel.
                    We are a climate positive forum that advocates sustainability.
                </p>
                <p className="welcome-p">Journey with us and choose your own path. We equip you with a roadmap to design the journey of your dreams.</p>
                <div className="grid-welcome">
                    
                <img className="travel" src= {travel1} alt = "Travel1"  />
                <img className="travel" src= {travel2} alt = "Travel2"  />
                <img className="travel" src= {travel3} alt = "Travel3"  />
                <img className="travel" src= {travel4} alt = "Travel4"  />
                <img className="travel" src= {travel5} alt = "Travel5"  />
                <img className="travel" src= {travel6} alt = "Travel6"  />
                </div>
            </div>
        </div>
    );
}

export default HomePage;