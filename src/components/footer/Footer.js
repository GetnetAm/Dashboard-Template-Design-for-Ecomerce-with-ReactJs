import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div id='footer' className='footer'>
        <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
                <span>Getware Technology</span>
            </strong>
            .All Rights Reserved

        </div>
        <div className='credits'>
            Designed by <a href='/'>Getnet</a>

        </div>
      
    </div>
  )
}

export default Footer
