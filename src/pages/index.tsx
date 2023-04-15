import UpcomingPromotions from "../components/upcomingPromotions";
import IndexContainer from "../components/indexContainer";
import MyNFTs from "../components/myNFTs";
import HotPromotions from "../components/hotPromotions";
import LatestSocials from "../components/latestSocials";
import { useSelector } from "react-redux";

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

        <main className="flex flex-col items-center justify-between min-h-screen min-w-max w-full mt-[60px] ">
          <div className="w-full">
            <span className="text-black font-bold">My NFTs</span>
            <IndexContainer>
              <MyNFTs />
            </IndexContainer>
          </div>

          <div className="w-full">
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
            </div>
          </div>
        </main>
  );
}
