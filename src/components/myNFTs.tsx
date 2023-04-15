// my promotions
import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";
import { useEffect, useState } from "react";
import NftWindow from "./nftWindow";
import { useSelector } from "react-redux";
import Link from "next/link";
import router from "next/router";
import Marquee from "react-fast-marquee";
import { getNFTDetails, getAllNftsOfAddress } from "../graphql/queries";

const AIRSTACK_ENDPOINT = process.env.AIRSTACK_ENDPOINT
  ? process.env.AIRSTACK_ENDPOINT
  : "";
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY
  ? process.env.AIRSTACK_API_KEY
  : "";

// Initializing Client 🚀
const client = new ApolloClient({
  uri: AIRSTACK_ENDPOINT,
  cache: new InMemoryCache(),
  headers: { Authorization: AIRSTACK_API_KEY },
});

// input TokenNftFilter {
//     address: # Contract address (ERC721, ERC1155)
//     metaData: # allows querying by NFT Token Name, or specific trait or attribute.
//     tokenId: # Unique NFT token ID
//   }

async function GetNFTDetails(
  address: string,
  cursor: string,
  limit: number
): Promise<any> {
  const query = getNFTDetails(address, cursor, limit);

  const response = await client.query({
    query,
    variables: {
      address: address,
    },
  });

  console.log("nfts", response);

  return response;
}

async function GetAllNFTs(
  owners: string[],
  limit: number,
  cursor: string
): Promise<any> {
  const query = getAllNftsOfAddress(owners, limit, cursor);
  const response = await client.query({
    query,
    variables: {
      owners: owners,
      limit: limit,
      cursor: cursor,
    },
  });

  return response;
}

const fetchData = async (owners: any, limit: any, cursor: any) => {
  let tokenBalances = await GetAllNFTs(owners, limit, cursor);
  console.log("fronfunction", tokenBalances.data);
  return tokenBalances.data;
};

const MyNFTs = (props: any) => {
  const [nftAddresses, setNftAddresses] = useState<any>([]);
  const [nftData, setNftData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  let account: any = useSelector((state: any) => state.account.account);

  //dummy nfts
  let owners = ["vitalik.eth"];
  //let owners = [account]

  let limit = 10;
  let cursor = "";

  let nftCards: {
    // Insert parameter values here
    imageUrl: any;
    imageName: any;
    collectionName: string;
    contractAddress: any;
    description: any;
    tokenType: any;
  }[] = [];
  useEffect(() => {
    async function fetchTokenData() {
      const tokenData = await fetchData(owners, limit, cursor);

      setNftAddresses(tokenData.TokenBalances.TokenBalance);

      if (!nftAddresses) {
        return;
      }
      for (let i = 0; i < nftAddresses.length; i++) {
        let nftDetails = await GetNFTDetails(
          nftAddresses[i].tokenAddress,
          cursor,
          limit
        );
        let ipfsTag =
          nftDetails.data.TokenNfts.TokenNft[0].rawMetaData.image.split(
            "//"
          )[1];
        let imageUrl = `https://ipfs.io/ipfs/${ipfsTag}`;
        let nftInfo = {
          // Insert parameter values here
          imageUrl: imageUrl,
          imageName: nftDetails.data.TokenNfts.TokenNft[0].metaData.name,
          collectionName: nftDetails.data.TokenNfts.TokenNft[0].metaData.name,
          contractAddress: nftAddresses[i].tokenAddress,
          description:
            nftDetails.data.TokenNfts.TokenNft[0].rawMetaData.description,
          tokenType: nftAddresses[i].tokenType,
        };
        nftCards.push(nftInfo);
      }
      setNftData(nftCards);
      setLoading(false);
    }
    if (account && account != "") {
      fetchTokenData();
    }
  }, [account, loading]);

  if (!account || account == "") {
    return (
      <div>
        <p>
          ----------------------------------------------------------------------------------------------------------------------------
        </p>
        <h1 className="text-black font-bold">No account connected chappy.</h1>
      </div>
    );
  }

  if (nftData.length == 0) {
    return loading ? (
      <div>
        <p>
          ----------------------------------------------------------------------------------------------------------------------------
        </p>
        <h1 className="text-black font-bold">Loading...</h1>
      </div>
    ) : (
      <div>
        <p>
          ----------------------------------------------------------------------------------------------------------------------------
        </p>
        <h1 className="text-black font-bold">No NFTs here mate...</h1>
      </div>
    );
  }

  // if (loading) {
  //     return <div>Loading...</div>;
  // }

  return (
    <div className="w-screen">
      <Marquee
        pauseOnHover={true}
        speed={40}
        direction="right"
        className="relative  overflow-x-clip"
        style={{ overflow: "hidden" }}
      >
        {nftData.map((item: any, index: any) => {
          const params = {
            imageUrl: item.imageUrl,
            imageName: item.imageName,
            collectionName: item.collectionName,
            contractAddress: item.tokenAddress,
            description: item.description,
            tokenType: item.tokenType,
          };

          const href = {
            pathname: "/nft-info",
            query: params,
            as: `/nft-info?${new URLSearchParams(params).toString()}`,
          };

          return (
            <div key={index} className="bg-gray-100 mx-4 rounded-lg">
              <Link href={href}>
                <div className="cursor-pointer">
                  <NftWindow props={params} />
                </div>
              </Link>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MyNFTs;
