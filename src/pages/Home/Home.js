import React from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsPentagon } from "react-icons/bs";
import Etherium from "../../assets/etherium.png"
import Bitcoin from "../../assets/bitcoin.png"
import Square from "../../assets/square.png"
import WebLogo from "../../assets/web-logo.png"
import LeftAngle from "../../assets/left_angle.png"
import RightAngle from "../../assets/right_angle.png"
import TempView from "../../assets/tmp_view.png"
import GameContainer from "../../components/gamingnft/GameContainer";
import PresalesContainer from "../../components/presales/PresalesContainer";
import UncxMain from "../../components/uncxmain/UncxMain";
import { UrlAccountCreator } from 'near-api-js/lib/account_creator';
import { FiHelpCircle } from "react-icons/fi";
import GameCard from "../../components/gamingnft/GameCard";
import BabyDoge from "../../assets/characters/Human_Male_RDM1.png";
import Graph from "../../assets/characters/Demon_Female_RDM1.png";
import Vempire from "../../assets/characters/Human_Female_RDM1.png";
const gamingNft = [
  {
    id: 1,
    images: BabyDoge,
    title: "BABY DOGE",
    price: 1652,
  },
  {
    id: 2,
    images: Graph,
    title: "GRAPH LINQ",
    price: 29,
  },
  {
    id: 3,
    images: Vempire,
    title: "vEMPIRE",
    price: 19,
  },

];
const Home = () => {
    return (
        <main>
      {/* container */}
      <div className='bg-cover bg-[url(./assets/demon_city.jpg)] h-screen'>
      <div className="md:py-10 py-5">
        {/* Total Value */}
        {/* <div className="flex md:flex-row flex-col-reverse md:items-center md:justify-around">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center text-center items-center mt-5">
          <BsPentagon className="text-purple-700 mr-2 text-[36px] font-extrabold h-8 -mt-2" />
            <p className="text-purple-700 text-[20px] font-[700]">$487,654,798</p>
            <span className="text-[#b9babb] mx-1 hidden md:inline">-</span>
            <p className="text-[#b9babb] text-[12px] font-[400]">Total Value locked across all AMMS</p>
          </div>
          
          <div className="text-white flex items-center justify-center space-x-2">
            <div className="flex items-center">
              <img src={Square} alt="" className="h-5 mr-2" />
              <p className="text-[12px] font-[500] text-[#b9babb]">$654.45</p>
              <MdKeyboardArrowUp className="text-[#b9babb]" />
            </div>
            <div className="flex items-center">
              <img src={Etherium} alt="" className="h-5 mr-2" />
              <p className="text-[12px] font-[500] text-[#b9babb]">$2.954</p>
              <MdKeyboardArrowUp className="text-[#b9babb]" />
            </div>
            <div className="flex items-center">
              <img src={Bitcoin} alt="" className="h-5 mr-2" />
              <p className="text-[12px] font-[500] text-[#b9babb]">$41.847</p>
              <MdKeyboardArrowUp className="text-[#b9babb]" />
            </div>
          </div>
        </div> */}
      </div>
      {/* UNCX Staking */}
      {/* <div className="md:w-9/12 md:mx-auto" style={{opacity: 0.9}}>
        <div className="flex items-center bg-[#1E2023] md:py-2 py-4 rounded-3xl md:ml-2 mx-2 pl-4">
          <img src={WebLogo} alt="" className="h-[40px] mr-2" />
          <p className="text-[#b9babb] md:text-[16px] text-xs">Earn fees from our ecosystem with <span className="text-purple-700 cursor-pointer">UNCX staking</span></p>
        </div>
      </div> */}
      {/* Component */}
      <GameContainer />
      <div className='text-white m-20'>
        <h1 className='font-bold text-2xl ml-10 mb-10'>SEND A SQUAD ON AN EXPEDITION</h1>
        <p className='text-2xl ml-10 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        <p className='text-2xl ml-10'>do eiusmod tempor incididunt ut labore.</p>
      </div>
      {/* <PresalesContainer />
      <UncxMain /> */}
      </div>
      <div className='bg-[#111111] h-screen px-20 flex justify-center'>
        <div className='w-11/12 border-2 border-white rounded-lg h-full p-10 flex justify-center'>
          <div className='w-2/5 px-10'>
            <h1 className='text-white text-2xl'>Create your warrior's team</h1>
            <div className="columns-2 py-5">
            {
                gamingNft.map((item) => (
                <GameCard key={item} images={item.images} title={item.title} price={item.price} />
                ))
            }

            </div>
          </div>
          <a href='' className='mt-20'><img src={LeftAngle} alt='' className='h-50'></img></a>
          <div className=''>
            <img src={TempView} alt='' className='bg-cover h-full'></img>
          </div>  
          <a href='' className='mt-20'><img src={RightAngle} alt='' className='h-50'></img></a>
        </div>
      </div>
      <div className='bg-cover bg-[url(./assets/demon_city.jpg)] h-screen px-20 pt-20'>
        <div className="md:w-11/12 md:mx-auto rounded-xl bg-[#000000bf] mt-20">
          <div className="">
            <div className="space-y-2 bg-[#323232] py-3 rounded-t-xl flex justify-between">
              <div className="flex justify-center w-11/12">
                <h3 className="text-white text-[20px] font-[500] font-bold">
                  CURRENTLY ON EXPEDITION
                </h3>
              </div>
              <FiHelpCircle className="text-white mr-5 cursor-pointer text-2xl" />
            </div>
            <div className="text-white flex justify-center py-10">
              <p>No active squads</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
};

export default Home;