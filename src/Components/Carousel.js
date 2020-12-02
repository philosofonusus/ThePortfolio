import React from 'react'
import CarouselItem from "./CarouselItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/carousel.css'
import { useWindowSize } from "../hooks/windowSize.hook";

import proj1 from '../assets/images/maxresdefault.jpg'
import proj2 from '../assets/images/spotfy-screen.png'
import proj4 from '../assets/images/SwedishMuseum.png'
import proj3 from '../assets/images/plug.jpg'

const Carouseler = () => {
    const [width] = useWindowSize()
    const plug = {title: 'Plug', description: 'A test plug', href: '#', number: '999/999', img: proj3}
    const items = [
        {title: 'Tentacles Portfolio', description: 'This is my current portfolio. It took me 4 hours to dev and imagine. It is fully written with react js with some old bootstrap which i like', href: 'https://my-tentacles-are-in-you.netlify.app/', number: '001/006', img: proj1},
        {title: 'Spotify Clone', description: 'It is the replica of basic spotify\'s functionality. I have used spotify api and react js with some basic concepts of Redux.', href: 'https://github.com/philosofonusus/spotify-clone', number: '002/006', img: proj2},
        {title: 'Swedish Museum', description: 'This is web app of Swedish Museum(wp twenty-twenty theme) written in nextJs. Freelance commerce project, so there is no source code.', number: '003/006', img: proj4, href: '#'},
        plug
    ]
    return (
        <>
            <div className="col-md-12 col-xs-12 carousel slide projects-carousel">
                { width > 655 ?
                    <Carousel
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className="right carousel-control" onClick={onClickHandler} title={label} style={{ zIndex: '1',position: "absolute", right: '0',backgroundColor: 'black' }}>
                                    ›
                                </button>
                            )
                        }
                        renderArrowPrev={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" className="left carousel-control" onClick={onClickHandler} title={label} style={{ zIndex: '1',position: "absolute", left: '0',backgroundColor: 'black' }}>
                                    ‹
                                </button>
                            )
                        }
                              autoPlay infiniteLoop showArrows showThumbs={false}
                              stopOnHover swipeable showStatus={false}
                              centerMode centerSlidePercentage={34.3}
                              transitionTime={600}>
                        {
                            items.map(el => {
                            return <CarouselItem key={el.number} href={el.href} title={el.title} description={el.description} number={el.number} img={el.img}/>
                        })
                        }
                    </Carousel>
                    :
                    <div>
                        {
                            items.map(el => {
                            return <CarouselItem key={el.number} href={el.href} title={el.title} description={el.description} number={el.number} img={el.img}/>
                        })
                        }
                    </div>
                }

            </div>
        </>
    )
}
export default Carouseler