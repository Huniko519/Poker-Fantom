import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import introLogo from "../assets/1.png";
import { ethers } from "ethers";
import Abi from "../contract/abi.json";

var tokenAddress = "0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b";
var myContract = new ethers.Contract(tokenAddress, Abi);
var adminAddress = "0xf85002E99c20b3c7DC3e6B0B5203292Dcd349421";

const Home = (props) => {
  const { setAvailable, setPreAvailable } = props;
  const [chipCount, setChipCount] = useState(0);
  const [walletAddress, setWalletAddress] = useState(null);
  const [depositWait, setDepositWait] = useState(false);

  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = async () => {
    if (window.ethereum) {
      try {
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        console.log(accounts);
        setWalletAddress(window.ethereum.selectedAddress);
        const signer = provider.getSigner();
        var MyContract = myContract.connect(signer);
        console.log(MyContract);
        let balance = await MyContract.balanceOf(
          window.ethereum.selectedAddress
        );
        console.log(balance.toString());
        setChipCount(balance.toString());
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleConnect = () => {
    if (window.ethereum) {
      try {
        window.ethereum.enable().then((res) => {
          console.log("public key is ", window.ethereum.selectedAddress);
          setWalletAddress(window.ethereum.selectedAddress);
          if (res) {
            getBalance();
          }
          // User has allowed account access to DApp...
        });
      } catch (e) {
        // User has denied account access to DApp...
      }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
      // web3 = new Web3(web3.currentProvider);
    }
    // Non-DApp Browsers
    else {
      alert("You have to install MetaMask !");
    }
  };

  const handlePrePlay = () => {
    setPreAvailable(true);
  };

  const handleDeposit = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    var MyContract = myContract.connect(signer);
    var tx = await MyContract.transfer(adminAddress, 10).catch((err) => {
      console.log(err);
    });
    if (tx != undefined) {
      setDepositWait(true);
      await tx.wait();
      setAvailable(true);
    }
  };
  return (
    <div className="loading-container">
      <div className="game-action-bar">
        <div className="logo">
          <img src={logo} alt="logo" width="30px" />
        </div>
        <div className="logo">
          <button className="x-connect-button" onClick={handlePrePlay}>
            preplay
          </button>
        </div>
        <div className="logo">
          <button className="x-connect-button" onClick={handleConnect}>
            {walletAddress ? chipCount : "Connect"}
          </button>
        </div>
      </div>
      <div className="x-grid1">
        <div className="spinner-container">
          <img src={introLogo} alt="Loading..." />
        </div>
        <div className="x-font1 x-home-text-content">
          {walletAddress
            ? chipCount >= 10
              ? "please deposit ATRI Token to enjoy!"
              : "You need to deposit a minimum of 1000 ATRI \n in your Metamask wallet to start the game!"
            : "please connect metamask to play Atari Poker!"}
        </div>
        <div className="x-deposit-pending">
          {depositWait ? "deposit progress is pending.   Please wait..." : null}
        </div>
        <div className="x-home-text-content">
          {/* {chipCount>=100&&!depositWait?
						<button className = "x-connect-button" onClick = {handleDeposit}>Deposit</button>
						:null
					} */}
          <button className="x-connect-button" onClick={handleDeposit}>
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
