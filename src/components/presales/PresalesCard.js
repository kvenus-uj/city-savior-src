const PresalesCard = ({ images, title, day, price }) => {
  return (
    <div className="py-4">
      <div className="flex flex-col items-center">
        <img
          src={images}
          alt=""
          className="h-12 rounded-full ring-2 ring-blue-700 p-[2px]"
        />
        <p className="text-white text-[12px] font-[700] pt-2">{title}</p>
        <p className="text-[#b9babb] text-[12px] font-[500]">{day}</p>
        <p className="text-[#b9babb] text-[12px] font-[700]">{price} NEAR</p>
      </div>
    </div>
  );
};

export default PresalesCard;
