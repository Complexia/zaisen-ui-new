import MetaMaskSDK from "@metamask/sdk";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setAccount } from '../store';

const MetamaskConnect = () => {

    const [accountAddress, setAccountAddress] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [ethereum, setEthereum] = useState<any>(null);

    const dispatch = useDispatch();

    

    useEffect (() => {
        const MMSDK = new MetaMaskSDK({
            injectProvider: typeof window.ethereum !== "undefined",
            //@ts-ignore
            communicationLayerPreference: "webrtc",
        });

        setEthereum(MMSDK.getProvider());


    }, [isConnected]);
    
      //const ethereum = MMSDK.getProvider();
      

    const connect = async () => {
        let accounts = await ethereum.request({
          method: "eth_requestAccounts",
          params: [],
        });
        
        setAccountAddress(accounts[0]);
        if(accounts.length>0){
          
          dispatch(setAccount(accounts[0]));
          setIsConnected(true);
        } 
      };

    const disconnect = async () => {
        
        let accounts = await ethereum.request({
          method: "eth_requestAccounts",
          params: [],
        });

        await ethereum.disconnect();
        setAccountAddress("");
        
        dispatch(setAccount(""));
        setIsConnected(false);
        
    }


    return !isConnected ? (
        <div className="ml-auto py-4 pr-4">
          <div className="w-full mx-auto flex  justify-end mt-5">
            <button
              onClick={async () => {
                await connect();
              }}
              className="text-white bg-gradient-to-r from-orange-500 to-orange-700 text-lg rounded-lg p-3 "
            >
              Connect with Metamask
            </button>
          </div>
        </div>
      ) : (
        <div className="ml-auto py-4 pr-4">
          <div className="w-full mx-auto flex  justify-end mt-5">
            <button className="text-white bg-gradient-to-r from-orange-500 to-orange-700 text-lg rounded-lg p-3 disabled">
              {accountAddress.slice(0, 5) + "...." + accountAddress.slice(39)}
            </button>
          </div>
          
        </div>
      );

    
}

export default MetamaskConnect;