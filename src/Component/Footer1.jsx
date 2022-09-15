import React from 'react'
import Image from 'react-bootstrap/Image'

function footer1() {
  return (
    <div>
         <Image
          className="d-block w-100 Size Height"  
          src={require("../Images/gate.jpg")}
          alt=""
        ></Image>
        <div className='out'>
        <h3 className='done-1'>He Who wonder discover<br></br> that this is itself is wonder</h3>
        <p className='para-1'>Whether or not we find what we are <br></br>seeking is idle biologically speaking</p>
        <p className='para-1'>this is the link <i class="fa fa-arrow-right Arrow" aria-hidden="true"></i></p>
        </div>
    </div>
  )
}

export default footer1