import React from "react";
import GameCard from "./GameCard";
import BabyDoge from "../../assets/characters/Human_Male_RDM1.png";
import Graph from "../../assets/characters/Demon_Female_RDM1.png";
import Vempire from "../../assets/characters/Human_Female_RDM1.png";
import { FiHelpCircle } from "react-icons/fi";

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

const GameContainer = () => {
  return (
    <div className="md:w-7/12 md:mx-auto rounded-xl bg-[#000000bf]">
      <div className="">
        <div className="space-y-2 bg-[#323232] py-3 rounded-t-xl flex justify-between">
          <div className="flex justify-center w-11/12">
            <h3 className="text-white text-[20px] font-[500] font-bold">
              MY WARRIORS
            </h3>
          </div>
          <FiHelpCircle className="text-white mr-5 cursor-pointer text-2xl" />
        </div>
        <div className="text-white flex justify-center mt-7">
          <p>fund 3 characters</p>
        </div>
        <div className="md:columns-3 columns-2 py-5 p-10">
            {
                gamingNft.map((item) => (
                <GameCard key={item} images={item.images} title={item.title} price={item.price} />
                ))
            }
          
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
