import MetamaskConnect from "./metamaskConnectButton";
import LensConnect from "./lensConnectButton";
import NotificationIcon from "./notificationIcon";
import SismoConnect from "./sismoConnectButton";

export default function Navbar() {
  return (
    <nav className="top-0 right-0 l">
      <div className="flex ml-auto">
        <div className="pr-2">
          <NotificationIcon />
        </div>
        <div className="pr-2">
          <LensConnect />
        </div>

        <div className="pr-2">
          <MetamaskConnect />
        </div>
        <SismoConnect />
      </div>
    </nav>
  );
}