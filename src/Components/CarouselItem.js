import React from "react";

const CarouselItem = (props) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return(
        <div style={{margin: "0 10px"}}>
            <a href={props.href} title="" className="black-image-project-hover">
                <img
                    onLoad={() => {
                        setIsLoaded(true);
                    }}
                    className="full img-responsive"
                    style={{ opacity: isLoaded ? 1 : 0 }}
                    alt={props.href}
                    src={props.img}
                />
            </a>
            <div className="card-container card-container-lg">
                <h4>{props.number}</h4>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.href} title="" className='btn btn-default'>Discover</a>
            </div>
        </div>
    )
}
export default CarouselItem