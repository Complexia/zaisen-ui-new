import MetamaskConnect from "./metamaskConnectButton";
import LensConnect from "./lensConnectButton";
import NotificationIcon from "./notificationIcon";
import SismoConnect from "./sismoConnectButton";

export default function Navbar() {
	return (
        <nav className="flex top-0 justify-between w-full pr-4 mr-auto gap-8 relative">
            
            <div className="flex items-center">
                <div className="pr-2">
                    <NotificationIcon />
                </div>
                <div className="pr-2">
                    <LensConnect />
                </div>
                
                <MetamaskConnect />
                <SismoConnect />
            </div>
        </nav>
	);
}
