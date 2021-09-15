import React from 'react'
import breadImg from '../images/bread.png' 

const Footer = () => {
    return (
        <div className={`px-3 py-4 d-flex flex-wrap ${window.innerWidth>"500"?'justify-content-between':'flex-column'}`}>
            <div className="mb-3">
                <p className={`${window.innerWidth<="500" && 'd-flex justify-content-center'}`}>
                    <span className="pt-1">Powered by</span>
                    <img width="50px" src={breadImg} alt="" />
                </p>
                <div className={`${window.innerWidth<="500" && 'd-flex justify-content-center'}`}>
                    <i className="fab fa-instagram me-3" role="button"></i>
                    <i className="fab fa-facebook-f mx-3" role="button"></i>
                    <i className="fab fa-twitter mx-3" role="button"></i>
                    <i className="fab fa-linkedin mx-3" role="button"></i>
                </div>
            </div>
            <div className={`${window.innerWidth<="500" ? 'fs-0 d-flex flex-row justify-content-between': 'd-flex flex-column align-items-end'}`}>
                <p>&#169; Bread 2021 All rights reserved</p>
                <p>
                    <span className={`${window.innerWidth<="500" ? 'px-1': 'pe-4'}`} role="button">Terms</span>
                    <span className={`${window.innerWidth<="500" ? 'px-1': 'px-3'}`} role="button">Privacy</span>
                    <span className={`${window.innerWidth<="500" ? 'px-1': 'ps-4'}`} role="button">About</span>
                </p>
            </div>
        </div>
    )
}

export default Footer
