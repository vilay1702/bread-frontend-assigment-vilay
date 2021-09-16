import React from 'react'
import yoga1 from '../images/yoga1.png';
import yoga2 from '../images/yoga2.png';
import yoga3 from '../images/yoga3.png';

const Slider = () => {
    return (
        <div style={{marginTop:"-80px"}} className="border-start border-end border-primary border-5 pt-5 bg-dark d-flex align-items-center flex-column">
            <div className="mt-4"></div>
            <h4 className="mt-5 mb-5">{'browse all my offerings'.toUpperCase()}</h4>
            <div className="d-flex justify-content-center align-items-center w-100 overflow-hidden mx-auto">
                <div data-aos="fade-left" data-aos-delay="200" className="fs-0 fs-6 border border-light p-2 rounded-3 mx-4">
                    <img width={window.innerWidth<"500"?"200px":"350px"} className="opacity-75" src={yoga1} alt="" />
                    <div style={{zIndex:100, marginTop:"-100px", marginLeft:"10px"}}>
                        <span className="px-3 py-2 rounded-pill border border-success">Live</span> <br /><br />
                        <p>
                            Friday - Online class <br />
                            Aug 8, 9:00 AM to 11:00 AM IST
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="border border-light p-2 rounded-3 mx-4">
                    <img width={window.innerWidth<"500"?"300px":"500px"} className="opacity-75" src={yoga2} alt="" />
                    <div style={{zIndex:100, marginTop:"-100px", marginLeft:"10px"}}>
                        <span className="px-3 py-2 rounded-pill border border-success">Live</span> <br /><br />
                        <p>
                            Friday - Online class <br />
                            Aug 8, 9:00 AM to 11:00 AM IST
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="fs-0 fs-6 border border-light p-2 rounded-3 mx-4">
                    <img width={window.innerWidth<"500"?"200px":"350px"} className="opacity-75" src={yoga3} alt="" />
                    <div style={{zIndex:100, marginTop:"-100px", marginLeft:"10px"}}>
                        <span className="px-3 py-2 rounded-pill border border-success">Live</span> <br /><br />
                        <p>
                            Friday - Online class <br />
                            Aug 8, 9:00 AM to 11:00 AM IST
                        </p>
                    </div>
                </div>
            </div>
            <span className="py-3">
                <i role="button" className="fs-3 far fa-arrow-alt-circle-left pe-2"></i>
                <i role="button" className="fs-3 far fa-arrow-alt-circle-right ps-2"></i>
            </span>
        </div>
    )
}

export default Slider
