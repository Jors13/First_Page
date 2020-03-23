import { Jumbotron, Button } from "react-bootstrap";

const Textbox = () => {
  const handleOpen = () =>{
    open('https://spaceplace.nasa.gov/galaxy/en/','_blank')
  }
  return (
    <Jumbotron>
      <h3 className="textT">What's That ?</h3>
      <p className="justify textB">
        A galaxy is a huge collection of gas, dust, energy, dark matter, and billions of
        stars and their solar systems. A galaxy is held together by gravity. Our galaxy,
        the Milky Way, also has supermassive black hole a in the middle.
      </p>
      <p>
        <Button variant="primary" onClick={handleOpen}>
          Learn More. 
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Textbox;
