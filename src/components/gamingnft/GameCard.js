const GameCard = ({ images, title, price }) => {
  return (
    <div className="bg-[#1E2023] rounded-xl hover:bg-[#22272C] cursor-pointer mb-4">
      {/* <div className="flex flex-col items-center justify-center py-5 space-y-1"> */}
        <img src={images} alt="" className="h-50 border w-full object-fit rounded-2xl" />
        {/* <p className="text-[16px] font-[400] text-white">{title}</p>
        <p className="text-[16px] font-[700] text-purple-700">{price} ATH</p> */}
      {/* </div> */}
    </div>
  );
};

export default GameCard;
