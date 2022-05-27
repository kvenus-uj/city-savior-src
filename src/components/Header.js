import uniCrypt from "../assets/web-logo.png";
// import { Link } from "react-router-dom";
import * as nearAPI from "near-api-js";
const {connect, keyStores, WalletConnection  } = nearAPI;
// const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

async function  walletConnect(){
  console.log("clicked");
  // connect to NEAR
  const near = await connect({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() }, ...config });
  // create wallet connection
  const wallet = new WalletConnection(near);
  console.log("window wallet==>", wallet);
  wallet.requestSignIn(
    "dev-1622556560424-4870693", 
    "Astrovault" // contract requesting access
  );
  
}

const Header = () => {
  return (
    <header className="bg-[#1E2023] md:h-[75px] h-[65px] grid md:grid-cols-[250px_1fr_300px] grid-cols-3 md:items-center md:justify-center px-4 top-0 sticky z-[99]"
    style={{opacity: 0.9, backgroundColor: '#020206'}}>{/*#020206*/}
      {/* logo */}
      <div className="cursor-pointer hidden md:inline">
        <img src={uniCrypt} alt="" width={"80px"} />
      </div>
      {/* menu items */}
      <div className="flex items-center text-[14px] text-white space-x-4">
        {/* <div className="md:flex items-center bg-[#2196f3] px-[16px] py-2 rounded-full hidden">
          <MdLocalFireDepartment />
          <Link to="/">
          <p className="ml-2 cursor-pointer">Dashboard</p>
          </Link>
          
        </div> */}
        {/* <div className="hover:bg-[#2196f3] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline">
          <Link to="/browser">
          <p>Browser</p>
          </Link>
          
        </div> */}
        {/* <Link to="/services">
        <p className="hover:bg-[#2196f3] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline">
          Services
        </p>
        </Link> */}
        
        {/* <div className="hover:bg-[#2196f3] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline"> */}
          {/* icon */}
          {/* <Link to="/farms">
          <p>Farms</p>
          </Link> */}
        {/* </div> */}
       
        
        {/* <p className="hover:bg-[#2196f3] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline">Docs</p> */}
        {/* <div className="py-2 rounded-full cursor-pointer flex">
          <GiHamburgerMenu className="h-6 w-6 md:hidden" />
          <FaTelegramPlane className="h-6 w-6 ml-5" />
        </div> */}
      </div>
      {/* connect wallet */}
      <div className="flex items-center justify-center text-white" onClick={(e)=>walletConnect()}>
        <div className="border border-[#ff0000] mr-2 flex items-center md:px-[16px] px-[25px] py-2 rounded-lg md:h-[36px] md:min-w-[60px] cursor-pointer">
          {/* <img src={Etherium} alt="" className="w-5 h-5" /> */}
          <p className="mx-2 pr-2 text-[#ff0000]">Buy $KAGE</p>
        </div>
        <div className="bg-[#8d1616] flex items-center md:px-[16px] px-[25px] py-2 rounded-full md:h-[36px] md:min-w-[60px] cursor-pointer border border-[#FF0000]">
          {/* <img src={Etherium} alt="" className="w-5 h-5" /> */}
          <p className="mx-2 pr-2">Sellet Wallet</p>
        </div>
        {/* <div className="ml-4 hover:bg-[#454649] p-[10px] rounded-full cursor-pointer">
          <RiUserShared2Line />
        </div>
        <div className="ml-4 hover:bg-[#454649] p-[10px] rounded-full cursor-pointer">
          <BiSun />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
