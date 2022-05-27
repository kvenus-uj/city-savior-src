import ProCircle from "../../assets/circle.jpg";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { BsTwitter, BsGlobe, BsPieChartFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosRocket, IoMdLock } from "react-icons/io";
import { HiDocumentText, HiUser } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";

const PerformingCard = ({images, title}) => {
  return (
    <div className="bg-[#1E2023] p-4 rounded-xl shadow-md mb-2" style={{opacity: 0.8}}>
      {/* top */}
      <div className="flex items-center mb-[12px]">
        <div className="bg-gray-900 flex items-center space-x-4 rounded-full px-6 mr-6 py-1 text-xs">
          <div className="text-[#b9babb] flex items-center space-x-1">
            <p>chart</p>
            <MdKeyboardArrowDown />
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-purple-700">1895%</p>
            <MdKeyboardArrowUp className="text-[#b9babb]" />
          </div>
        </div>
        <div className="text-purple-700 flex items-center space-x-1 text-sm">
          <p>200X.%</p>
          <IoIosRocket />
        </div>
      </div>
      {/* overmoon */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex">
          <img src={images} alt="" className="h-[60px] rounded-full" />
          {/* moon */}
          <div className="ml-5 space-y-2">
            <div className="flex items-center justify-center -ml-[90px]">
              <p className="text-white font-[700]">{title}</p>
              <MdKeyboardArrowUp className="text-[#b9babb]" />
              <div className="text-[#b9babb] flex space-x-1">
                <BsTwitter className="text-sm" />
                <FaTelegramPlane className="text-sm" />
                <BsGlobe className="text-sm" />
              </div>
            </div>
            <div className="flex text-white items-center font-[500] text-sm">
              <IoMdLock />
              <p>60%</p>
              <div className="flex bg-[#1060d8]  px-[10px] rounded-full space-x-1 items-center ml-2">
                <BsPieChartFill className="text-sm" />
                <p>99%</p>
              </div>
              <div className="flex bg-orange-500 px-[10px] mx-2 rounded-full space-x-1 items-center">
                <HiDocumentText />
                <p>Audit</p>
              </div>
              <BiSearch className="bg-[#1060d8] text-lg rounded-full p-[2px] m-1" />
            </div>
          </div>
          </div>
          <img src={ProCircle} alt="" className="rounded-full h-8" />
        </div>
      </div>
      <div className="flex justify-between text-[#b9babb] text-xs my-2">
        <p>Presale ended</p>
        <p>Markets initialized</p>
      </div>
      <div className="flex justify-between text-white bg-gradient-to-r from-blue-500 to-indigo-800 rounded-full my-1 font-[700] text-[14px]">
        <p className="ml-5">300 / 300 NEAR</p>
        <p className="mr-5">1.5 NEAR</p>
      </div>
      <div className="flex justify-between text-sm font-[400]">
        <p className="text-white bg-gradient-to-r from-blue-500 to-indigo-800 w-5/12 rounded-full text-center font-[700] text-[12px]">40/40</p>
        <div className="flex text-[#b9babb] items-center">
          <HiDocumentText />
          <p>158/158</p>
        </div>
        <div className="flex text-white items-center space-x-3">
          <p>0</p>
          <FiMessageSquare />
          <p>209</p>
          <HiUser />
        </div>
      </div>
    </div>
  );
};

export default PerformingCard;
