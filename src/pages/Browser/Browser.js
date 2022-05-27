import React from "react";
import PresalesCard from "../../components/presales/PresalesCard";
import LaikaDoge from "../../assets/laikadoge.jpeg";
import Kanga from "../../assets/kanga.gif";
import Hourse from "../../assets/hourse.svg";
import BlueHourse from "../../assets/blue-horse.svg";
import PerformingCard from "../../components/uncxmain/PerformingCard";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import TokenCard from "../../components/browser/TokenCard";
import LocksCard from "../../components/uncxmain/LocksCard"

const presales = [
  {
    id: 1,
    images: LaikaDoge,
    title: "LaikaDoge",
    day: "in a day",
    price: 300,
  },

  {
    id: 2,
    images: Kanga,
    title: "KANGA",
    day: "in 2 days",
    price: 200,
  },
];

const Browser = () => {
  return (
    <div className="">
      <div className="md:w-6/12 md:mx-auto bg-[#030350] rounded-x1 mt-4" style={{opacity:0.8, borderRadius: 20}}>
        <div className="pb-10">
          {/* main file */}
          <ul
            className="
  nav nav-tabs nav-justified
  flex
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
      active
    
    "
                id="tabs-home-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-homeJustify"
                role="tab"
                aria-controls="tabs-homeJustify"
                aria-selected="true"
              >
                tokens
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
     
    "
                id="tabs-profile-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profileJustify"
                role="tab"
                aria-controls="tabs-profileJustify"
                aria-selected="false"
              >
                pairs
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
                aria-selected="false"
              >
                Launchpad
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tabs-tabContentJustify">
            <div
              className="tab-pane fade show active"
              id="tabs-homeJustify"
              role="tabpanel"
              aria-labelledby="tabs-home-tabJustify"
            >
              {/* services */}
              <div className="md:w-10/12 md:mx-auto bg-[#1E2023] pb-10 rounded-xl" style={{opacity: 0.9}}>
                <div>
                  <ul
                    class="nav nav-tabs flex flex-wrap list-none border-b border-gray-800 pl-0 mb-4"
                    id="tabs-tabFill"
                    role="tablist"
                  >
                    <li
                      class="nav-item flex-auto text-center"
                      role="presentation"
                    >
                      <a
                        href="#tabs-homeFill"
                        class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      px-6
      py-3
      my-2
      active
    "
                        id="tabs-home-tabFill"
                        data-bs-toggle="pill"
                        data-bs-target="#tabs-homeFill"
                        role="tab"
                        aria-controls="tabs-homeFill"
                        aria-selected="true"
                      >
                        All tokens
                      </a>
                    </li>
                    <li
                      class="nav-item flex-auto text-center"
                      role="presentation"
                    >
                      <a
                        href="#tabs-profileFill"
                        class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      
      px-6
      py-3
      my-2
     
    "
                        id="tabs-profile-tabFill"
                        data-bs-toggle="pill"
                        data-bs-target="#tabs-profileFill"
                        role="tab"
                        aria-controls="tabs-profileFill"
                        aria-selected="false"
                      >
                        Watchlist
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="tabs-tabContentFill" >
                    <div
                      class="tab-pane fade show active"
                      id="tabs-homeFill"
                      role="tabpanel"
                      aria-labelledby="tabs-home-tabFill"
                    >
                      {/* All Tokens */}
                      <div className="flex items-center py-1 md:mx-6 mx-2">
                        <input
                          type="text"
                          placeholder="Taken name or address..."
                          className="bg-black px-4 rounded-full py-4 border-none outline-none text-white w-full"
                          
                        />
                        {/* icon */}
                      </div>
                      {/* shorting */}
                      <div className="flex space-x-4 justify-end text-xs py-3 mr-6">
                        <div className="flex items-center">
                          {/* icon */}
                          <p className="text-white">Filter</p>
                          {/* icon */}
                        </div>
                        {/* icon */}
                        <div className="flex items-center space-x-2">
                          <p className="text-[#b9babb]">Sort</p>
                          <p className="text-white">vol</p>
                          {/* icon */}
                        </div>
                      </div>
                      {/* group-2 */}
                      <div className="flex items-center justify-between text-xs py-3 border-b border-t border-gray-800">
                        <div className="flex space-x-4 ml-6">
                          <div className="flex space-x-2 text-[#b9babb] items-center">
                            <img src={Hourse} alt="" className="h-5" />
                            <p>$564.45</p>
                            {/* icon */}
                          </div>
                          <div className="flex space-x-2 text-[#b9babb] items-center">
                            <img src={BlueHourse} alt="" className="h-5" />
                            <p>$564.45</p>
                            {/* icon */}
                          </div>
                        </div>
                        <div className="flex">{/* 4 icons */}</div>
                      </div>
                      {/* reusable components */}
                      <TokenCard />
                      <TokenCard />
                      <TokenCard />
                      <TokenCard />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="tabs-profileFill"
                      role="tabpanel"
                      aria-labelledby="tabs-profile-tabFill"
                    >
                      {/* Login */}
                      <div className="flex flex-col items-center justify-center text-white space-y-2 h-[45vh]">
                        <HiOutlineUser className="text-[80px]" />
                        <p className="text-sm">
                          Please log in in to access this section
                        </p>
                        <button
                          type="submit"
                          className="bg-purple-700 md:w-6/12 w-10/12 py-2 rounded-full "
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tabs-profileJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              {/* middle Minter */}
              <div className="bg-[#1E2023] rounded-xl" style={{opacity: 0.9}}>
                <div className="flex flex-col items-center justify-center py-10">
                  <p className="text-purple-700 text-[30px]">$190.47M</p>
                  <p className="text-[#b9babb] text-xs">
                    total value locked in 7099 pairs
                  </p>
                  <div className="flex space-x-2 py-1 mt-3 rounded-full bg-gradient-to-r from-sky-500 to-purple-900 px-10 text-white text-sm">
                    {/* lock icon */}
                    <p>lock</p>
                    <p>/</p>
                    <p>Withdraw liquidity</p>
                  </div>
                </div>
                {/* search */}
                <div className="flex items-center py-1 md:mx-6 mx-2">
                  <input
                    type="text"
                    placeholder="Pair name or address..."
                    className="bg-black px-4 rounded-full py-4 border-none outline-none text-white w-full"
                  />
                  {/* icon */}
                </div>
                {/* short value */}
                <div className="flex justify-end mr-6 py-2 space-x-2 text-xs">
                  <p className="text-[#b9babb]">Sort</p>
                  <p className="text-purple-700">Value</p>
                  {/* icon */}
                </div>
                {/* forwarding */}
                <div>{/* 4 icons */}</div>
                {/* reusable components */}
                <LocksCard />
                <LocksCard />
                <LocksCard />
                <LocksCard />
                <LocksCard />
                <LocksCard />
              </div>
            </div>
            {/* launchpad */}
            <div
              className="tab-pane fade"
              id="tabs-messagesJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              <div className="shadow-lg pb-10">
                <div className="py-5 shadow-2xl bg-[#1E2023]" style={{opacity: 0.9}}>
                  <div className="flex items-center">
                    <p className="text-white ml-4 hidden md:inline">LAUNCHPAD</p>
                    <div className="flex items-center py-1 md:w-[60%] mx-auto">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="bg-black px-4 rounded-full py-1 border-none outline-none text-white w-full"
                      />
                      {/* icon */}
                    </div>
                    {/* link add */}
                    <Link to="/services/launchpad/create">
                      <p className="text-white bg-orange-400 mr-4 rounded-full py-1 px-4 cursor-pointer">
                        Create Launch
                      </p>
                    </Link>
                  </div>
                  {/* agin tab bar */}
                  <div>
                    <ul
                      class="nav nav-tabs flex flex-wrap list-none border-b border-gray-700 pl-0 mb-4"
                      id="tabs-tabFill"
                      role="tablist"
                    >
                      <li
                        class="nav-item flex-auto text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-homeFill"
                          class="
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
                          id="tabs-home-tabFill"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-homeFill"
                          role="tab"
                          aria-controls="tabs-homeFill"
                          aria-selected="true"
                        >
                          upcoming
                        </a>
                      </li>
                      <li
                        class="nav-item flex-auto text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-profileFill"
                          class="
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
                          id="tabs-profile-tabFill"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-profileFill"
                          role="tab"
                          aria-controls="tabs-profileFill"
                          aria-selected="false"
                        >
                          Live
                        </a>
                      </li>
                      <li
                        class="nav-item flex-auto text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-messagesFill"
                          class="
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
                          id="tabs-messages-tabFill"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-messagesFill"
                          role="tab"
                          aria-controls="tabs-messagesFill"
                          aria-selected="false"
                        >
                          Success
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content" id="tabs-tabContentFill">
                      <div
                        class="tab-pane fade show active"
                        id="tabs-homeFill"
                        role="tabpanel"
                        aria-labelledby="tabs-home-tabFill"
                      >
                        <div>
                          {/* reusable */}
                          <div className="flex text-[#b9babb] justify-between bg-[#191B1D] py-2">
                            <p className="ml-4">2 Presales</p>
                            <div className="flex items-center space-x-4 mr-4">
                              <div>
                                <p>Profit</p>
                                {/* icon */}
                              </div>
                              <div>
                                {/* icon */}
                                <p>KYC only</p>
                              </div>
                              <p>?</p>
                            </div>
                          </div>
                          {/* component */}
                          <div>
                            <div>
                              {/* cart item */}
                              <div className="relative z-10 flex md:flex-col justify-center">
                                <div className="absolute border border-gray-800 w-full -z-10 -mt-[60px] hidden md:inline" />
                                <div className="columns-2 my-5 space-x-8">
                                  {presales.map((item) => (
                                    <PresalesCard
                                      key={item}
                                      images={item.images}
                                      title={item.title}
                                      day={item.day}
                                      price={item.price}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="md:columns-2">
                              <PerformingCard />
                              <PerformingCard />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-profileFill"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tabFill"
                      >
                        Tab 2 content fill
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-messagesFill"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tabFill"
                      >
                        Tab 3 content fill
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
