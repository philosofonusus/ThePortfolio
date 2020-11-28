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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at beata
                                    e corporis cum delectus deserunt dignissimos distinctio earum eius eveniet exercitatio
                                    nem facere fuga harum illo inventore, ipsa ipsum laboriosam laudantium libero nesci
                                    unt perferendis placeat
                                    quae quaerat sed soluta tempora tempore vel voluptatibus voluptatum? Commodi corpori
                                    s et fugit ipsa sit.
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