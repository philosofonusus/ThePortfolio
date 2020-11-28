import React from 'react'
import Footer from "../Components/Footer";
import {Helmet} from "react-helmet";

const AboutPage = () => {
    return(
        <>
            <Helmet>
                <title>About me</title>
            </Helmet>

                <div className="section-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">

                                <div className="section-container-spacer text-center">
                                    <h1 className="h2">01 : About me</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6">
                                                <h3>Consectetur adipiscing elit</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                                    luctus at sem quis varius.
                                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                    per inceptos himenaeos. Cras ultrices hendrerit nisl.</p>
                                                <h3>Ut enim ad minim </h3>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                    cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est
                                                    laborum.
                                                    <h3>Maecenas luctus at sem quis varius</h3>
                                                    <p>
                                                        Class aptent taciti sociosqu ad litora torquent per conubia
                                                        nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis
                                                        elit sagittis, at hendrerit lorem venenatis. Morbi accumsan
                                                        iaculis blandit. Cras ultrices hendrerit nisl.
                                                    </p>
                                                </p>
                                            </div>
                                            <div className="col-xs-12 col-md-6">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div style={{marginBottom: '15px'}}>
                <Footer />
            </div>
        </>
    )
}
export default AboutPage