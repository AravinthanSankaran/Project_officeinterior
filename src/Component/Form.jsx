import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <div className='top'>
         <h3 className='center'>This is the title</h3>
         <p className='center'>This is Creative reading and as well as creative writing</p>
    <div className='form'>
    <Form className='The'>
      <Row className="mb-3 col-6 the">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="firstname" placeholder="Firstname" />
        </Form.Group>

        <Form.Group as={Col} controlId="lastname">
          <Form.Control type="Lastname" placeholder="Lastname" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 col-6" controlId="formGridAddress1">
        <Form.Control placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formGridAddress2">
        <Form.Control placeholder="Address" />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Sign up to Receiving the updates" />
      </Form.Group>

      <Button variant="danger" type="submit" className='center'>
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default GridComplexExample;