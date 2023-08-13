import React from "react";
import { email, instagram, logo, twitter, youtube } from "../componenet";
import { Link } from "react-router-dom";


const year = new Date().getFullYear();
function Footer() {
  return (
    <div className=' flex flex-col md:flex-row  md:justify-between mx-auto my-auto px-[3rem] md:px-[5rem] py-[2rem]'>
    <div className='flex flex-col sm:items-center justify-center md:items-start'>
      <img src={logo} alt='' className='w-[102px]  ' />
      <p>© {year} TextMeNaira. All Rights Reserved.</p>
    </div>
    <div className='flex flex-col md:items-end'>
      <div className='flex flex-col md:flex-row py-2 md:py-0 mb-3 gap-2'>
        <div className="md:pr-3 ">
          <p> Connect with us:</p>
        </div>
        <div className='flex flex-row  gap-3 md:gap-2'>
          <img src={instagram} alt='' />
          <img src={twitter} alt='' />
          <img src={youtube} alt='' />
          <img src={email} alt='' />
        </div>
      </div>
      <div className='flex flex-col  md:flex-row '>
        <ul className='md:px-4'>
          <li>
            <Link to="/Terms">Terms & Conditions</Link>
          </li>
        </ul>
        <ul className=' md:px-4'>
          <li>
            <Link to="/Policy">Privacy policy</Link>
          </li>
        </ul>
        <ul className=' md:pl-4'>
          <li>
            <Link to="/Cookie">Cookie policy</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  );
}

export default Footer;
