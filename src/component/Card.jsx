import React from "react";

const Card = (props) => {
  const { backgroundColor, imageSrc, description, imageHeight, imageWidth,topPadding, marginLeft,  textWidth, title} = props;

  const cardStyle = {
    backgroundColor: backgroundColor || "#f0f0f0", // Default background color
  };

  return (
    <div className='flex flex-col rounded-[16px] ' style={cardStyle}>
      <div>
      <h4 style={{width: textWidth}} className='leading-[20px] pl-[24px] pt-[40px] pb-[24px] text-[16px]  font-lexend font-[400px]'>
        {description}
      </h4>
      </div>
      <div style={{ width: imageWidth, height: imageHeight, padding: topPadding, marginLeft }} className='  pt-10 items-end'>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Card"
          className="ml-[120px]"
        />
      )}
      </div>

    </div>
  );
};

export default Card;
