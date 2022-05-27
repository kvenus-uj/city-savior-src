import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
// navbar
// import { MdLocalFireDepartment } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E2023] text-[#B9BABB] bottom-0 w-full z-10" style={{opacity: 0.9, backgroundColor: '#020206'}}>
      <div className="flex items-center justify-center space-x-8 md:py-5">
        <div className="md:inline-flex hidden space-x-6 ">
          <BsTwitter className="h-7 w-8 cursor-pointer" />
          <FaTelegramPlane className="h-7 w-8 cursor-pointer" />
        </div>
        <div className="md:inline-flex hidden space-x-8 text-[14px]">
          <p className="cursor-pointer">Terms and Conditions</p>
          <p className="cursor-pointer hidden md:inline">Privacy Policy</p>
          {/* <p className="cursor-pointer hidden md:inline">unicrypt.network</p> */}
        </div>
        {/* navbar route */}
        <div className="flex items-center text-[12px] text-white space-x-4 md:hidden">
          <div className="flex flex-col items-center px-[16px] py-2 rounded-full hover:bg-[#454649]">
            {/* <MdLocalFireDepartment /> */}
            <Link to="/">
              <p className="cursor-pointer">DASH</p>
            </Link>
          </div>
          <div className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer">
            <Link to="/browser">
              <p>BROWSER</p>
            </Link>
          </div>
          <Link to="/services">
            <p className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer">
              SERVICES
            </p>
          </Link>

          <div className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer">
            {/* icon */}
            <Link to="/farms">
              <p>FARMS</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
