import React from 'react'
import CarouselItem from "./CarouselItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/carousel.css'
import { useWindowSize } from "../hooks/windowSize.hook";

import proj1 from '../assets/images/work01-hover-min.jpg'
import proj2 from '../assets/images/work02-hover-min.jpg'
import proj3 from '../assets/images/work03-hover-min.jpg'

const Carouseler = () => {
    const [width] = useWindowSize()
    const items = [
        {title: 'Tentacles Portfolio', description: 'It was hard but i made it', href: '#', number: '001/006', img: proj1},
        {title: 'Spotify Clone', description: 'It was hard but i made it', href: '#', number: '002/006', img: proj2},
        {title: 'Pornhub Clone', description: 'You know mongodb, passport, express...', href: '#', number: '003/006', img: proj3}
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
                        autoPlay infiniteLoop showArrows
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