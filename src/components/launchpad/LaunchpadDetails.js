import { useState } from "react";
import { Link } from "react-router-dom";
import Etherium from "../../assets/etherium.png";
const LaunchpadDetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" md:h-screen">
      <div className="md:w-10/12 md:mx-auto">
        <div className="md:flex md:justify-between md:pt-10 p-2 md:p-0" style={{opacity: 0.7}}>
          <div className="md:w-5/12 md:mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-800 to-pink-400 rounded-lg">
              <div className="space-y-2 py-[30px]">
                <p className="text-white text-[16px] font-[500] pl-5">
                  BOOST YOUR PRESALE SCORE
                </p>
                <Link to="/services/minter">
                  <p className="text-white text-[16px] font-[400] pl-5 bg-black w-10/12 mx-auto rounded-full py-1 cursor-pointer">
                    Mint a safe token (EMT)
                  </p>
                </Link>
              </div>
              {/* third */}
              <div className=" pl-5 pb-[30px]">
                <div className="space-y-3">
                  <p className="text-white text-[16px] font-[700]">
                    Highly recommended. Now with no zero flat rate fees!
                  </p>
                  <p className="text-white text-[12px] pr-6 pb-5">
                    Conducting a presale with an ENMT token means you get an
                    automatic token audit for free, and an additional green
                    badge on the presale. Give investors security and peace of
                    mind with a secure non mintable token contract.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-5 items-center justify-center space-x-2 border-2 rounded-full py-1 cursor-pointer my-10">
              <img src={Etherium} alt="" className="h-4" />
              <p className="text-[#b9babb]">Connect your wallet</p>
            </div>
          </div>

          {/* right side connect wallet */}
          <div className="md:w-5/12 md:mx-auto bg-[#454689] p-2 rounded-lg">
            <p className="text-[#b9babb] pb-2 pl-4 mt-5">Create your presale</p>
            {open ? (
              <div className="p-4">
              <p className="text-white pb-3">Token address</p>
              <div className="">
                <input
                  type="text"
                  placeholder="enter your token address..."
                  className="text-white bg-black py-4 rounded-xl pl-4 w-full border-none outline-none"
                />
              </div>
              <div className="flex items-center justify-between py-2 my-4 w-full">
                <p className="text-white">Buyers participate with</p>
                <div className="flex items-center bg-white px-3 py-1 rounded-full">
                  <img src={Etherium} alt="" className="h-5 mr-1" />
                  <p>NEAR</p>
                  {/* icon */}
                </div>
              </div>

              <p className="text-white">Token pair to be created</p>

              <p className="text-white py-3">NEAR/?</p>
            </div>
            ) : (
              <div className="flex items-center justify-center space-x-2 border-2 rounded-full my-10 mr-4 cursor-pointer mx-4"
              onClick={() => setOpen(true)}
              >
                <img src={Etherium} alt="" className="h-4" />
                <p className="text-[#b9babb]">Create your wallet to continue</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadDetails;
