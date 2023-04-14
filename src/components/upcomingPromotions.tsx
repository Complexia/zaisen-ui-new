// my promotions
import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core"
import { useEffect, useState } from "react";
import NftWindow from "./nftWindow";


const AIRSTACK_ENDPOINT = process.env.AIRSTACK_ENDPOINT ? process.env.AIRSTACK_ENDPOINT : '';
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY ? process.env.AIRSTACK_API_KEY : '';

let alchemy_key = process.env.ALCHEMY_API_KEY;


// Initializing Client 🚀
const client = new ApolloClient({
    uri: AIRSTACK_ENDPOINT,
    cache: new InMemoryCache(),
    headers: { Authorization: AIRSTACK_API_KEY },
})

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


const UpcomingPromotions = () => {

    const [nftAddresses, setNftAddresses] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true);

    let owners = ["vitalik.eth"]

    let limit = 10
    let cursor = ""

    useEffect(() => {
        async function fetchTokenData() {
            const tokenData = await fetchData(owners, limit, cursor);
            console.log("hello")
            console.log("1", tokenData.TokenBalances.TokenBalance)
            setNftAddresses(tokenData.TokenBalances.TokenBalance);
            console.log("2", nftAddresses);
            setLoading(false);
        }
        fetchTokenData();

    }, []);
    

    if (nftAddresses.length == 0) {
        return <div>Loading...</div>;
      }


    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    
    

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {nftAddresses.map((item: any, index: any) => {
                let params = {
                    // Insert parameter values here
                    imageUrl: "abc",
                    imageName: "annsj",
                    collectionName: "anj",
                    contractAddress: item.tokenAddress,
                    description: "whowho",
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

export default UpcomingPromotions;