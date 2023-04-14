import UpcomingPromotions from '@/components/upcomingPromotions'
import IndexContainer from '../components/indexContainer'
import MyNFTs from '@/components/myNFTs'
import HotPromotions from '@/components/hotPromotions'
import LatestSocials from '@/components/latestSocials'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 h-full">
      <div className="flex flex-wrap justify-center h-full">

        {/* <MyPromos> */}
        <IndexContainer>
          <UpcomingPromotions /> 
        </IndexContainer>

        {/* <MyNFTs> */}
        <IndexContainer>
          <MyNFTs />
        </IndexContainer>

        {/* <HotPromos> */}
        <IndexContainer>
          <HotPromotions />
        </IndexContainer>

        {/* <LatestSocials> */}
        <IndexContainer>
          <LatestSocials />
        </IndexContainer>

      </div>
    </main>
  )
}
