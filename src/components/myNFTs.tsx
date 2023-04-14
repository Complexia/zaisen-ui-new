// my promotions
import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core"
import { useEffect, useState } from "react";
import NftWindow from "./nftWindow";
import { useSelector } from "react-redux";


const AIRSTACK_ENDPOINT = process.env.AIRSTACK_ENDPOINT ? process.env.AIRSTACK_ENDPOINT : '';
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY ? process.env.AIRSTACK_API_KEY : '';

let alchemy_key = process.env.ALCHEMY_API_KEY;


// Initializing Client 🚀
const client = new ApolloClient({
    uri: AIRSTACK_ENDPOINT,
    cache: new InMemoryCache(),
    headers: { Authorization: AIRSTACK_API_KEY },
})

// input TokenNftFilter {
//     address: # Contract address (ERC721, ERC1155)
//     metaData: # allows querying by NFT Token Name, or specific trait or attribute.
//     tokenId: # Unique NFT token ID
//   }

async function GetNFTDetails(address: string, cursor: string, limit: number): Promise<any> {

    const query = gql`
    query QB2 {
        TokenNfts(input: {filter: {address: {_eq: "0x740e65d093db34a7ffbb144a2caff7489eb10ba4"}}, blockchain: ethereum}) {
          TokenNft {
            address
            chainId
            contentType
            contentValue {
              image {
                extraSmall
                original
                large
              }
            }
            #currentHolderCount - being fixed
            id
            lastTransferBlock
            lastTransferHash
            lastTransferTimestamp
            metaData {
              animationUrl
              attributes {
                trait_type
                value
              }
              backgroundColor
              description
              image
              externalUrl
              imageData
              name
              youtubeUrl
            }
            rawMetaData
            token {
              id
            }
            tokenBalances {
              id
            }
            tokenId
            tokenURI
            totalSupply
            #transferCount - being fixed
            type
          }
          pageInfo {
            nextCursor
            prevCursor
          }
        }
      } 
    `

    const response = await client.query({
        query,
        variables: {
            address: address,
        },
    })

    console.log("nfts", response)

    return response

}

async function GetAllNFTs(owners: string[], limit: number, cursor: string): Promise<any> {
    const query = gql`
        query MyQuery($cursor: String, $owners: [Identity!], $limit: Int) {
            TokenBalances(
                input: {
                    filter: { owner: { _in: $owners }, tokenType: { _in: [ERC1155, ERC721] } }
                    blockchain: ethereum
                    limit: $limit
                    cursor: $cursor
                }
            ) {
                TokenBalance {
                    tokenAddress
                    amount
                    tokenType
                    owner {
                        primaryDomain {
                            name
                        }
                    }
                }
                pageInfo {
                    prevCursor
                    nextCursor
                }
            }
        }
    `

    const response = await client.query({
        query,
        variables: {
            owners: owners,
            limit: limit,
            cursor: cursor,
        },
    })
   

    return response
}

const fetchData = async (owners: any, limit: any, cursor: any) => {
    let tokenBalances = await GetAllNFTs(owners, limit, cursor)
    console.log("fronfunction", tokenBalances.data)
    return tokenBalances.data  
}


const MyNFTs = (props: any) => {

    const [nftAddresses, setNftAddresses] = useState<any>([])
    const [nftData, setNftData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true);

    

    let account: any = useSelector((state: any) => state.account.account);

    

    let owners = [account]

    let limit = 10
    let cursor = ""

    let nftCards: {
        // Insert parameter values here
        imageUrl: any; imageName: any; collectionName: string; contractAddress: any; description: any; tokenType: any;
    }[] = [];
    useEffect(() => {
        async function fetchTokenData() {
            const tokenData = await fetchData(owners, limit, cursor);
            
            setNftAddresses(tokenData.TokenBalances.TokenBalance);

            if (!nftAddresses) {
                return;
            }
            for (let i = 0; i < nftAddresses.length; i++) {
                let nftDetails = await GetNFTDetails(nftAddresses[i].tokenAddress, cursor, limit);
                let ipfsTag = nftDetails.data.TokenNfts.TokenNft[0].rawMetaData.image.split("//")[1];
                let imageUrl = `https://ipfs.io/ipfs/${ipfsTag}`
                let nftInfo= {
                    // Insert parameter values here
                    imageUrl: imageUrl,
                    imageName: nftDetails.data.TokenNfts.TokenNft[0].metaData.name,
                    collectionName: nftDetails.data.TokenNfts.TokenNft[0].metaData.name, 
                    contractAddress: nftAddresses[i].tokenAddress,
                    description: nftDetails.data.TokenNfts.TokenNft[0].rawMetaData.description,
                    tokenType: nftAddresses[i].tokenType

                }
                nftCards.push(nftInfo);
            }
            setNftData(nftCards);
            setLoading(false);
        }
        if (account && account != "") {
            fetchTokenData();
        }

    }, [account]);
    
    if (!account || account == "") {
        return (
            <div>
                <p>----------------------------------------------------------------------------------------------------------------------------</p>
                <h1 className="text-black font-bold">No account connected chapy.</h1>
            </div>
        );
    }

    if (nftData.length == 0) {
        return loading ?(
            <div>
                <p>----------------------------------------------------------------------------------------------------------------------------</p>
                <h1 className="text-black font-bold">Loading...</h1>
            </div>
        ):(
            <div>
                <p>----------------------------------------------------------------------------------------------------------------------------</p>
                <h1 className="text-black font-bold">No NFTs here mate...</h1>
            </div>
        );
    }

   


    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    
    

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {nftData.map((item: any, index: any) => {
                let params = {
                    // Insert parameter values here
                    imageUrl: item.imageUrl,
                    imageName: item.imageName,
                    collectionName: item.collectionName,
                    contractAddress: item.tokenAddress,
                    description: item.description,
                    tokenType: item.tokenType
                };

                
                return (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <NftWindow props={params} />
                </div>
                );
            })}
        </div>  
    )
}

export default MyNFTs;