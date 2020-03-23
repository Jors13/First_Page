import { Carousel } from "react-bootstrap";

const Images = () => {
  return (
    <Carousel className="sCarousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/img/andromeda2.jpg"
          alt="Andromeda Galaxy Photo by Guillermo Ferla on Unsplash" //Remember add badge and change names
        />
        <Carousel.Caption>
          <h3>Andromeda</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/img/milkyWay2.jpg"
          alt="Milky Way Photo by Jason Blackeye on Unsplash" //Remember add badge and change names
        />
        <Carousel.Caption>
          <h3>Milky Way</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/img/largeMagellanicCloud2.jpg"
          alt="Large Magellanic Cloud Photo by Carlos Fairbairn" //Remember add badge and change names
        />
        <Carousel.Caption>
          <h3>Large Magellanic Cloud</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/static/img/smallMagellanicCloud2.jpg"
          alt="Small Magellanic Cloud Photo by ESO/VISTA VMC" //Remember add badge and change names
        />
        <Carousel.Caption>
          <h3>Small Magellanic Cloud</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Images;
