import React from "react";
import Card from "./Card";
import { grid1, grid2, grid3, grid4, grid5, tile1, tile2, tile3, tile4, tile5 } from "../componenet";

function OurSolution() {
  return (
    <section className=' w-full bg-white py-[8%]  px-[7.5%]'>
      <div className=''>
        <div
          style={{
            color: "#0F0E0B",
            fontSize: 40,
            fontFamily: "Dela Gothic One",
            fontWeight: "800",
          }}
        >
        <h3 className="font-dela-gothic leading-[42px] pb-10 text-[40px]">
          Transacting in Naira <br></br> has never been easier...

        </h3>
        </div>

        <div className=''>
          {/* Upper Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2  gap-6'>
            <img src={tile1} alt="" />
            <img src={tile2} alt="" />
          </div>

          {/* Lower Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            <img src={tile3} alt="" />
            <img src={tile4} alt="" />
            <img src={tile5} alt="" />
          </div>
        </div>

        {/* <div className=''> */}
          {/* Upper Grid */}
          {/* <div className='grid grid-cols-2 gap-6'>
            <Card
              backgroundColor='#C1FBE8'
              imageSrc={grid1}
              description='Instantly pay for goods and services with a one-line SMS and short-code'
              textWidth = '325px'
            />

            <Card
              backgroundColor='#FFEBB9'
              imageSrc={grid2}
              description='Zero fees for transactions up to 10,000 Naira.'
              textWidth = '225px'
            />
          </div> */}

          {/* Lower Grid */}
          {/* <div className='grid grid-cols-3 gap-6 mt-8'>
            <Card
              backgroundColor='#FFE4D3'
              imageSrc={grid3}
                marginLeft= '-90px'
              description='Less than one-minute sign-up time with unique usernames and QR codes.'
              textWidth = '300px'
            />

            <Card
              backgroundColor='#EDE6FF'
              imageSrc={grid4}
              marginLeft= '-90px'
              description='Instant transfers to any bank in Nigeria.'
              textWidth = '220px'
            />

            <Card
              backgroundColor='#FFE4F1'
              imageSrc={grid5}
              marginLeft= '-90px'
              description='Withdraw or transfer cash at designated agent points.'
              textWidth = '280px'
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default OurSolution;
