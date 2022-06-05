import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import { Col, Row, Button, Form, Card, Badge } from "react-bootstrap";
import AlertDismissible from './alert/alertDismissible';

import LeftAngle from "./assets/left_angle.png";
import RightAngle from "./assets/right_angle.png";
import { FiHelpCircle } from "react-icons/fi";
// import GameCard from "./components/gamingnft/GameCard";
// import BabyDoge from "./assets/characters/Human_Male_RDM1.png";
// import Graph from "./assets/characters/Demon_Female_RDM1.png";
// import Vempire from "./assets/characters/Human_Female_RDM1.png";
import gameQuest from "./components/quest/QuestData";
import QuestCard from './components/quest/QuestCard';

import { Connection, PublicKey } from '@solana/web3.js';
import {
  Program, Provider, web3, utils, BN
} from '@project-serum/anchor';
// import { programs } from '@metaplex/js';
import idl from './idl.json';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
// const { Metadata, MetadataDataData, CreateMetadata, Creator } =
//   programs.metadata;
// const { SystemProgram, Keypair } = web3;
// /* create an account  */
// const baseAccount = Keypair.generate();
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);
const opts = {
  preflightCommitment: "processed"
}
const programID = new PublicKey(idl.metadata.address);
// const gamingNft = [
//   {
//     id: 1,
//     images: BabyDoge,
//     title: "BABY DOGE",
//     price: 1652,
//   },
//   {
//     id: 2,
//     images: Graph,
//     title: "GRAPH LINQ",
//     price: 29,
//   },
//   {
//     id: 3,
//     images: Vempire,
//     title: "vEMPIRE",
//     price: 19,
//   },

// ];
var idx = 0;


function App(props) {
  const wallet = useWallet();
  const { publicKey } = useWallet();
  const { connection } = props;
  const [curQuest, setcurQuest] = useState(gameQuest[0]);

  const [nfts, setNfts] = useState([]);
  const [groupedNfts, setGroupedNfts] = useState([]);
  const [view, setView] = useState('collection');
  //alert props
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  //loading props
  const [loading, setLoading] = useState(false);

  async function getProvider() {
    /* create the provider and return it to the caller */
    /* network set to local network for now */
    const network = "https://api.devnet.solana.com";
    const connection = new Connection(network, opts.preflightCommitment);

    const provider = new Provider(
      connection, wallet, opts.preflightCommitment,
    );
    return provider;
  }

  // let authorizedNameStarts = [''];
  // let minimumStakingPeriod = new BN(1);
  // let maximumStakingPeriod = new BN(100);
  let userAuryRewardAmount = new BN(20);
  const auryMintPubkey = new PublicKey('H6c2qLB48STy7GzcCFmDvxdpaQNX5dW8pJxSD2oPoGKg');
  const userAuryTokenAccount = new PublicKey('GRepK8DwFPfdktKpFSLrC62GZim3o4bruy4cL9Q7McuS');

  let userStakingPeriod = new BN(19);
  let auryDepositAmount = new BN(1e9);
  const [provider, setProvier] = useState([]);
  const [program, setProgram] = useState([]);
  const [stakingPubkey, setStakingPK] = useState([]);
  const [stakingBump, setStakingBump] = useState([]);
  const [auryVaultPubkey, setAuryValtPK] = useState([]);
  const [auryVaultBump, setAuryValtBump] = useState([]);
  const [userStakingCounterPubkey, setUserSCPK] = useState([]);
  const [userStakingCounterBump, setUserSCB] = useState(0);
  const [userStakingPubkey, setUserSPK] = useState([]);
  const [userStakingBump, setUserSB] = useState(0);
  const [userStakingIndex, setUserStakingIndex] = useState(0);
  const [curPos, setPos] = useState(0);
  const [changeFlag, setFlag] = useState(false);
  const [nftIdx, setNFT] = useState(0);
  const [nftmintPubkey, setNftPubkey] = useState([]);
  const [userNFTTokenAccount, setNftATA] = useState([]);

  async function valInit() {
    let provider = await getProvider();
    setProvier(provider);
    let program = new Program(idl, programID, provider);
    setProgram(program);
    console.log('PID:',program.programId.toString());
    let stakingPubkey;
    let stakingBump;
    [stakingPubkey, stakingBump] =
    await web3.PublicKey.findProgramAddress(
      [Buffer.from(utils.bytes.utf8.encode('nft_staking'))],
      program.programId
    );
    setStakingPK(stakingPubkey);
    setStakingBump(stakingBump);
    console.log('nft_staking:', stakingPubkey.toString(), stakingBump);
    let auryVaultPubkey, auryVaultBump;
    [auryVaultPubkey, auryVaultBump] =
    await web3.PublicKey.findProgramAddress(
      [auryMintPubkey.toBuffer()],
      program.programId
    );
    setAuryValtPK(auryVaultPubkey);
    setAuryValtBump(auryVaultBump);
    console.log('kageVault:', auryVaultPubkey.toString(), auryVaultBump);
    let userStakingCounterPubkey, userStakingCounterBump;
    [userStakingCounterPubkey, userStakingCounterBump] =
    await web3.PublicKey.findProgramAddress(
      [provider.wallet.publicKey.toBuffer()],
      program.programId
    );
    setUserSCPK(userStakingCounterPubkey);
    setUserSCB(userStakingCounterBump);
    console.log('usc:', userStakingCounterPubkey.toString(), userStakingCounterBump);
    if(changeFlag === false)
    {
      const curStakeIdx =
        await program.account.userStakingCounterAccount.fetch(userStakingCounterPubkey);
      setUserStakingIndex(curStakeIdx.counter);
    }
    console.log(userStakingIndex);
    let userStakingPubkey, userStakingBump;
    [userStakingPubkey, userStakingBump] =
    await web3.PublicKey.findProgramAddress(
      [
        Buffer.from(
          utils.bytes.utf8.encode(
            new BN(userStakingIndex).toString()
          )
        ),
        provider.wallet.publicKey.toBuffer(),
      ],
      program.programId
    );
    setUserSPK(userStakingPubkey);
    setUserSB(userStakingBump);
    const pk = new PublicKey(nfts[nftIdx].mint);
    const [pdaAddress] = await web3.PublicKey.findProgramAddress(
        [
            provider.wallet.publicKey.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            pk.toBuffer(),
        ],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    );
    setNftATA(pdaAddress);
    setNftPubkey(pk);
    console.log('nftmint:', nftmintPubkey.toString());
    console.log("ATA:", userNFTTokenAccount.toString());
    console.log('userStaking:', userStakingPubkey.toString(), userStakingBump);
  }

  // async function initializePro() {
  //   try {
  //     /* interact with the program via rpc */
  //     await program.rpc.initialize(
  //       stakingBump,
  //       auryVaultBump,
  //       provider.wallet.publicKey,
  //       authorizedNameStarts,
  //       minimumStakingPeriod,
  //       maximumStakingPeriod,
  //       {
  //         accounts: {
  //           stakingAccount: stakingPubkey,
  //           auryMint: auryMintPubkey,
  //           auryVault: auryVaultPubkey,
  //           initializer: provider.wallet.publicKey,
  //           systemProgram: web3.SystemProgram.programId,
  //           tokenProgram: TOKEN_PROGRAM_ID,
  //           rent: web3.SYSVAR_RENT_PUBKEY,
  //         },
  //       }
  //     );
  //   } catch (err) {
  //     console.log("Transaction error: ", err);
  //   }
  //   const stakingAccount = await program.account.stakingAccount.fetch(
  //     stakingPubkey
  //   );
  //   console.log('initialize: ', stakingAccount.adminKey.toString());
  // }

  async function stake() {
    valInit();
    let [pubkey, bump] = await web3.PublicKey.findProgramAddress(
      [provider.wallet.publicKey.toBuffer(), nftmintPubkey.toBuffer()],
      program.programId
    );
    let nftVaultBump = [];
    nftVaultBump.push(bump);
    let nftVaultBumps = Buffer.from([nftVaultBump[0]]);
    let nftMetadataPubkey = new PublicKey('9Qgd7qMLoLLfZhygmoUqLNrudmeJTFB1VFLGZZwHySkU');//await Metadata.getPDA(nftmintPubkey);
    let remainingAccounts = [
      {
        pubkey: nftmintPubkey,
        isWritable: false,
        isSigner: false,
      },
      {
        pubkey: nftMetadataPubkey,
        isWritable: false,
        isSigner: false,
      },
      {
        pubkey: userNFTTokenAccount,
        isWritable: true,
        isSigner: false,
      },
      {
        pubkey: pubkey,
        isWritable: true,
        isSigner: false,
      },
    ];
    try {
      await program.rpc.stake(
        nftVaultBumps,
        stakingBump,
        userStakingCounterBump,
        userStakingBump,
        {
          accounts: {
            nftFromAuthority: provider.wallet.publicKey,
            stakingAccount: stakingPubkey,
            userStakingCounterAccount: userStakingCounterPubkey,
            userStakingAccount: userStakingPubkey,
            systemProgram: web3.SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            rent: web3.SYSVAR_RENT_PUBKEY,
          },
          remainingAccounts,
        }
      );
      setPos(1);
      
    } catch (err) {
      console.log("Transaction error: ", err);
    }
    console.log("Stake");
  }

  async function lockStake() {
    await program.rpc.lockStake(
      stakingBump,
      userStakingCounterBump,
      userStakingBump,
      auryVaultBump,
      userStakingPeriod,
      auryDepositAmount,
      {
        accounts: {
          nftFromAuthority: provider.wallet.publicKey,
          stakingAccount: stakingPubkey,
          userStakingCounterAccount: userStakingCounterPubkey,
          userStakingAccount: userStakingPubkey,
          auryMint: auryMintPubkey,
          auryVault: auryVaultPubkey,
          auryFrom: userAuryTokenAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
      });
      setPos(2);
      console.log('lockStake');
  }

  async function addAuryWinner() {
    let winnerStakingIndexes = Buffer.from([userStakingIndex]);
    let winners = [provider.wallet.publicKey];
    let auryAmounts = [
      userAuryRewardAmount.div(new BN(2)),
    ];
    let remainingAccounts = [
      {
        pubkey: userStakingPubkey,
        isWritable: true,
        isSigner: false,
      },
    ];

    await program.rpc.addAuryWinner(
      stakingBump,
      auryVaultBump,
      winnerStakingIndexes,
      winners,
      auryAmounts,
      {
        accounts: {
          stakingAccount: stakingPubkey,
          auryMint: auryMintPubkey,
          auryVault: auryVaultPubkey,
          auryFrom: userAuryTokenAccount,
          admin: provider.wallet.publicKey,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
        remainingAccounts,
      }
    );
    setPos(3);
    console.log('addAuryWinner');
  }

  async function claimAury() {
    await program.rpc.claimAuryReward(
      auryVaultBump,
      userStakingIndex,
      userStakingBump,
      {
        accounts: {
          auryMint: auryMintPubkey,
          auryVault: auryVaultPubkey,
          auryTo: userAuryTokenAccount,
          auryToAuthority: provider.wallet.publicKey,
          userStakingAccount: userStakingPubkey,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
      }
    );
    setPos(4);
  }

  async function unStake() {
    let [pubkey] = await web3.PublicKey.findProgramAddress(
      [provider.wallet.publicKey.toBuffer(), nftmintPubkey.toBuffer()],
      program.programId
    );
    let remainingAccounts = [
      {
        pubkey: userNFTTokenAccount,
        isWritable: true,
        isSigner: false,
      },
      {
        pubkey: pubkey,
        isWritable: true,
        isSigner: false,
      },
    ];
    await program.rpc.unstake(
      stakingBump,
      userStakingIndex,
      userStakingBump,
      {
        accounts: {
          nftToAuthority: provider.wallet.publicKey,
          stakingAccount: stakingPubkey,
          userStakingAccount: userStakingPubkey,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
        remainingAccounts,
      }
    );
    setPos(5);
  }

  async function closeStake() {
    await program.rpc.closeUserStaking(
      userStakingIndex,
      userStakingBump,
      {
        accounts: {
          nftToAuthority: provider.wallet.publicKey,
          userStakingAccount: userStakingPubkey,
          // systemProgram: anchor.web3.SystemProgram.programId,
          // tokenProgram: TOKEN_PROGRAM_ID,
          // rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        },
      }
    );
    setPos(0);
  }

  async function prevQuest() {
    if(idx > 0)
      idx--;
    setcurQuest(gameQuest[idx]);
    setFlag(true);
    if(userStakingIndex > 0)
      setUserStakingIndex(userStakingIndex-1);  
    valInit();          
  }
  async function nextQuest() {
    if(idx < 2)
      idx++;
    setcurQuest(gameQuest[idx]);
    setFlag(true);
    setUserStakingIndex(userStakingIndex+1);
    valInit();
  }

  // input ref
  const inputRef = useRef();

  // state change
  useEffect(() => {
    setNfts([]);
    setView("collection");
    setGroupedNfts([]);
    setShow(false);
     if (publicKey) {
       //inputRef.current.value = publicKey;
     }
    //  initializePro();
  }, [publicKey, connection]);


  const getNfts = async (e) => {
    e.preventDefault();

    setShow(false);

    let address = inputRef.current.value;

    if (address.length === 0) {
      address = publicKey;
    }

    if (!isValidSolanaAddress(address)) {
      setTitle("Invalid address");
      setMessage("Please enter a valid Solana address or Connect your wallet");
      setLoading(false);
      setShow(true);
      return;
    }

    const connect = createConnectionConfig(connection);

    setLoading(true);
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress: address,
      connection: connect,
      serialization: true,
    });


    if (nftArray.length === 0) {
      setTitle("No NFTs found in " + props.title);
      setMessage("No NFTs found for address: " + address);
      setLoading(false);
      setView('collection');
      setShow(true);
      return;
    }

    const metadatas = await fetchMetadata(nftArray);
    var group = {};

    for (const nft of metadatas) {
      if (group.hasOwnProperty(nft.data.symbol)) {
        group[nft.data.symbol].push(nft);
      } else {
        group[nft.data.symbol] = [nft];
      }
    }
    setGroupedNfts(group);
    console.log(group);
  
    setLoading(false);
    valInit();
    return setNfts(metadatas);
  };

  const fetchMetadata = async (nftArray) => {
    let metadatas = [];
    for (const nft of nftArray) {
      console.log(nft);
      try {
        await fetch(nft.data.uri)
        .then((response) => response.json())
        .then((meta) => { 
          metadatas.push({...meta, ...nft});
        });
      } catch (error) {
        console.log(error);
      }
    }
    return metadatas;
  };

  return (
    <div>
      <div className='bg-cover bg-[url(./assets/demon_city.jpg)] h-screen'>
      <div className="md:py-10 py-5"></div>
      {/* <GameContainer /> */}
      <div className="md:w-7/12 md:mx-auto rounded-xl bg-[#000000bf]">
        <div className="">
          <div className="relative space-y-2 bg-[#323232] py-3 rounded-t-xl flex justify-between">
            <div className="flex justify-center w-11/12">
              <h3 className="text-white text-[20px] font-[500] font-bold">
                MY WARRIORS
              </h3>
            </div>
            <FiHelpCircle className="text-white mr-5 cursor-pointer text-2xl" />
          </div>
          {/* <div className="text-white flex justify-center mt-7">
            <p>fund 3 characters</p>
          </div> */}
          <div className="">
            <Row className="inputForm">
              <Col xs="12" md="12" lg="7">
                <Form.Control
                  type="text"
                  ref={inputRef}
                  placeholder="Wallet address"
                />
              </Col>
              <Col xs="12" md="12" lg="4" className="d-grid">
                <Button
                  variant={props.variant.toLowerCase()}
                  type="submit"
                  onClick={getNfts}
                >
                  Get NFTs from {props.title}
                </Button>
              </Col>
              <Col lg="1">
                {view === "nft-grid" && (
                  <Button
                    size="md"
                    variant="danger"
                    onClick={() => {
                      setView("collection");
                    }}
                  >
                    Close
                  </Button>
                )}
              </Col>
            </Row>
            {loading && (
              <div className="loading">
                <img src="loading.gif" alt="loading" />
              </div>
            )}
            <Row>
              {!loading &&
                view === "collection" &&
                Object.keys(groupedNfts).map(
                  (metadata, index) => (
                    (
                      <Col xs="12" md="6" lg="3" key={index}>
                        <Card
                          onClick={() => {
                            setNfts(groupedNfts[metadata]);
                            setView("nft-grid");
                          }}
                          className="imageGrid"
                          lg="3"
                          style={{
                            width: "100%",
                            backgroundColor: "#2B3964",
                            padding: "10px",
                            borderRadius: "10px",
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={groupedNfts[metadata][0]?.image}
                            alt={groupedNfts[metadata][0]?.name}
                            style={{
                              borderRadius: "10px",
                            }}
                          />
                          <Card.Body>
                            <span>
                              <Card.Title style={{ color: "#fff" }}>
                                {metadata}
                              </Card.Title>
                              <Badge
                                pill
                                bg={props.variant.toLowerCase()}
                                text="light"
                              >
                                <h6>{groupedNfts[metadata].length}</h6>
                              </Badge>
                            </span>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  )
                )}
            </Row>
            {
              <Row>
                {!loading &&
                  view === "nft-grid" &&
                  nfts.map((metadata, index) => (
                    <Col xs="12" md="6" lg="3" key={index}>
                      <Card
                        onClick={() => {
                          console.log(nfts[index].mint);
                          setNFT(index);
                          setView('collection');
                        }}
                        className="imageGrid"
                        lg="3"
                        style={{
                          width: "100%",
                          backgroundColor: "#2B3964",
                          padding: "10px",
                          borderRadius: "10px",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={metadata?.image}
                          alt={metadata?.name}
                        />
                        <Card.Body>
                          <Card.Title style={{ color: "#fff" }}>
                            {metadata?.name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            }
            {show && (
              <AlertDismissible title={title} message={message} setShow={setShow} />
            )}
          </div>
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 text-white mx-20 my-10'>
        <h1 className='font-bold text-2xl ml-10 mb-7'>SEND A SQUAD ON AN EXPEDITION</h1>
        <p className='text-2xl ml-10 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        <p className='text-2xl ml-10'>do eiusmod tempor incididunt ut labore.</p>
      </div>
      </div>
      <div className='bg-[#111111] h-screen px-20 flex justify-center'>
        <div className='w-11/12 border-2 border-white rounded-lg h-full p-10 flex justify-center'>
          <div className='w-2/5 pr-10 h-full'>
            <h1 className='text-white text-2xl'>Create your warrior's team</h1>
            <div className="columns-2 py-5 h-full">
              {!loading &&
                <Card
                  className="myGrid"
                  lg="3"
                  style={{
                    width: "100%",
                    backgroundColor: "#2B3964",
                    padding: "10px",
                    borderRadius: "10px",
                    display: 'inline-block'
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={nfts[nftIdx]?.image}
                    alt={nfts[nftIdx]?.name}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "#fff" }}>
                      {nfts[nftIdx]?.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              }
            {/* {
                gamingNft.map((item) => (
                <GameCard key={item} images={item.images} title={item.title} price={item.price} />
                ))
            } */}
            </div>
          </div>
          <div className='mt-20'><img src={LeftAngle} alt='' className='h-30 cursor-pointer hover:opacity-50' onClick={(e)=>prevQuest()}></img></div>
          <div className='w-1/2'>
            <QuestCard key={curQuest.id} images={curQuest.images} title={curQuest.title} 
              during={curQuest.during} cost={curQuest.cost} warriors={curQuest.warriors} 
              percentage={curQuest.percentage} difficulty={curQuest.difficulty} 
              reward={curQuest.reward} 
              />
          </div>  
          <div className='mt-20'><img src={RightAngle} alt='' className='h-30 cursor-pointer hover:opacity-50' onClick={(e)=>nextQuest()}></img></div>
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
              {/* <p>No active squads</p> */}
              {/* <Button onClick={initializePro} className="mx-2">Init</Button> */}
              {curPos===0 && (<Button onClick={stake} className="mx-2">Stake</Button>)}
              {curPos===1 && (<Button onClick={lockStake} className="mx-2">Lock</Button>)}
              {curPos===2 && (<Button onClick={addAuryWinner} className="mx-2">AddR</Button>)}
              {curPos===3 && (<Button onClick={claimAury} className="mx-2">Claim</Button>)}
              {curPos===4 && (<Button onClick={unStake} className="mx-2">Unstake</Button>)}
              {curPos===5 && (<Button onClick={closeStake}>Close</Button>)}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
