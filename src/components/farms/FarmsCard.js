
const FarmsCard = ({ images, title, count, people }) => {
  return (
    <div className="bg-[#454689] p-2 rounded-2xl mt-10" style={{opacity: 0.8}}>
      <div className="flex flex-col items-center justify-center space-y-2 text-sm">
        <img src={images} alt="" className="h-10 ring-4 rounded-full -mt-7" />
        <p className="text-[#fffe96]">{title}</p>
        <p className="text-[#fffe96]">3 - 20</p>
      </div>
      <div className="flex items-center justify-between text-xs text-[#ff7bff] px-4 pb-2">
        <div className="flex items-center space-x-1">
          {/* icon */}
          <p>{count}</p>
          <p>{title}</p>
        </div>
        <div className="flex items-center">
          {/* icon */}
          <p>x {people}</p>
        </div>
      </div>
    </div>
  );
};

export default FarmsCard;
