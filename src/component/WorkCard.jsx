import React from "react";

export const WorkCard1 = (props) => {
  const { backgroundColor, description, title, width } = props;

  const cardStyle = {
    backgroundColor: backgroundColor || "#f0f0f0", // Default background color

  };

  return (
    <div className='flex flex-col w-[400px] rounded-[16px] mb-4 p-6' style={cardStyle}>
      <h3 className=' pb-2  text-[14px]  font-lexend font-bold'>{title}</h3>
      <h4 className='leading-[20px] text-[14px]  font-lexend font-medium'>
        {description}
      </h4>
    </div>
  );
};
export const WorkCard2 = (props) => {
  const { backgroundColor, description, title, width } = props;

  const cardStyle = {
    backgroundColor: backgroundColor || "#f0f0f0", // Default background color
  };

  return (
    <div className='flex flex-col rounded-[16px] w-[400px] md:w-[254px] mb-4 p-6' style={cardStyle}>
      <h3 className=' pb-2  text-[14px]  font-lexend font-bold'>{title}</h3>
      <h4 className='leading-[20px] text-[14px]  font-lexend font-medium'>
        {description}
      </h4>
    </div>
  );
};


