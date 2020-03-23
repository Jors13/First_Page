import { Card, CardDeck, Button } from "react-bootstrap";

const Cards = props => {
  const handleOpen = () => {
    open(props.url, "_blank");
  };
  return (
    <CardDeck className="outBox">
      <Card className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h3>{props.cT}</h3>
            <Card.Img variant="" src={props.image} width="300" height="300" />
          </div>
          <div className="flip-box-back">
            <p> {props.text} </p>
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
