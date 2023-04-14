import MetaMaskSDK from "@metamask/sdk";
import { useEffect, useState } from "react";

const MetamaskConnect = () => {

    const [account, setAccount] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [ethereum, setEthereum] = useState<any>(null);

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
        
        setAccount(accounts[0]);
        if(accounts.length>0){
          setIsConnected(true);
        } 
      };


    return !isConnected ? (
        <div className="ml-auto">
          <div className="w-full mx-auto flex  justify-end mt-5">
            <button
              onClick={async () => {
                await connect();
              }}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-lg rounded-lg p-3 "
            >
              Connect with Metamask
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-[900px] mx-auto">
          <div className=" flex justify-end mt-5">
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-lg rounded-lg p-3 disabled ">
              {account.slice(0, 5) + "...." + account.slice(39)}
            </button>
          </div>
          
        </div>
      );

    
}

export default MetamaskConnect;