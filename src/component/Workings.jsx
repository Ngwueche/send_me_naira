import React from "react";
import { phone } from "../componenet";
import { WorkCard1, WorkCard2 } from "./WorkCard";

function Workings() {
  return (
    <section className='bg-black pt-[3%] mx-auto px-2 lg:px-[7rem] '>
      <div className='flex justify-between'>
        {/* controls ALL the cards */}
        <div className='flex flex-col '>
          <h2 className=' text-white font-[800] text-[36px] md:text-[40px] font-dela-gothic md:text-left px-2 pt-[5%] mb-[20px]'>
            How it Works!
          </h2>
          <div className='flex flex-col lg:flex-row gap-4 mt-10 font-lexend mb-28 px-2 lg:px-0'>
            <div className='grid col-span-1 gap-4 '>
              <div className=' bg-[#FFE4D3] p-6 flex flex-col rounded-xl'>
                <p className=' font-bold mb-2'>step 1:</p>
                <p>
                  Text - <span className='font-lexend font-bold '>
                    enrol BVN to 1114. e.g enrol 22156635578. <br />
                  Wait for the reply{" "}
                  </span>
                  <span className='font-lexend font-bold '>
                    “account creation initiated.”
                  </span>

                </p>
              </div>
              <div className=' bg-[#EDE6FF] p-6 flex flex-col rounded-xl'>
                <p className='font-lexend font-bold mb-2'>step 2:</p>
                <p>
                  Then reply to 1114: your unique username, your phone number
                  and password to start making and receiving payments.{" "}
                  <span className='font-lexend font-bold '>
                    e.g kabirusuya 08190000000 212555.
                  </span>
                </p>
              </div>
              <div className=' bg-[#FFE4F1] p-6 flex flex-col rounded-xl'>
                <p className='font-lexend font-bold mb-2'>step 3:</p>
                <p>
                  Wait for a reply that reads{" "}
                  <span className='font-lexend font-bold '>
                    “welcome kabirusuya!”
                  </span>
                  You can now make and receive instant payments anytime. Make
                  payment up to 10,000 Naira at zero transaction cost.{" "}
                </p>
              </div>
            </div>
            <div className='flex flex-col '>
              <div className='flex flex-col gap-4'>
                <div className='lg:w-[254px] bg-[#C1FBE8] p-6 flex flex-col rounded-xl'>
                  <p className='font-lexend font-bold mb-2'>CHECK BALANCE:</p>
                  <p>
                    To check account balance, text -
                    <span className='font-lexend font-bold '>
                      balance to 1114
                    </span>
                  </p>
                </div>
                <div className='lg:w-[254px] bg-[#FFEBB9] p-6 flex flex-col rounded-xl'>
                  <p className='font-lexend font-bold mb-2'>MAKE PAYMENTS:</p>
                  <p>
                    To make payment text -{" "}
                    <span className='font-lexend font-bold '>
                      pay shalewa 5000
                    </span>{" "}
                    (pay username amount)
                    <span className='font-lexend font-bold '>{" "}
                      to 1114. <br />
                    </span>
                    User will receive a pop-up text message requesting to input
                    their password to confirm transaction request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* controls the image */}
        <div className=' w-[120%] pt-[5%] hidden md:block '>
          <img src={phone} alt='' className='' />
        </div>
      </div>
    </section>
  );
}

export default Workings;

