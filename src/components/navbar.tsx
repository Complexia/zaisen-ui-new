import { ConnectButton } from "@rainbow-me/rainbowkit";
import MetamaskConnect from "./metamaskConnectButton";
import LensConnect from "./lensConnectButton";

export default function Navbar() {
  return (
    <nav className="flex top-0 justify-between w-full pr-4 mr-auto gap-8 relative">
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}></a>
      <div className="flex items-center">
        <div className="pr-2">
          <LensConnect />
        </div>
        <MetamaskConnect />
      </div>
    </nav>
  );
}
