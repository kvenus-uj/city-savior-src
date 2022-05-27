import React from "react";

const ServiceCard = ({ images, title, subTitle }) => {
  return (
    <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-700" style={{opacity: 0.8}}>
      <div className="mr-2 p-2">
        <img src={images} alt="" className="h-10" />
      </div>
      <div>
        <p className="text-white text-[16px] font-[400]">{title}</p>
        <p className="text-[#b9babb] text-[12px] font-[400]">{subTitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
