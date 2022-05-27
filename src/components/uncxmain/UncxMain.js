import Horse from "../../assets/hourse.svg";
import BlueHorse from "../../assets/blue-horse.svg";
import DocLock from "../../assets/doc-lock.svg";
import Token from "../../assets/token.svg";
import Rocket from "../../assets/rocket.svg";
import Progetto from "../../assets/Progetto-senza-titolo-73-2.png";
import NoImoji from "../../assets/no-icon.png";
import Etherium from "../../assets/etherium.png";
import Plot from "../../assets/plot.png";
import Usdt from "../../assets/usdt.png";
import Peace from "../../assets/peace.jpeg";
import Square from "../../assets/square.png";
import PerformingCard from "./PerformingCard";
import { IoMdLock } from "react-icons/io";
import LocksCard from "./LocksCard";
import ServiceCard from "./ServiceCard";

const Performing = [
  {
    id: 1,
    images: Progetto,
    title: "OverMoon",
  },
  {
    id: 2,
    images: Plot,
    title: "PLOT",
  },
  {
    id: 3,
    images: Progetto,
    title: "MOON",
  },
];

const Services = [
  {
    id: 1,
    images: Token,
    title: "Documentation",
    subTitle: "Read about all of our services",
  },
  {
    id: 2,
    images: DocLock,
    title: "Liquidity Locker",
    subTitle: "Lock Liquidity tokens",
  },
  {
    id: 3,
    images: Token,
    title: "Token Locker",
    subTitle: "Lock your team tokens",
  },
  {
    id: 4,
    images: DocLock,
    title: "Token Minter",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequuntur",
  },
  {
    id: 5,
    images: Rocket,
    title: "LaunchPad",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequuntur",
  },
];

const locks = [
  {
    id: 1,
    imoji: Usdt,
    imojiTitle: "USDT",
    coin: NoImoji,
    coinTitle: "MFT",
    coinPrice: 107,
    coinDays: "(75.5%) next in 4 days",
    Liquidity: 142,
  },
  {
    id: 2,
    imoji: Peace,
    imojiTitle: "WINU",
    coin: Square,
    coinTitle: "NEAR",
    coinPrice: 330,
    coinDays: "(97.2%) next in a month",
    Liquidity: 123,
  },
  {
    id: 3,
    imoji: NoImoji,
    imojiTitle: "TITAN",
    coin: Etherium,
    coinTitle: "NEAR",
    coinPrice: 107,
    coinDays: "(89.5%) next in 3 days",
    Liquidity: 339,
  },
  {
    id: 4,
    imoji: NoImoji,
    imojiTitle: "PUFA",
    coin: Etherium,
    coinTitle: "NEAR",
    coinPrice: 648,
    coinDays: "(89.5%) next in 3 days",
    Liquidity: 744,
  },
  {
    id: 5,
    imoji: NoImoji,
    imojiTitle: "LLTH",
    coin: Etherium,
    coinTitle: "NEAR",
    coinPrice: 107,
    coinDays: "(99.5%) next in a month",
    Liquidity: 149,
  },
];

const UncxMain = () => {
  return (
    <div className="md:w-9/12 md:mx-auto">
      <div className="flex space-x-4 md:pt-20">
        <div className="pb-20">
          <div className="flex items-center mx-4">
            <div className="flex md:px-10 px-4 items-center bg-[#1E2023] py-2 rounded-tl-2xl rounded-bl-2xl space-x-2">
              <img src={Horse} alt="" className="h-7" />
              <div className="flex space-x-2">
                <p className="text-white text-[16px] font-[500]">UNCX</p>
                <p className="text-purple-700 text-[16px] font-[500]">
                  $377.06
                </p>
              </div>
            </div>
            <div className="flex md:px-10 px-4  items-center bg-[#22272C] py-2 rounded-tr-2xl rounded-br-2xl space-x-2 hover:bg-[#1E2023]">
              <img src={BlueHorse} alt="" className="h-7" />
              <div className="flex space-x-2">
                <p className="text-white text-[16px] font-[500]">UNCL</p>
                <p className="text-purple-700 text-[16px] font-[500]">$28.37</p>
              </div>
            </div>
          </div>
          {/* barchart */}
          {/* right div */}
          <div className="py-5">
            <p className="text-white text-center font-[600] text-[20px] mb-3">
              Recent Top performing ILO's
            </p>
            {/* component */}
            {Performing.map((item) => (
              <PerformingCard
                key={item}
                images={item.images}
                title={item.title}
              />
            ))}
          </div>

          {/* New Liquidity Locks */}
          <div className="py-5">
            <div className="text-white flex flex-col md:flex-row items-center md:items-center font-[400] text-[16px] bg-black/30 py-4 space-x-2 pl-2">
              <IoMdLock />
              <p>New Liquidity Locks (>100k)</p>
            </div>
            {/* component */}
            {locks.map((item) => (
              <LocksCard
                key={item}
                imoji={item.imoji}
                imojiTitle={item.imojiTitle}
                coin={item.coin}
                coinTitle={item.coinTitle}
                coinPrice={item.coinPrice}
                coinDays={item.coinDays}
                Liquidity={item.Liquidity}
              />
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="pt-5 w-6/12 -mt-10 hidden md:inline">
          <div className="text-center py-5 shadow-2xl bg-[#03101d]" style={{opacity: 0.9}}>
            <p className="text-white text-[16px] font-[400]">
              Astrovault Service
            </p>
            <p className="text-[12px] text-[#b9babb] font-[400]">
              For developers
            </p>
          </div>
          {/* map */}
          {Services.map((items) => (
            <ServiceCard
              key={items}
              images={items.images}
              title={items.title}
              subTitle={items.subTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UncxMain;
