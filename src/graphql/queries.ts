import { gql } from "@apollo/client";

const getNFTDetails = (address: string, cursor: string, limit: number) => {
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

    return query;
}

const getAllNftsOfAddress = (owners: string[], limit: number, cursor: string) => {
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

        return query
}

export { getNFTDetails, getAllNftsOfAddress }