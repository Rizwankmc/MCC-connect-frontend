import React from 'react'
import portfolio from '../../assets/about-1.jpg'

const Portfolio = () => {
    return(
        <div className="portfolio-page glass-css">
            <div className="top-heading">
            <h6 className="addfriend">Portfolio</h6>
            </div>
            <div className="portfolio-image">
                <ul>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                    <li>
                    <img src={portfolio} alt="portfolio" />
                    </li>
                </ul>
               
            </div>
        </div>
    )
}
export default Portfolio;