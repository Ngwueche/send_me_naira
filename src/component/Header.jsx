import React from "react";
import NavBar from "./NavBar";
import { heroImage } from "../componenet";

function Header() {
  return (
    <div className=' bg-[#EDEDED] '>
      <NavBar />
      <section className=" md:h-[100%]  md:px-[80px] pb-[5%]">
        <div className='flex  md:flex-row'>
        {/* controls the left div */}
          <div  className="w-full py-8 px-6  lg:w-[40%] pt-2 md:pt-32 ">
            <h2 className="text-[#004BAF] font-extrabold font-dela-gothic  md:leading-[64px] text-4xl md:text-6xl">Easy access <br></br>to Naira<br/>whenever<br/>you need it.</h2>
            <h4 className="font-lexend text-[14px] text-[#3C4049] pt-[24px]">
              Send Naira via text to anyone, anytime, anywhere in Nigeria! You
              will never need to carry cash or ever be stranded again. Join the
              moving train now!
            </h4>

          <div className="pt">
            <button className="text-white bg-black px-[24px] py-[12px] w-[160px] h-[48px] rounded-[80px] mt-10 hover:bg-white hover:text-black hover:font-semibold">Find Out How</button>
          </div>

          </div>
          {/* Controls the right div */}
          <div className=" hidden lg:block md:pt-[2rem] lg:pt-[1.3rem]">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
// sm:text-[48px] md:text-[60px] sm:leading-10 md:leading-[64px]