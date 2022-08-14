// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { connectWallet, getAccount } from '../toolkit/wallet'
import { useState, useEffect } from 'react';

export const Connect = () => {
  const [ account, setaccount ] = useState( "" );

  useEffect( () => {
    ( async () => {
      const activeAccount = await getAccount();
      setaccount( activeAccount );
    } )();
  }, [] );


  const connectWalletHandler = async () => {
    await connectWallet();
    const activeAccount = await getAccount();
    setaccount( activeAccount );
  }
  return (
    <div>
      <button onClick={ connectWalletHandler }>
        { account !== "" ? account : "Connect Wallet" }
      </button>
    </div>
  );
};