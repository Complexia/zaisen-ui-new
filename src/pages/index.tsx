import UpcomingPromotions from "@/components/upcomingPromotions";
import IndexContainer from "../components/indexContainer";
import MyNFTs from "@/components/myNFTs";
import HotPromotions from "@/components/hotPromotions";
import LatestSocials from "@/components/latestSocials";
import { useSelector } from "react-redux";
import LensConnect from "@/components/lensConnectButton";
import {
  AuthType,
  SismoConnectButton,
  SismoConnectClientConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";
import axios from "axios";
import { useState } from "react";

export const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x112a692a2005259c25f6094161007967",
  devMode: {
    enabled: true,
  },
};
export default function Home() {
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const verify = async (response: SismoConnectResponse) => {
    console.log(response);
    setVerifying(true);
    try {
      await axios.post(`/api/zk-response`, {
        response,
      });
      setIsVerified(true);
    } catch (e) {
      setError("Invalid response");
      console.error(e);
    } finally {
      setVerifying(false);
    }
  };
  let account: any = useSelector((state: any) => state.account.account);
  console.log(account);

  return (
    <main className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center">
        {!isVerified ? (
          <>
            <SismoConnectButton
              config={sismoConnectConfig}
              auths={[{ authType: AuthType.VAULT }]}
              onResponse={(response: SismoConnectResponse) => verify(response)}
              verifying={verifying}
              callbackPath={"/"}
              overrideStyle={{ marginBottom: 10 }}
            />
            <>{error}</>
          </>
        ) : (
          "Response verified!"
        )}
        <div className="w-screen">
          <div className="h-[10px]"></div>
          <div className="flex justify-center ml-[200px] z-30">
            <p className="text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-2xl mt-6 mb-12">
              For You
            </p>
          </div>

          <div className="h-[20px]"></div>
          <MyNFTs props={(account = account)} />
        </div>
        <div className="w-screen">
          <div className="h-[10px]"></div>
          <div className="flex justify-center ml-[200px] z-30">
            <p className="text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-2xl mt-6 mb-12">
              For You
            </p>
          </div>

          <div className="h-[20px]"></div>
          <MyNFTs props={(account = account)} />
        </div>
        <div className="w-screen">
          <div className="h-[10px]"></div>
          <div className="flex justify-center ml-[200px] z-30">
            <p className="text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-2xl mt-6 mb-12">
              For You
            </p>
          </div>

          <div className="h-[20px]"></div>
          <MyNFTs props={(account = account)} />
        </div>
        <div className="w-screen">
          <div className="h-[10px]"></div>
          <div className="flex justify-center ml-[200px] z-30">
            <p className="text-white bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-2 rounded-md  inline font-bold text-2xl mt-6 mb-12">
              For You
            </p>
          </div>

          <div className="h-[20px]"></div>
          <MyNFTs props={(account = account)} />
        </div>

        {/* <div className="w-full">
          <span className="text-black font-bold">Upcoming promotions</span>
          <IndexContainer>
            <UpcomingPromotions />
          </IndexContainer>
        </div>

        <div className="w-full flex flex-wrap justify-between">
          <div className="w-1/2">
            <span className="text-black font-bold">Hot promos</span>
            <IndexContainer>
              <HotPromotions />
            </IndexContainer>
          </div>
          <div className="w-1/2">
            <span className="text-black font-bold">Latest socials</span>
            <IndexContainer>
              <LatestSocials />
            </IndexContainer>
          </div> */}
        {/* </div> */}
      </div>
    </main>
  );
}
