import React from 'react'
import Footer from "../Components/Footer";
import {Helmet} from "react-helmet";

import rose from '../assets/images/rose.jpg'
import {useWindowSize} from "../hooks/windowSize.hook";
import {Link} from "react-router-dom";

const AboutPage = () => {
    const [width] = useWindowSize()
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
                                                <h3>
                                                    Who am I
                                                </h3>
                                                <p>
                                                    Hello I'm Tentacle. Currently, my specialization is web development, and I'm working as a freelance, but
                                                    I'm trying myself in all directions of development. I'm the type of person who like
                                                    when all the stuff I do is perfect. I like to code some things in my free time and learn new stuff.
                                                    I have no experience of working in teams, but I would like to.
                                                </p>
                                                <h3>
                                                    What I can offer you
                                                </h3>
                                                <p>
                                                    I can offer you website or webapp you want. I'm focusing on the site performance,
                                                    SEO and web design. I like to do things fast and well. If you are interested, you can <Link to='/contact' style={{color: 'black', textDecoration: 'underline', fontWeight: 600}}>contact me</Link>.
                                                </p>
                                                <h3>
                                                    About my skills
                                                </h3>
                                                <p>
                                                    For a layout, I use a pure html and emmet. For a styling, I use CSS with SASS preprocessor, maybe
                                                    bootstrap5 for fast coding. For a frontend, I use ReactJs because it's simple and very fast.
                                                    When I want to do something fast and have a good SEO then I use nextJS which is good but im still learning.
                                                    For a state management, I use Redux which I hate a lof or ReactContext which is simple.
                                                    When I need db, I use MongoDb because it's simple, fast, and it is in MERN stack.
                                                    For a backend, I use Node and ExpressJs framework because node is fast and express is simple, so that
                                                    I can develop a backend very fast. I can use TypeScript, but I don't need to.
                                                    I know how to work with webpack and gulp. I know how to work with the docker,
                                                    docker-compose, and docker hub. I also know the concepts of SOLID.
                                                </p>
                                            </div>
                                            <div style={width < 992 ? {justifyContent: 'center', display: 'flex', marginTop: '40px'} :{paddingLeft: '10vw'}} className="col-xs-12 col-md-6">
                                                <img src={rose} alt="rose" height={700}/>
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