import React from 'react'
import Button from 'react-bootstrap/Button';

function banner() {
  return (
    <>
    <div>
        <img
          className="d-block w-100 Size Height"  
          src={require("../Images/office.jpg")}
          alt="Super-bike"
        ></img>
        <h3 className='done'>Headline</h3>
        <p className='para'>This is Subtitle</p>
        <Button variant="danger" size="lg" className='text'>
          this is the link <i class="fa fa-arrow-right Arrow" aria-hidden="true"></i>
        </Button>
    </div>
    <div className='color'>
        <div>
        "The only difference between the a<br></br> problem
        and a Solution is that People<br></br> Understand the Solution "
        <p className='font'>charles F.ketterking <br></br>1876-1978</p>
        </div>
    </div>
    </>
  )
}

export default banner