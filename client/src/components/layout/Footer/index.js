import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'


const Footer= () => {
  return (
    <footer className="bck_b_dark">
        <div className="container">
            <div className="logo">
                  waves
            </div>
            <div className="flex">
            <div className="left">
              <h2>Contant inforamtion</h2>
              <div className="business_nfo">
                <div className="tag">
                    <FontAwesomeIcon
                        icon={faCompass}
                        className="icon"
                    />
                    <div className="nfo">
                      <div>Address</div>
                      <div>Bangalore Kundanahalli gate</div>
                    </div>
                </div>
                <div className="tag">
                    <FontAwesomeIcon
                        icon={faPhone}
                        className="icon"
                    />
                    <div className="nfo">
                      <div>Phone</div>
                      <div>+91-9030701091</div>
                    </div>
                </div>
                <div className="tag">
                    <FontAwesomeIcon
                        icon={faClock}
                        className="icon"
                    />
                    <div className="nfo">
                      <div>Working hr</div>
                      <div> 24/7</div>
                    </div>
                </div>
                <div className="tag">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon"
                    />
                    <div className="nfo">
                      <div>Email Address</div>
                      <div>sandhanireactdeveloper@gmail.com</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="left">
             <h2>be the first to know </h2>
             <div>
               <div> sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 6 and npm >= 5.2 on your machine. To create a project, run:</div>
             </div>
            </div>
            </div>
           
        </div>
    </footer>
  )
}
export default Footer;
