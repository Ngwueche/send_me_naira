import React from "react";
import { money } from "../componenet";

function Features() {
  return (
    <section className='bg-[#F8F8F8] mx-auto px-10 md:px-[80px] py-8 lg:py-[104px]'>
      <div className='flex flex-col md:flex-row gap-14 lg:gap-[64px]  '>
        {/* controls the image */}
        <div className='pt-[80px] '>
          <img src={money} alt='' />
        </div>
        {/* controls the text area */}
        <div className="md:w-[450px] text-left md:mt-24">
          <div>
            <h3 className='text-[ #0F0E0B] font-extrabold font-lexend text-[24px] leading-8'>
              Safe, secure, and <br></br>licensed transactions.
            </h3>{" "}
          </div>
          <div className=' text-[#5C6370] leading-5'>
          <div className='py-5 '>
            <hr />
            <p className='font-bold mt-2'>
              2G-based payment solution with the<br/> use of text messages.
            </p>
            <p className='font-medium mt-2'>
              2G-based infrastructure ensures that payments are made relying on
              SMS, which suffers limited network challenges.
            </p>
          </div>
          <hr />
          <div className='py-5'>
            <p className='font-bold '>
              Integration of the e-Naira wallet to <br/>the SMS service.
            </p>
            <p className='font-medium mt-2'>
              The integration of the e-Naira wallet to the SMS service ensures
              speedy adoption of the digital currency and advances the cashless
              policy.
            </p>
          </div>
          <hr />
          <div className='py-5'>
            <p className='font-bold '>
              Linkage with QR code interface to link
              <br />
              with other app-based infrastructure.
            </p>
            <p className='font-medium mt-2'>
              The QR code interface ensures that other users who use other
              app-based payment infrastructures are captured.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
