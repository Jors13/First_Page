import { Card, CardDeck, Button } from "react-bootstrap";

const Cards = ({ galaxy, image, text, url }) => {
  const handleOpen = () => {
    open(url, "_blank");
  };
  return (
    <CardDeck className="outBox">
      <Card className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h3>{galaxy}</h3>
            <Card.Img variant="" src={image} width="300" height="300" />
          </div>
          <div className="flip-box-back">
            <p> {text} </p>
            <Button variant="primary" onClick={handleOpen}>
              Learn more
            </Button>
          </div>
        </div>
      </Card>
    </CardDeck>
  );
};

export default Cards;
