import React from 'react'
import aboutImg from '../images/about.jpg';

const About = () => {
  return (
    <>
      <section id="about" className="about mt-5">
        <div className="container">
          <div className="row">
             <div className="col-lg-12 col-12">
                 <div className="section-header text-center my-5">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Blanditiis delectus quam totam consequuntur commodi architecto.</p>
                    </div>
             </div>
          </div>
            <div className="row">
                <div className="col-lg-4 col-md-10 col-12">
                    <div className="about-img">
                    <img src={aboutImg} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-12 ps-lg-5m mt-md-5">
                    <div className="about-text m-3">
                        <h2>We Provide  Best Quality <br/> Services Ever</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores,
                             voluptatum obcaecati error minus beatae dicta fugit corporis, sapiente voluptatem,
                            quibusdam laboriosam velit deleniti nam recusandae odit deserunt 
                            ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores,
                            voluptatum obcaecati error minus beatae dicta fugit corporis,cupiditate? Iure.
                        </p>
                        <a href="#" className="btn btn-warning">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
