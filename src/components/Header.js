import React from 'react'

const navItems = [
    {
        text: 'Offerings',
        link: '#offerings',
    },
    {
        text: 'Other Links',
        link: '#otherlinks',
    },
    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Portfolio',
        link: '#portfolio',
    },
    {
        text: 'Contact me',
        link: '#contactme',
    },
    {
        text: 'Book Trial',
        link: '#booktrial',
    },
];


const Header = () => {
    return (
        <header>
            <nav class="ps-2 pe-3 navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/"><u>bre.ad/jane</u></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="ms-auto navbar-nav">
                            {
                                navItems.map(({text, link}, index)=>
                                <a key={index} 
                                className={`text-light nav-link ms-2 me-2 ${text==='Book Trial' && "border border-light rounded-pill px-3"}`} 
                                href={link}>{text}</a>)
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <h1 data-aos="fade-up"
              data-aos-duration="500"
              className="text-center mt-5 mb-5 pt-5 pb-3" >Start your day with the <br /> goodness of Yoga</h1>
        </header>
    )
}

export default Header
