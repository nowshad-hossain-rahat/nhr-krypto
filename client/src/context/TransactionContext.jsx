import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({
    provider,
    signer,
    transactionContract
  });

}


export const TransactionProvider = ({ children }) => {

  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {

    try {

      if(!ethereum) return alert("Please install Metamask!");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      setCurrentAccount(accounts[0]);

    } catch (error) {

      console.error(error);

      throw new Error("No ethereum object!");

    }

  }


  const checkIfWalletIsConnected = async () => {

    try {

      if (!ethereum) return alert("Please install Metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {

        setCurrentAccount(accounts[0]);

        // getAllTransactions

      } else {

        console.error("No accounts found!");

      }

    } catch (error) {

      console.error(error);
      console.error("No ethereum object!");

    }

  }


  useEffect(() => {

    checkIfWalletIsConnected();

  });


  return <TransactionContext.Provider value={{ getEthereumContract, connectWallet, currentAccount, setCurrentAccount }}>
    {children}
  </TransactionContext.Provider>;

}
