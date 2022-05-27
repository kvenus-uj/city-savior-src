import TokenLogoOne from "../../assets/token-logo-1.png"
const TokenCard = () => {
  return (
    <div className="p-3 hover:bg-[#22272C] border-b border-gray-800">
      <div className="flex justify-between items-center space-y-2">
        <div className="flex items-center space-x-2">
          <img src={TokenLogoOne} alt="" className="h-5 rounded-full" />
          <p className="text-white">DERC</p>
          {/* icon */}
        </div>
        <div>
          <p className="text-white">$1.46</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-[#b9babb] space-y-2">
        <div className="flex">
          <p>#1</p>
          <p>DeRace Token</p>
        </div>
        <div className="flex">
          <p>vol:</p>
          <p>$4.17B</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-[#b9babb] space-y-2">
        <div className="flex">
          <p>Pair index:</p>
          <p>49980</p>
        </div>
        <div className="flex">
          <p>dmcap:</p>
          <p>$154.93M</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <div className="flex space-x-1 border-b-4 pb-1 border-orange-600">
          <p className="text-[#b9babb]">30d:</p>
          <p className="text-orange-600">-28.4%</p>
        </div>
        <div className="flex space-x-1 border-b-4 pb-1 border-green-700">
          <p className="text-[#b9babb]">7d:</p>
          <p className="text-pink-700">7.2%</p>
        </div>
        <div className="flex space-x-1 border-b-4 pb-1 border-pink-700">
          <p className="text-[#b9babb]">1d:</p>
          <p className="text-pink-700">5.5%</p>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
