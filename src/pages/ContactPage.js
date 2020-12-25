import React from 'react'
import {Helmet} from "react-helmet";
import emailjs from 'emailjs-com'
import Footer from "../Components/Footer";

const ContactPage = _ => {
    //TODO Message send
    const send = (e) => {
        e.preventDefault()
        emailjs.sendForm(`${process.env.EMAILJS_SERVICEID}` , `${process.env.EMAILJS_TEMPLATEID}`, e.target,`${process.env.EMIALJS_USERID}`)
            .then(result => console.log(result))
        e.target.reset()
    }
    return (
        <>
            <Helmet>
               <title>Contact Me</title>
            </Helmet>
            <div className="section-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-container-spacer text-center">
                                <h1 className="h2">03 : Contact me</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <form method="post" onSubmit={send} className="reveal-content">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email"
                                                           placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="subject"
                                                           placeholder="Subject" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" rows="5"
                                                               placeholder="Enter your message" />
                                                </div>
                                                <button type="submit" className="btn btn-default btn-lg">Send</button>
                                            </div>
                                            <div className="col-md-5 address-container">
                                                <ul className="list-unstyled">
                                                    <li>
                          <span className="fa-icon">
                            <i className="fa fa-phone" aria-hidden="true" />
                          </span>
                                                        + 38 066 276 6954
                                                    </li>
                                                    <li>
                          <span className="fa-icon">
                            <i className="fa fa-at" aria-hidden="true" />
                          </span>
                                                        my.tentacles.are.in.you@gmail.com
                                                    </li>
                                                    <li>
                          <span className="fa-icon">
                            <i className="fa fa fa-map-marker" aria-hidden="true" />
                          </span>
                                                        Ukraine Kharkiv
                                                    </li>
                                                </ul>
                                                <h3>Follow me on social networks</h3>
                                                <a href="http://www.facebook.com" title="" className="fa-icon">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="http://www.twitter.com" title="" className="fa-icon">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="http://www.linkedin.com" title="" className="fa-icon">
                                                    <i className="fa fa-linkedin" />
                                                </a>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ContactPage
