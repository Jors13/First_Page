import { Col, Media, Image, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Authors = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = e => {
    setShow(true);
    e.preventDefault();
  };

  const handleOpenInfo = () => {
    open(props.url,'_blank');
  }

  return (
    <div className="author">
      <a href="/" onClick={handleOpen}>
        <Image
          className="image"
          src={props.image}
          width={250}
          height={300}
          roundedCircle
        />
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="aName">{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="aText">
          <p> {props.text} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleOpenInfo}>More Information</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Authors;
