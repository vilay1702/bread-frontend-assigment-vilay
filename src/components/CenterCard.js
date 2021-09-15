import React from 'react'
import profliePic from '../images/profilePic.png';
import youtubeBG from '../images/youtubeBG.png';
import Typed from 'react-typed';

const skills = ['Yoga', 'Wellness', 'Fitness',];
const languages = ['English', 'Hindi', 'Punjabi',];


const CenterCard = () => {
    return ( 
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="500">
          {/* image section  */}
          <div className={`center-card-outer container bg-primary ${window.innerWidth>900 && 'border border-light p-1 rounded'}`} style={{maxWidth: "900px", minHeight:"100vh",}}>
            <div className={`container bg-light text-dark rounded ${window.innerWidth>"500"?'p-5':'p-3'}`} style={{minHeight:"100vh",}}>
              <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="rounded border border-2  border-primary p-1">
                      <img style={{width: window.innerWidth>="400"?`5rem`:`4rem`}} src={profliePic} alt="" className="img-fluid profilePic rounded" />
                    </div>
                    <div style={{width: "200px"}} className="skills d-flex flex-wrap mx-2">
                      {
                        skills.map((skill, index)=><p className=" fs-0 border rounded-pill mx-1 p-1 px-2 border-primary" key={index}>{skill}</p>)
                      }
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                      <button type="button" className="fs-0 btn btn-primary">Book Trial</button>
                      <button type="button" className="fs-0 btn btn-outline-secondary border-secondary">Contact Me</button>
                  </div>
              </div>
              <div className="mt-3">

              {/* name and about */}
                <h1><Typed strings={['Jane Doe']} typeSpeed={100} startDelay="1000"/></h1>
                <p style={{maxWidth:"550px", color:'#929292 !important'}} className="fs-0 text-secondary">Hi, I am Jane Doe, your next door fitness instructor with just one goal - Make people fit and healthy.Loren ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
                <div className="d-flex align-items-end">
                    <i className="fab fa-instagram me-3" role="button"></i>
                    <i className="fab fa-facebook-f mx-3" role="button"></i>
                    <i className="fab fa-youtube mx-3" role="button"></i>
                    <i className="fab fa-twitter mx-3" role="button"></i>
                    <i className="fab fa-linkedin mx-3" role="button"></i>
                    <i className="fab fa-spotify ms-3" role="button"></i>
                </div>
                <hr />

                {/* Location and language section  */}
                <div className="d-flex my-2">
                    <i className="pt-1 fas fa-map-marker me-2 "></i>
                    <p> Lives in <span className="mySpan p-2 mx-2 bg-secondary rounded-pill">New Delhi</span> </p>
                </div>
                <div className="d-flex my-2">
                    <i className="pt-1 fas fa-comments me-2 "></i>
                    <p> Speaks 
                      {languages.map((language,index)=><span key={index} className="mySpan p-2 mx-2 bg-secondary rounded-pill">{language}</span>)}
                    </p>
                </div>

                {/* Video section  */}
                <div className="mt-4 d-flex flex-wrap justify-content-between">
                  <div >
                    <h3 className="text-dark" style={{maxWidth:'280px'}}>
                      Check out my video about 30 min yoga for beginners
                    </h3>
                    <p role="button" className={`text-primary mt-4 ${window.innerWidth<700 && 'd-none'}`} href="/">
                      <strong>Contact me</strong>
                      <i className="fas fa-long-arrow-alt-right ms-2"></i>

                    </p>
                  </div>
                  <div data-aos="fade-left" className="border border-dark rounded-3 p-1 border-3 ">
                    <img className="img-fluid" src={youtubeBG} alt="" />
                  </div>
                </div>

                {/* Contact Section  */}
                <div className={`mx-auto px-2 py-4 my-4 border border-2 border-secondary rounded-3`}>
                  <p className="mx-2">Subscribe to my profile and never miss another update from me.</p>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control rounded me-3" placeholder="Enter your email" aria-label="Recipient's username" />
                    <button className="rounded btn btn-primary" type="button" >Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CenterCard
