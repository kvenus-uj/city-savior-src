import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

const LocksCard = ({
    imoji, imojiTitle, coin, coinTitle, coinPrice, coinDays, Liquidity
}) => {
  return (
    <div className='bg-[#1E2023] hover:bg-gray-800 p-4 shadow-md border-b border-gray-800' style={{opacity:0.9}}>
        <div className='flex items-center justify-between'>
            <div className="space-y-2">
                <div className="flex items-center space-x-1">
                    <img src={imoji} alt="" className="h-6 rounded-full" />
                    <p className="text-white font-[500]">{coinTitle}</p>
                    <MdKeyboardArrowUp className="text-[#b9babb]" />
                    <img src={coin} alt="" className="h-6" />
                    <p className="text-white font-[500]">{imojiTitle}</p>
                    <MdKeyboardArrowUp className="text-[#b9babb]"  />

                </div>
                <div className="flex items-center space-x-1 text-xs">
                    <p className="text-[#b9babb] font-[500]">Liquidity: </p>
                    <p className="text-purple-700">${Liquidity}k</p>
                </div>

            </div>
            {/* right */}
            <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center text-pink-700 space-x-1">
                    <p>${coinPrice}k</p>
                    <IoMdLock className="border-2 rounded-full border-pink-700 text-xl p-[1px]" />
                </div>
                <div className="flex items-center text-[#b9babb] text-xs">
                    <p>{coinDays}</p>
                    <MdKeyboardArrowDown />
                </div>
            </div>

        </div>
    </div>
  )
}

export default LocksCard