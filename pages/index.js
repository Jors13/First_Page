import "bootstrap/dist/css/bootstrap.min.css";
import "../public/static/styles.css";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Element } from "react-scroll";
import Head from "next/head";
import Menu from "../components/Menu";
import Images from "../components/Images";
import Textbox from "../components/Textbox";
import Cards from "../components/Cards";
import Authors from "../components/Authors";
import Inputopinion from "../components/Inputopinion";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Galaxies, Galaxy, Space" />
        <meta name="description" content="Information example site" />
        <meta name="author" content="Jorge Ocaris" />
        <meta name="viewport" content="initial-scale=1.0 , width=device-width" />
        <link rel="icon" href="/static/img/favicon.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Nunito:ital@1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <title>Galaxies</title>
      </Head>

      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>

      <Row>
        <Col>
          <Images />
        </Col>
      </Row>

      <Row>
        <Col md={4} xs={12}>
          <Element name="whatIs">
            <Image
              className="tImage"
              src="/static/img/what_is_a_galaxy.png"
              rounded
              width="300"
            />
          </Element>
        </Col>

        <Col md={8} xs={12}>
          <Textbox />
        </Col>
      </Row>
      <Element name="someG"></Element>
      <Row>
        <Col md={6} xs={12} sm={12}>
          <Cards
            cT="Andromeda"
            image="/static/img/andromeda2.jpg"
            text="The Andromeda Galaxy is a spiral galaxy approximately 2.5 million
          light-years from Earth. Andromeda was formed roughly 10 billion years ago 
          from the collision and subsequent merger of smaller protogalaxies.
          This Violent Collision formed most of the galaxy's galactic halo and extended disk"
            url="https://en.wikipedia.org/wiki/Andromeda_Galaxy"
          />
        </Col>
        <Col md={6} xs={12} sm={12}>
          <Cards
            cT="Milky Way"
            image="/static/img/milkyWay2.jpg"
            text="The Milky Way is the galaxy that contains our Solar system, with the 
          name describing he galaxy's appearance from Eart, is a barred spiral galaxy
          with a diameter between 150.000 and 200.000 light-years. It's estimated to 
          contain 100-400 billion stars and more than billion planets"
            url="https://en.wikipedia.org/wiki/Milky_Way"
          />
        </Col>
        <Col md={6} xs={12} sm={12}>
          <Cards
            cT="Large Magellanic Cloud"
            image="/static/img/largeMagellanicCloud2.jpg"
            text="The Large Magellanic Cloud (LMC) is a satellite galaxy of the Milky Way.
            at a distance of about 163.000 light-years.
            The LMC is classifies as a Magellanic spiral. It contains a stellar ar that is 
            geometrically off-center, suggesting that it was barred dwarf spiral galaxy before its 
            spiral arms were disrupted"
            url="https://en.wikipedia.org/wiki/Large_Magellanic_Cloud"
          />
        </Col>
        <Col md={6} xs={12} sm={12}>
          <Cards
            cT="Small Magellanic Cloud"
            image="/static/img/smallMagellanicCloud2.jpg"
            text="The Small Magellanic Cloud (SMC), or Bunecula Mirror, is a dwarf galaxy
            near the Milky Way.
            Classified as a dwarf irregular galaxy, the SMC has a diameter of about 7.000 light-years.
            The SMC contains a central bar structure, and astronomers speculate that it was once barred 
            spiral galaxy"
            url="https://en.wikipedia.org/wiki/Small_Magellanic_Cloud"
          />
        </Col>
      </Row>
      <Element name="contributions">
        <Row>
          <Col md={4}>
            <Authors
              image="/static/img/edwinHubble.jpg"
              text="
            Edwin Powell Hubble was an American astronomer. He played a crucial role in 
            establishing the fields of extragalactic astronomy and observational cosmology 
            and is regarded as one of the most important astronomers of all time.

            Hubble discovered that many objects previously thought to be clouds of dust and 
            gas and classified as nebulae were actually galaxies beyond the Milky Way.

            He used the strong direct relationship between a classical Cepheid variable's
            luminosity and pulsation for scaling galactic and extragalactic distances.

            Hubble's name is most widely recognized for the Hubble Space Telescope,
            which was named in his hono
          "
              name="Edwin Hubble"
              url="https://en.wikipedia.org/wiki/Edwin_Hubble"
            />
          </Col>
          <Col md={4}>
            <Authors
              image="/static/img/stephenHawking.jpg"
              text="
            Stephen William Hawking was an English theoretical physicist, cosmologist, and author 
            who was director of research at the Centre for Theoretical Cosmology at the University 
            of Cambridge.
            Hawking with his colleague George Ellis worked on the foundation of 'space' and nature 
            of infinite expansion of the universe, described the large scale structure of the
            universe in terms of spacetime using Einstein's General Relativity. 
            The classic book 'The Large Scale Structure of Space-time' contains these works.
          "
              name="Stephen Hawking"
              url="https://en.wikipedia.org/wiki/Stephen_Hawking"
            />
          </Col>
          <Col md={4}>
            <Authors
              image="/static/img/carlSagan.jpg"
              text="
            Carl Sagan, also known as “the astronomer of the people”, was an American astronomer, 
            astrophysicist, author and researcher. 
            He made crucial contributions in popularizing astronomy to the public. 
            He authored over 600 scientific papers and wrote several books about astronomy a
            nd natural sciences.
            Sagan authored more than 20 books about space and the universe. 
            He won a Pulitzer Prize for his work. His TV series Cosmos still remains 
            one of the most-watched shows in television history. "
              name="Carl Sagan"
              url="https://en.wikipedia.org/wiki/Carl_Sagan"
            />
          </Col>
        </Row>
      </Element>
      <Row>
        <Col>
          <Inputopinion />
        </Col>
      </Row>

      <Element name="about">
        <Footer />
      </Element>
    </Container>
  );
};

export default Index;
