import DocLock from "../../assets/doc-lock.svg";
import Token from "../../assets/token.svg";
import Rocket from "../../assets/rocket.svg";
import Etherium from "../../assets/etherium.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import LaunchpadDetails from "./LaunchpadDetails";

const Minter = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="pb-10">
        {/* main file */}
        <ul
          className="
            w-4/12 mx-auto
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
          id="tabs-tabJustify"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-homeJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      
      px-6
      py-3
      my-2
      
      
    "
              id="tabs-profile-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileJustify"
              role="tab"
              aria-controls="tabs-profileJustify"
              aria-selected="false"
            >
              Services
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profileJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      
      px-6
      py-3
      my-2
      active
      
    "
              id="tabs-home-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeJustify"
              role="tab"
              aria-controls="tabs-homeJustify"
              aria-selected="true"
            >
              Minter
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-messagesJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
     
      px-6
      py-3
      my-2
      
    "
              id="tabs-messages-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesJustify"
              role="tab"
              aria-controls="tabs-messagesJustify"
              aria-selected="true"
            >
              Launchpad
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContentJustify">
          <div
            className="tab-pane fade"
            id="tabs-profileJustify"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabJustify"
          >
            {/* services */}
            <div className="shadow-lg w-4/12 mx-auto">
              <div className="text-center py-5 shadow-2xl bg-[#1E2023]" style={{opacity: 0.8}}>
                <p className="text-white text-[16px] font-[400]">Our Service</p>
              </div>
              {/* first one */}
              <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer" style={{opacity: 0.8}}>
                <div className="mr-2 p-2">
                  <img src={Token} alt="" className="h-10" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-[400]">
                    Token Minter
                  </p>
                  <p className="text-[#b9babb] text-[12px] font-[400]">
                    ENMT tokens are fully  compliant Non-Mintable Tokens.
                    Use the Astrovault Token
                  </p>
                </div>
              </div>

              {/* third */}
              <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer" style={{opacity: 0.8}}>
                <div className="mr-2 p-2">
                  <img src={Rocket} alt="" className="h-10" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-[400]">Launchpad</p>
                  <p className="text-[#b9babb] text-[12px] font-[400]">
                    Raise capitial to kick start your blockchain project
                  </p>
                  <p className="text-[#b9babb] text-[12px] font-[400]">
                    Decentralised presale service
                  </p>
                </div>
              </div>
              {/* four */}
              <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer" style={{opacity: 0.8}}>
                <div className="mr-2 p-2">
                  <img src={DocLock} alt="" className="h-10" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-[400]">
                    Token Minter
                  </p>
                  <p className="text-[#b9babb] text-[12px] font-[400]">
                    ENMT tokens are fully  compliant Non-Mintable Tokens.
                    Use the Astrovault Token
                  </p>
                </div>
              </div>
              {/* five */}
              <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer" style={{opacity: 0.8}}>
                <div className="mr-2 p-2">
                  <img src={DocLock} alt="" className="h-10" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-[400]">
                    Token Minter
                  </p>
                  <p className="text-[#b9babb] text-[12px] font-[400]">
                    ENMT tokens are fully  compliant Non-Mintable Tokens.
                    Use the Astrovault Token
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show active"
            id="tabs-homeJustify"
            role="tab"
            aria-labelledby="tabs-home-tabJustify"
          >
            {/* middle Minter */}
            <div className="w-10/12 mx-auto" style={{opacity: 0.7}}>
              <div className="flex justify-between mt-10">
                <div className="shadow-lg w-5/12 mx-auto">
                  <div className="py-5 shadow-2xl bg-[#454689]">
                    <p className="text-white text-[16px] font-[400] pl-5">
                      ENMT Token Minter
                    </p>
                  </div>
                  {/* third */}
                  <div className=" bg-[#454689] py-4 border-b border-gray-800 pl-5">
                    <div>
                      <p className="text-white text-[12px] pr-6 text-justify">
                        NMT tokens are fully  compliant Non-Mintable
                        Tokens. Use the Astrovault Token factory to mint your very
                        own token at the click of a button. Your ENMT token will
                        be shown favourably in the Astrovault browser and bypass
                        the need for an audit on the token contract itself, as
                        well as when using our ILO dapp. Anyone can query our
                        ENMT token mint factory with your token address to see
                        your new token is a valid, safe, and  compliant
                        token.
                      </p>
                      <p className="text-white text-center py-5 text-[16px] font-[400]">
                        ENMT Token specs
                      </p>
                      <p className="text-white text-[14px]">No mint function</p>
                      <p className="text-white text-[14px]">
                        No owner / admin functions
                      </p>
                      <p className="text-white text-[14px]">
                        No unsafe code in the token contract itself
                      </p>
                      <p className="text-white text-[14px]">
                        Fully  compliant
                      </p>
                      <p className="text-white text-[14px] pb-5">
                        Fully decentralised
                      </p>
                    </div>

                    {open ? (
                      <div>
                        {/* Form */}
                        <div className="p-4">
                          <p className="text-white text-center pb-3">
                            Mint your own ENMT token
                          </p>
                          <div className="flex flex-col space-y-2">
                            <input
                              type="text"
                              placeholder="Token Name"
                              className="text-white bg-black py-4 rounded-xl pl-4 border-none outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Token Symbol"
                              className="text-white bg-black py-4 rounded-xl pl-4 border-none outline-none"
                            />
                          </div>
                          <p className="text-white text-center py-3 text-xs">
                            Total supply (excluding decimals e.g. 100 tokens)
                          </p>
                          <input
                            type="text"
                            placeholder="Token Supply"
                            className="text-white bg-black py-4 rounded-xl pl-4 w-full border-none outline-none"
                          />
                          <p className="text-white text-center py-3 text-xs">
                            Decimals (18 recommendation)
                          </p>
                          <input
                            type="text"
                            placeholder="18"
                            className="text-white bg-black py-4 rounded-xl pl-4 w-full border-none outline-none"
                          />
                          <p className="text-white text-center py-3 text-xs">
                            Total supply (including decimals - row amount)
                          </p>
                          <div className="pb-3">
                            <p className="text-white text-center pt-2">
                              Fee: 0 NEAR
                            </p>
                            <p className="text-[#b9babb] text-center text-xs">
                              +0.3% total supply
                            </p>
                          </div>

                          <button
                            type="submit"
                            className="text-white bg-pink-700 w-full text-center py-3 rounded-full"
                          >
                            Mint a new token
                          </button>
                          {/* <div className="flex items-center justify-center space-x-2 border-2 rounded-full py-1 mr-4 cursor-pointer">
                            <img src={Etherium} alt="" className="h-4" />
                            <p className=" text-pink-700 text-center">
                              Connect your wallet
                            </p>
                          </div> */}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="border-2 rounded-full py-1 mr-4 cursor-pointer"
                        onClick={() => setOpen(true)}
                      >
                        <p className="text-[#b9babb] text-center">
                          Create your own token
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* right side connect wallet */}
                <div className="w-5/12 mx-auto">
                  <div className="border-2 rounded-full py-1 mr-4 mb-5 cursor-pointer">
                    <p className="text-[#b9babb] text-center">
                      Connect your wallet
                    </p>
                  </div>
                  <Link to="/services/launchpad/create">
                    <div className="flex items-center justify-center space-x-2 border-2 rounded-full py-1 mr-4 cursor-pointer">
                      <img src={Etherium} alt="" className="h-4" />
                      <p className="text-pink-700">Launch your own token!</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messagesJustify"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabJustify"
          >
            <LaunchpadDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minter;
