import { useState } from "react";
import Image from "next/image";
export default function CreatePromotion() {
  const [option, setOption] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [groupId, setGroupId] = useState("");
  const [image, setImage] = useState(null);
  const [chain, setChain] = useState("");
  const [tokenType, setTokenType] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [thresholdCount, setThresholdCount] = useState("");
  const [gmail, setGmail] = useState("");
  const handleSubmitCrossChain = (e: any) => {
    e.preventDefault();
    // TODO: submit form data
  };
  const handleSubmitNativeChain = (e: any) => {
    e.preventDefault();
    // TODO: submit form data
  };
  return (
    <div className="bg-white h-full">
      {option == 0 ? (
        <p className="text-black text-xl font-bold text-center">
          Create Promotions
        </p>
      ) : option == 1 ? (
        <div className="flex justify-start">
          <button
            onClick={() => {
              setOption(0);
            }}
            className="w-[150px] text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-xl "
          >
            ⬅️ Back
          </button>
          <p className="text-black text-xl font-bold text-center mt-2 mx-10 w-full">
            Create Data Group
          </p>
        </div>
      ) : option == 2 ? (
        <div className="flex justify-start">
          <button
            onClick={() => {
              setOption(0);
            }}
            className="w-[150px] text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-xl "
          >
            ⬅️ Back
          </button>
          <p className="text-black text-xl font-bold text-center mt-2 mx-10 w-full">
            Cross-chain zkProofs
          </p>
        </div>
      ) : option == 3 ? (
        <div className="flex justify-start">
          <button
            onClick={() => {
              setOption(0);
            }}
            className="w-[150px] text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-xl "
          >
            ⬅️ Back
          </button>
          <p className="text-black text-xl font-bold text-center mt-2 mx-10 w-full">
            Apply custom RPC
          </p>
        </div>
      ) : (
        <div className="flex justify-start">
          <button
            onClick={() => {
              setOption(0);
            }}
            className="w-[150px] text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-xl "
          >
            ⬅️ Back
          </button>
          <p className="text-black text-xl font-bold text-center mt-2 mx-10 w-full">
            CREATE DATA GROUP
          </p>
        </div>
      )}
      {option == 0 ? (
        <div className="bg-white h-screen">
          <div>
            <div className="flex justify-start mt-8 ">
              <p className="text-black bg-white  px-4 py-2  font-bold text-xl rounded-l-xl border-2 border-black">
                1
              </p>
              <button
                className="text-white text-xl px-4 py-2  font-bold   bg-gradient-to-r rounded-r-xl  from-purple-500 to-purple-800"
                onClick={() => {
                  setOption(1);
                }}
              >
                Native-Chain Promotions
              </button>
            </div>
            <div className="flex justify-start my-4">
              <Image
                src={"/ethereum.png"}
                width={100}
                height={100}
                alt="Ethereum"
                className="mx-5"
              />
              <Image
                src={"/polygon.jpg"}
                width={100}
                height={100}
                alt="Ethereum"
                className="mx-5"
              />
              <Image
                src={"/gnosis.jpg"}
                width={100}
                height={100}
                alt="Ethereum"
                className="mx-5"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-start mt-8 ">
              <p className="text-black bg-white  px-4 py-2  font-bold text-xl rounded-l-xl border-2 border-black">
                2
              </p>
              <button
                className="text-white text-xl px-4 py-2  font-bold   bg-gradient-to-r rounded-r-xl  from-purple-500 to-purple-800"
                onClick={() => {
                  setOption(2);
                }}
              >
                Cross-Chain Promotions
              </button>
            </div>
            <div className="flex justify-start my-4">
              <Image
                src={"/scroll.png"}
                width={100}
                height={100}
                alt="Ethereum"
                className="mx-5 rounded-full"
              />
              <Image
                src={"/mantle.jpg"}
                width={100}
                height={100}
                alt="Ethereum"
                className="mx-5"
              />
              <Image
                src={"/celo.jpg"}
                width={100}
                height={100}
                alt="Ethereum"
                className="mx-5"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-start mt-8 ">
              <p className="text-black bg-white  px-4 py-2  font-bold text-xl rounded-l-xl border-2 border-black">
                3
              </p>
              <button
                className="text-white text-xl px-4 py-2  font-bold   bg-gradient-to-r rounded-r-xl  from-purple-500 to-purple-800"
                onClick={() => {
                  setOption(3);
                }}
              >
                Custom-Chain Promotions
              </button>
            </div>
            <div className="flex justify-start my-4">
              <Image
                src={"/random.jpg"}
                width={100}
                height={100}
                alt="Ethereum"
                className="mx-5 rounded-full"
              />
            </div>
          </div>
        </div>
      ) : option == 1 ? (
        <div className="bg-white h-screen">
          <form
            onSubmit={handleSubmitNativeChain}
            className="bg-purple-500 p-6 rounded-lg text-black my-5"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-white font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-white font-bold mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="groupId"
                className="block text-white font-bold mb-2"
              >
                GroupId
              </label>
              <input
                type="text"
                id="groupId"
                value={groupId}
                onChange={(e) => setGroupId(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-white font-bold mb-2"
              >
                Image (Optional)
              </label>
              <input
                type="file"
                id="image"
                onChange={(
                  e //@ts-ignore
                ) => setImage(e.target.files[0])}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-purple-500 py-2 px-4 rounded shadow-sm hover:bg-purple-100 focus:outline-none focus:shadow-outline-purple"
            >
              Submit
            </button>
          </form>
        </div>
      ) : option == 2 ? (
        <div className="bg-white h-screen">
          <form
            onSubmit={handleSubmitCrossChain}
            className="bg-purple-500 p-6 rounded-lg text-black my-5"
          >
            <div className="mb-4">
              <label
                htmlFor="chain"
                className="block text-white font-bold mb-2"
              >
                Chain
              </label>
              <select
                id="chain"
                value={chain}
                onChange={(e) => setChain(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              >
                <option value="">Select Chain</option>
                <option value="Celo">Celo</option>
                <option value="Mantle">Mantle</option>
                <option value="Scroll">Scroll</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="tokenType"
                className="block text-white font-bold mb-2"
              >
                Token Type
              </label>
              <select
                id="tokenType"
                value={tokenType}
                onChange={(e) => setTokenType(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              >
                <option value="">Select Token Type</option>
                <option value="ERC20">ERC20</option>
                <option value="ERC721">ERC721</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="contractAddress"
                className="block text-white font-bold mb-2"
              >
                Contract Address
              </label>
              <input
                type="text"
                id="contractAddress"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="thresholdCount"
                className="block text-white font-bold mb-2"
              >
                Threshold Count
              </label>
              <input
                type="number"
                id="thresholdCount"
                value={thresholdCount}
                onChange={(e) => setThresholdCount(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gmail"
                className="block text-white font-bold mb-2"
              >
                Gmail
              </label>
              <input
                type="email"
                id="gmail"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                className="w-full px-3 py-2 rounded shadow-sm focus:outline-none focus:shadow-outline-purple"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-purple-500 py-2 px-4 rounded shadow-sm hover:bg-purple-100 focus:outline-none focus:shadow-outline-purple"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white h-screen">
          <p>RPC URL</p>
          <p>Chain ID</p>
          <p>Email</p>
        </div>
      )}
    </div>
  );
}
