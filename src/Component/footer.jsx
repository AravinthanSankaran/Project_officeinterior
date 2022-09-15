import React from 'react'

function footer() {
  return (
    <div>
        <hr></hr>
        <h3 className='head'>BRAND NAME</h3>
        <div className='menu'>
        <p className='Title'>Menu1</p>
        <p className='Title'>Menu2</p>
        <p className='Title'>Menu3</p>
        <p className='Title' >Contact Us </p>
        </div>
        <div className='create'>
        <i class="fa fa-twitter One" aria-hidden="true"></i>
        <i class="fa fa-instagram One" aria-hidden="true"></i>
        <i class="fa fa-facebook-square One" aria-hidden="true"></i>
        <p className='two'>123-1234-12345</p>
        <p className='two'>Email@email.com</p>
        <p className='two'>123 Street Address,123123</p>
        </div>
        <hr></hr>
        <p className='three'>Privacy Policy   Terms @ Condition</p>
    </div>
  )
}

export default footer