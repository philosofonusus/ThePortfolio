import React, {useEffect, useRef} from 'react'
import {Helmet} from 'react-helmet'
import {proj1} from '../Components/Imgs'
import {TypedConf} from "../hooks/typed.hook";
import {MovingBackGround} from "../hooks/movingBackground.hook";

const MainPage = () => {
    const typedStrings = useRef()
    const TypeD = useRef()
    const bg = useRef()
    useEffect(() => {
        const {type} = TypedConf(typedStrings.current, TypeD.current)
        const {movingBackgroundImage} = MovingBackGround(bg.current)
        type()
        movingBackgroundImage()
    }, [])
        return(
            <>
                <Helmet>
                    <title>
                        Welcome
                    </title>
                </Helmet>
                <div ref={bg} className="hero-full-container background-image-container white-text-container"
                     style={{backgroundImage: `url(${proj1})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="hero-full-wrapper">
                                    <div className="text-content">
                                        <h1>Hello,<br />
                                            <span ref={typedStrings}>
                                                <span>I'm Tentacle</span>
                                                <span>MERN fullstack developer</span>
                                            </span>
                                            <span ref={TypeD} />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default MainPage