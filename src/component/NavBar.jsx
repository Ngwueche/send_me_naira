import React from 'react'
import { logo } from '../componenet'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <Link to= '/'>
        <div className=' py-8 px-[6%] lg:py-[2%] '>
            <img src={logo} alt="SendMe Naira" />
        </div>
        </Link>
    </nav>
  )
}

export default NavBar