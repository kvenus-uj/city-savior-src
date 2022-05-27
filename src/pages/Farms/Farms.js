import WebLogo from "../../assets/web-logo.png";
import NoIcon from "../../assets/no-icon.png";
import FarmsCard from "../../components/farms/FarmsCard";

const farmsItem = [
  {
    id: 1,
    images : WebLogo,
    title : "UNICX",
    count : "1,145.54",
    people : "113"
  },
  {
    id: 2,
    images : NoIcon,
    title : "UNI-V2",
    count : "10,548.23",
    people : "27"
  },
  {
    id: 3,
    images : WebLogo,
    title : "ACCE",
    count : "60",
    people : "3"
  },
  {
    id: 4,
    images : NoIcon,
    title : "SHUNG",
    count : "1,250,000",
    people : "2"
  },
  {
    id: 5,
    images : NoIcon,
    title : "TEST V3",
    count : "11",
    people : "1"
  },
  {
    id: 6,
    images : WebLogo,
    title : "UNICX",
    count : "1,454",
    people : "789"
  },
  {
    id: 7,
    images : NoIcon,
    title : "TEST V4",
    count : "11",
    people : "1"
  },
  {
    id: 3,
    images : WebLogo,
    title : "ACCE",
    count : "40",
    people : "5"
  }
];

const Farms = () => {
  return (
    <div className="py-10">
      <div className="md:w-9/12 md:mx-auto">
        <div className="flex items-center bg-[#454689] md:py-5 py-4 rounded-3xl md:ml-2 mx-2 pl-4" style={{opacity: 0.8}}>
          <img src={WebLogo} alt="" className="h-[40px] mr-2" />
          <p className="text-[#f6e3fb] md:text-[16px] text-xs">
            Earn fees from our ecosystem with{" "}
            <span className="text-purple-700 cursor-pointer">UNCX staking</span>
          </p>
        </div>
        {/* main */}
        <div className="p-4">
          <div>
            <p className="text-white text-[24px] font-[600]">Stake</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-[#b9babb]">12 pools</p>
            <div className="flex items-center">
              {/* icon */}
              <div className="flex items-center mr-5 space-x-2">
                <p className="text-sm text-[#b9babb]">sort</p>
                <p className="text-sm text-white">num stakers</p>
                {/* icon */}
              </div>
              <p className="text-purple-600">create</p>
            </div>
          </div>
          {/* component card */}
          <div className="lg:grid lg:grid-cols-4 lg:gap-2">
          {
            farmsItem.map((items) => (
              <FarmsCard key={items.id} images={items.images} title={items.title} count={items.count} people={items.people} />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farms;
