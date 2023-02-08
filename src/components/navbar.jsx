import React from 'react'

function navbar() {
  return (
    <div>
      <div className='navbar bg-black'>
        <div className='mx-32'>
            <img src="/assets/images/navbar/Logo.png" alt="Bravos Logo" className ="h-20 w-44" />
            <div>
                <ul className="flex flex-row">
                    <li className="text-white text-sm font-light"><a href="#">About</a></li>
                    <li className="text-white text-sm font-light"><a href="#">Services</a></li>
                    <li className="text-white text-sm font-light"><a href="#">Team</a></li>
                    <li className="text-white text-sm font-light"><a href="#">Work</a></li>
                    <li className="text-white text-sm font-light"><a href="#">Testimonials</a></li>
                </ul>
                <button className='h-10 w-40 bg-transparent border-1 border-white'>Get in Touch</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default navbar
