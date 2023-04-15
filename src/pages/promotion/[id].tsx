import React, { useEffect, useState } from "react";
import { IDKitWidget } from "@worldcoin/idkit";
import { useIDKit } from "@worldcoin/idkit";
import Image from "next/image";
const PromotionPage = () => {
  const { open, setOpen } = useIDKit();

  return (
    <div className="mx-auto w-5/6">
      <h1 className="text-3xl font-bold text-purple-500 mb-4">
        Promotion Name
      </h1>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">Chain Id:</p>
          <p>1234567890</p>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">Created At:</p>
          <p>2022-04-16 10:00:00 UTC</p>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">
            Creator Wallet Address:
          </p>
          <p>0x1234567890abcdef1234567890abcdef1234567</p>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">Group Id:</p>
          <p>12345</p>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">
            Maximum Amount of Claims:
          </p>
          <p>100</p>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">Badge Image:</p>
          <img
            src="/badge.png"
            alt="Badge Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">Description:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            eros blandit, cursus velit et, aliquam velit.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <p className="text-gray-500 font-bold mb-2">Content:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            eros blandit, cursus velit et, aliquam velit.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-2">
        <p className="text-gray-500 font-bold mb-2">Image:</p>
        <img
          src="/promotion.png"
          alt="Promotion Image"
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="text-white font-bold translate-y-1  hover:border-2 hover:border-black hover:text-black py-2 px-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:from-white hover:to-white"
        >
          Claim Now
        </button>
        <IDKitWidget
          app_id="app_7f95130da0a95eca5758819f652c5eb7"
          action="my_action"
          enableTelemetry
          onSuccess={(result) => console.log(result)} // pass the proof to the API or your smart contract
        />
      </div>
    </div>
  );
};

export default PromotionPage;
