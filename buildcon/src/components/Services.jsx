import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";
const Services = () => {
  return (
    <>
     <section id="services" className="services mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <p>---------------<span><BsFillHeartFill/>---------------</span></p>
                        <h2>Our Servives</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Blanditiis delectus quam totam consequuntur commodi architecto.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark  pb-2">
                        <div className="card-body">
                            <i className="bi bi-subtract"></i>
                            <h2 className="card-title">Best Quality</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio laboriosam numquam enim modi 
                                repellendus dolores explicabo quis id, 
                                architecto ea corrupti, doloremque nemo eveniet?</p>
                                <button className="btn btn-warning text-dark">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                            <i className="bi bi-playstation"></i>
                            <h2 className="card-title">integrity</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio laboriosam numquam enim modi 
                                repellendus dolores explicabo quis id, 
                                architecto ea corrupti, doloremque nemo eveniet?</p>
                                <button className="btn btn-warning text-dark">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2 ">
                        <div className="card-body">
                            <i className="bi bi-slack"></i>
                            <h2 className="card-title">sustainability</h2>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio laboriosam numquam enim modi 
                                repellendus dolores explicabo quis id, 
                                architecto ea corrupti, doloremque nemo eveniet?</p>
                                <button className="btn btn-warning text-dark">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
