import React from 'react'

import banner1 from '../images/home-1.jpg';
import banner2 from '../images/home-2.jpg';
import banner3 from '../images/home-3.jpg';

const Carousel = () => {
  return (

    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <h5>Your Dream House</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, nostrum! Temporibus iste dolores a aliquid!</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <h5>Always Dedicated</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, nostrum! Temporibus iste dolores a aliquid!</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <h5>Ture Construction</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, nostrum! Temporibus iste dolores a aliquid!</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
  )
}

export default Carousel
