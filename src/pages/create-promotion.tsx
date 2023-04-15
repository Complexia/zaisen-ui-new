// components/PromotionForm.tsx
import { useState } from 'react';
import { ethers } from 'ethers';
import MetaMaskSDK from "@metamask/sdk";

import { useSelector } from "react-redux";
import { PromosMainABI } from '@/abis/promotionMainABI';




// Define contract interface
interface PromoContract {
    yourContractFunction(name: string, description: string, numberOfClaims: number, sismoGroupId: string, transactionParameters: any): Promise<string>;
  }
  
  // Set up provider and contract variables
  const MMSDK = new MetaMaskSDK({
        injectProvider: typeof window.ethereum !== "undefined",
        //@ts-ignore
        communicationLayerPreference: "webrtc",
    });
  
  const ethereum = MMSDK.getProvider(); 

  const contractAddress = 'YOUR_CONTRACT_ADDRESS';
  const contractABI = ['ABI_OF_YOUR_CONTRACT'];
  const contract = new ethers.Contract(contractAddress, contractABI, ethereum) as unknown as PromoContract;
  
  // Define function to make contract call
  const callFunction = async (from: any, to: any, ABI: any, functionName: any, _params: any, value: any) => {
    const iface = new ethers.utils.Interface(ABI);
    const data = iface.encodeFunctionData(functionName, _params);
    const params = [
      {
        from,
        to,
        value,
        data,
      },
    ];

    try {
        const result = await ethereum.request({ method: "eth_sendTransaction", params });
        return result;
      } catch (error) {
        console.log("Failed");
        console.log(error);
        return error;
      } 
      
  };




interface Params {
  name: string;
  description: string;
  numberOfClaims: string;
  sismoGroupId: string;
}

const PromotionForm = () => {
  let accountFrom: any = useSelector((state: any) => state.account.account);
  let accountTo: any = "sdsd";
  let abi: any = PromosMainABI();
  let functionName = "createPromotion"

  let _params = [44787, 3, "hsdh", "0x740e65d093db34a7ffbb144a2caff7489eb10ba4"];

  let response = callFunction(accountFrom, accountTo, abi, functionName, _params, 12);
  console.log(response)
  const [step, setStep] = useState(1);
  const [params, setParams] = useState<Params>({
    name: '',
    description: '',
    numberOfClaims: '',
    sismoGroupId: '',
  });

  const handleInputChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log(params);
    
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Name of Promotion:</label>
            <input
              type="text"
              name="name"
              value={params.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 2:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Description of Promotion:</label>
            <input
              type="text"
              name="description"
              value={params.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 3:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Number of Claims:</label>
            <input
              type="text"
              name="numberOfClaims"
              value={params.numberOfClaims}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      case 4:
        return (
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2">Sismo Group ID (Optional):</label>
            <input
              type="text"
              name="sismoGroupId"
              value={params.sismoGroupId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded-xl shadow-md">
      {renderStep()}
      <div className="mt-4">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            onClick={handleNext}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

const CreatePromotion = () => {
    return (
        <div className='h-screen text-black font-bold'>
            <PromotionForm />
        </div>
    )
}

export default CreatePromotion;
