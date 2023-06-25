import React from 'react'
import { BsPalette2 } from "react-icons/bs";

import project1 from '../images/project-1.jpg';
import project2 from '../images/project-2.jpg';
import project3 from '../images/project-3.jpg';

const Projects = () => {
  return (
    <>
     <section id="project" className="my-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="section-header text-center">
                        <p>---------------<span><BsPalette2/>---------------</span></p>
                        <h2>Project</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Blanditiis delectus quam totam consequuntur commodi architecto.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body">
                            <div className="img-area">
                                <img src={project1} alt="" className="img-fluid" />
                            </div>
                            <h3 className="card-title my-3">Building Make</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus deserunt maiores sapiente quos esse.</p>
                            <button className="btn btn-warning text-dark">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body">
                            <div className="img-area">
                            <img src={project2} alt="" className="img-fluid" />
                            </div>
                            <h3 className="card-title my-3">Building Make</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus deserunt maiores sapiente quos esse.</p>
                            <button className="btn btn-warning text-dark">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12">
                    <div className="card text-center bg-white pb-2">
                        <div className="card-body">
                            <div className="img-area">
                            <img src={project3} alt="" className="img-fluid" />
                            </div>
                            <h3 className="card-title my-3">Building Make</h3>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus deserunt maiores sapiente quos esse.</p>
                            <button className="btn btn-warning text-dark">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Projects
