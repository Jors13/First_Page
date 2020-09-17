import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import getData from "../public/static/data";

const Images = () => {
  const [galaxies, setGalax] = useState(() => getData("galaxies")); //Getting Data from data.js FakeAPI

  return (
    <Carousel className="sCarousel">
      {galaxies.map((info, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={info.img}
              alt={info.imgCredits} //Remember add badge and change names
            />
            <Carousel.Caption>
              <h3>{info.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Images;
