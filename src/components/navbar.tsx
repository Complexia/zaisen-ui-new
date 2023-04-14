import { ConnectButton } from "@rainbow-me/rainbowkit";
import MetamaskConnect from "./metamaskConnectButton";

export default function Navbar() {
	return (
		<nav className="flex top-0 justify-between w-full  py-4 pr-4 mr-auto gap-8 mb-2 relative">
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				{/* <img
					className={styles.alchemy_logo}
					src="/alchemy_logo.svg"
				></img> */}
				
			</a>
            
            <MetamaskConnect />
		</nav>
	);
}