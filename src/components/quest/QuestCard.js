
const QuestCard = ({images, title, during, cost, warriors, percentage, difficulty, reward}) => {
  return (
    <div className="bg-[#1E2023] rounded-xl shadow-md mb-2">
      {/* image */}
      <div className="">
         <img src={images} alt='' className="bg-auto"></img>   
      </div>
      <div className="flex justify-center text-white mt-5 text-2xl border-b">
          <h1>{title}</h1>
      </div>
      <div className="px-10 py7 mt-2">
        <div className="columns-2 text-white text-xl">
            <h2 className="">Time</h2>
            <h2 className="">Cost</h2>
        </div>
        <div className="columns-2 text-white">
            <div className="bg-[#000] rounded-lg p-2">
                <p>{during}</p>
            </div>
            <div className="bg-[#000] rounded-lg p-2">
                <p>{cost} $KAGE</p>
            </div>
        </div>
        <div className="columns-2 py-1 mt-2 text-xl">
            <h2 className="text-[#f00]">Warriors required</h2>
            <h2 className="text-white">{warriors} Minimum</h2>
        </div>  
        <div className="columns-2 text-xl py-1">
            <h2 className="text-[#f00]">Percentage Success</h2>
            <h2 className="text-white">{percentage}%</h2>
        </div>  
        <div className="columns-2 text-xl py-1">
            <h2 className="text-[#f00]">Difficulty</h2>
            <h2 className="text-white">{difficulty}</h2>
        </div>  
        <div className="columns-2 text-xl py-1">
            <h2 className="text-[#f00]">Potential Reward</h2>
            <h2 className="text-white">Pool of {reward} $$KAGE</h2>
        </div>
        <div className="columns-2 text-xl py-1">
            <h2 className="text-[#1E2023]">Potential Reward</h2>
            <h2 className="text-white">Common Lootbox</h2>
        </div>
        <div className="flex justify-center raid-btn">
            <div className="bg-[#440000] border border-[#ff0000] my-10 flex items-center md:px-[16px] px-[25px] py-2 rounded-lg md:h-[36px] md:min-w-[60px] cursor-pointer">
            <p className="mx-2 pr-2 text-[#ff0000]">Select Raid</p>
            </div>
        </div>  
      </div>      
    </div>
  );
};

export default QuestCard;
