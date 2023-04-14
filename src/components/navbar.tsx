import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
	return (
		<nav className="flex justify-between w-full pt-8 px-16 gap-8 mb-2 relative">
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				{/* <img
					className={styles.alchemy_logo}
					src="/alchemy_logo.svg"
				></img> */}
				
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}