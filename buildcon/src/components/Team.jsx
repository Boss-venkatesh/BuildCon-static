import React from 'react'

import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter,BsPersonHearts } from "react-icons/bs";

import img1 from '../images/team-1.jpg';
import img2 from '../images/team-2.jpg';
import img3 from '../images/team-3.jpg';
import img4 from '../images/team-4.jpg';

const Team = () => {
  return (
    <>
         <section id="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <p>---------------<span><i className=""><BsPersonHearts/></i>---------------</span></p>
                        <h2>Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Blanditiis delectus quam totam consequuntur commodi architecto.</p>
                    </div>
                </div>
            </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card text-center card-team">
                            <div className="card-body">
                                <img src={img1} alt="" className="img-fluid rounded-circle" />
                                <h3 className="card-title py-2">Jack Wilson</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit?</p>
    
                                <p className="socials">
                                    <i className="text-dark mx-1"><BsTwitter/></i>
                                    <i className=" text-dark mx-1"><BsFacebook/></i>
                                    <i className=" text-dark mx-1"><BsLinkedin/></i>
                                    <i className=" text-dark mx-1"><BsYoutube/></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card text-center card-team">
                            <div className="card-body">
                               <img src={img2} alt="" className="img-fluid rounded-circle" />
                                <h3 className="card-title py-2">Jack Wilson</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit?</p>
    
                                <p className="socials">
                                <i className="text-dark mx-1"><BsTwitter/></i>
                                    <i className=" text-dark mx-1"><BsFacebook/></i>
                                    <i className=" text-dark mx-1"><BsLinkedin/></i>
                                    <i className=" text-dark mx-1"><BsYoutube/></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card text-center card-team">
                            <div className="card-body">
                                <img src={img3} alt="" className="img-fluid rounded-circle" />
                                <h3 className="card-title py-2">Jack Wilson</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit?</p>
    
                                <p className="socials">
                                    <i className="text-dark mx-1"><BsTwitter/></i>
                                    <i className=" text-dark mx-1"><BsFacebook/></i>
                                    <i className=" text-dark mx-1"><BsLinkedin/></i>
                                    <i className=" text-dark mx-1"><BsYoutube/></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div class="card text-center card-team">
                            <div class="card-body">
                               <img src={img4} alt="" className="img-fluid rounded-circle" />
                                <h3 class="card-title py-2">Jack Wilson</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, suscipit?</p>
    
                                <p class="socials">
                                <i className="text-dark mx-1"><BsTwitter/></i>
                                    <i className=" text-dark mx-1"><BsFacebook/></i>
                                    <i className=" text-dark mx-1"><BsLinkedin/></i>
                                    <i className=" text-dark mx-1"><BsYoutube/></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
            
        </div>
     </section>

    </>
  )
}

export default Team
