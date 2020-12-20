import React from 'react'
import {Helmet} from 'react-helmet'
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

const WorksListPage = () => {
    return(
        <>
            <Helmet>
                <title>
                    Works
                </title>
            </Helmet>
            <div className="section-container">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
                            <div className="text-center">
                                <h1 className="h2">02 : Works</h1>
                                <p>
                                    This is my works page. My previous ones are trash and my freelance job is trash.
                                    So there will be only works which I like.
                                </p>
                            </div>
                        </div>

                        <Carousel /> {/* Carousel */}
                    </div>
                </div>
            </div>

            <div style={{marginBottom: '15px'}}>
                <Footer />
            </div>

        </>
    )
}
export default WorksListPage
