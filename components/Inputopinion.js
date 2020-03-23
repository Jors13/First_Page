import { Form, Col, Button } from "react-bootstrap";

const Inputopinion = () => {
  return (
    <Form className="opinionBox">
      <Form.Group controlId="form.ControlTextArea1">
        <Form.Label>What do you think about this topic?</Form.Label>
        <Form.Control as="textarea" row="3" />
      </Form.Group>

      <Form.Group controlId="form.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Row>
        <Col>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Col>
        <Col>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Col>
      </Form.Row>
      <Button className="btn" variant="primary" type="submit">
        Send
      </Button>
      <Button className="btn" variant="primary" type="reset">
        Reset
      </Button>
    </Form>
  );
};

export default Inputopinion;
