import UpcomingPromotions from '@/components/upcomingPromotions'
import IndexContainer from '../components/indexContainer'
import MyNFTs from '@/components/myNFTs'
import HotPromotions from '@/components/hotPromotions'
import LatestSocials from '@/components/latestSocials'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full">
    <div className="flex flex-col items-center">
  
      <div className="w-full">
        <span className="text-black font-bold">My NFTs</span>
        <IndexContainer>
          <MyNFTs /> 
        </IndexContainer>
      </div>
  
      <div className="w-full">
        <IndexContainer>
          <UpcomingPromotions />
        </IndexContainer>
      </div>
  
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-1/2">
          <IndexContainer>
            <HotPromotions />
          </IndexContainer>
        </div>
        <div className="w-1/2">
          <IndexContainer>
            <LatestSocials />
          </IndexContainer>
        </div>
      </div>
  
    </div>
  </main> 
  )
}
