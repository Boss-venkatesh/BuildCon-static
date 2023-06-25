import React from 'react'
import about from '../images/about.jpg'

const Contact = () => {
  return (
    <>
       <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center my-5">
                        <h2>Contact</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Blanditiis delectus quam totam consequuntur commodi architecto.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-area my-5">
                        <form>
                            <div className="form-group">
                              <label for="exampleInputUsername1">Username</label>
                              <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                              <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                              </div>
                            <button type="submit" className="btn btn-warning w-100 py-1">Submit</button>
                          </form>
                    </div>
                </div>

                <div className="col-lg-6 col-md-5 col-12">
                   <div className="contact-img-area ">
                      <img src={about} alt="" className="img-fluid mx-auto my-2" />
                   </div>
                </div>
            </div>
        </div>
     </section>

    </>
  )
}

export default Contact
