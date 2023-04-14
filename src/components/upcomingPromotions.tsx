// my promotions
import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core"

const AIRSTACK_ENDPOINT = process.env.AIRSTACK_ENDPOINT ? process.env.AIRSTACK_ENDPOINT : '';
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY ? process.env.AIRSTACK_API_KEY : '';

// Initializing Client 🚀
const client = new ApolloClient({
    uri: AIRSTACK_ENDPOINT,
    cache: new InMemoryCache(),
    headers: { Authorization: AIRSTACK_API_KEY },
})

const UpcomingPromotions = () => {
    return (
        <div className="upcoming-promotions">

        </div>
    )
}

export default UpcomingPromotions;