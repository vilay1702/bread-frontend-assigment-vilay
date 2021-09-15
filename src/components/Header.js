import React, {useState} from 'react'

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
    const [currentPage, setCurrentPage] = useState('')
    return (
        <header>
            <nav class="ps-2 pe-3 navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#"><u>bre.ad/jane</u></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            {
                                navItems.map(({text, link}, index)=>
                                <a key={index} 
                                className={`text-light nav-link ms-2 me-2 ${text==='Book Trial' && "border border-light rounded-pill ps-3 pe-3"}`} 
                                href={link}>{text}</a>)
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <h1 className="text-center mt-5 mb-5 pt-3 pb-3" >Start your day with the <br /> goodness of Yoga</h1>
        </header>
    )
}

export default Header
