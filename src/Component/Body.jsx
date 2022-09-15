import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Body() {
  return (
    <div>
    <div className='tamil'>
        <div className='tip'>
            <h3 >Section Title</h3>
            <p >this is the Link<i class="fa fa-arrow-right Arrow" aria-hidden="true"></i></p>
        </div>
        <Card style={{ width: '18rem' }} className="image">
      <Card.Img variant="top"  src={require("../Images/book.jpg")} />
      <Card.Body>
        <Card.Title>Blog Title</Card.Title>
        <Card.Text>
          Sometime it is better to walk away from things and go back to them latter when you arebetter frame of mind
        </Card.Text>
        <Card.Footer>
          <small className="text-muted">12/12/2021</small>
        </Card.Footer>
        <Button variant="danger">this is the link<i class="fa fa-arrow-right Arrow" aria-hidden="true"></i></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="image-1">
      <Card.Img variant="top"  src={require("../Images/window.jpg")} />
      <Card.Body>
        <Card.Title>Blog Title</Card.Title>
        <Card.Text>
          Sometime it is better to walk away from things and go back to them latter when you arebetter frame of mind
        </Card.Text>
        <Card.Footer>
          <small className="text-muted">12/12/2021</small>
        </Card.Footer>
        <Button variant="danger">this is the link<i class="fa fa-arrow-right Arrow" aria-hidden="true"></i></Button>
      </Card.Body>
    </Card>
    </div>
    <h3 className='work'>This is a Link</h3>
    </div>
  )
}

export default Body