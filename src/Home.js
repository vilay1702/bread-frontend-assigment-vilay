import React from 'react'
import './index.scss';
import profliePic from './images/profilePic.png';
import facebookIcon from './images/facebookIcon.svg';
import instagramIcon from './images/instagramIcon.svg';
import languageIcon from './images/languageIcon.svg';
import linkedinIcon from './images/linkedinIcon.svg';
import locationIcon from './images/locationIcon.svg';
import spotifyIcon from './images/spotifyIcon.svg';
import twitterIcon from './images/twitterIcon.svg';
import youtubeIcon from './images/youtubeIcon.svg';
import background from './images/background.png';

const skills = ['Yoga', 'Wellness', 'Fitness',];

const Home = () => {
    return ( 
        <div>
            <img src={background} style={{
                width: "100vw",
                position: "absolute",
                zIndex: "-1",
                left: '0',
                top: '27rem', 
            }} alt="" />
          {/* image section  */}
          <div className="container bg-primary border border-light p-1 rounded" style={{maxWidth: "900px", minHeight:"100vh",}}>
            <div className="container bg-light p-3 text-dark rounded" style={{minHeight:"100vh",}}>
              <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="rounded border border-2  border-primary p-1">
                      <img style={{width: window.innerWidth>="400"?`5rem`: `4rem`}} src={profliePic} alt="" className="rounded" />
                    </div>
                    <div style={{width: "200px"}} className="d-flex flex-wrap mx-2">
                      {
                        skills.map((skill, index)=><p className="border rounded-pill mx-1 p-1 px-2 border-primary" key={index}>{skill}</p>)
                      }
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                      <button type="button" class="btn btn-primary">Book Trial</button>
                      <button type="button" class="btn btn-outline-secondary border-secondary">Contact Me</button>
                  </div>
              </div>
              <div className="mt-3">
              {/* name and about */}
                <h1>Jane Doe</h1>
                <p style={{maxWidth:"550px", color:'#929292 !important'}} className="text-secondary">Hi, I am Jane Doe, your next door fitness instructor with just one goal - Make people fit and healthy.Loren ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
                <div className="d-flex align-items-end">
                    <img role="button" className="mx-2" src={instagramIcon} alt="" />
                    <img role="button" className="mx-2" src={facebookIcon} alt="" />
                    <img role="button" className="mx-2" src={youtubeIcon} alt="" />
                    <img role="button" className="mx-2" src={twitterIcon} alt="" />
                    <img role="button" className="mx-2" src={linkedinIcon} alt="" />
                    <img role="button" className="mx-2" src={spotifyIcon} alt="" />
                </div>
                <hr />
                <div className="d-flex">
                    <img className="mr-2" src={locationIcon} alt="" /> 
                    <p className="pt-3"> Lives in <span className="mySpan p-2 mx-2 bg-secondary rounded-pill">New Delhi</span> </p>
                </div>
                <div className="d-flex">
                    <img className="mr-2" src={languageIcon} alt="" /> 
                    <p className="pt-3"> Speaks 
                      <span className="mySpan p-2 mx-2 bg-secondary rounded-pill">English</span> 
                      <span className="mySpan p-2 mx-2 bg-secondary rounded-pill">Hindi</span> 
                      <span className="mySpan p-2 mx-2 bg-secondary rounded-pill">Punjabi</span> 
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Home
