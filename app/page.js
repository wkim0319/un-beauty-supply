import { AppProvider } from '@/components/AppContext'
import SiteRoot from '@/components/SiteRoot'
import Topbar from '@/components/Topbar'
import Hero from '@/components/Hero'
import BrandStrip from '@/components/BrandStrip'
import Locations from '@/components/Locations'
import Trust from '@/components/Trust'
import Why from '@/components/Why'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'

export default function HomePage() {
  return (
    <AppProvider>
      <SiteRoot>
        <Topbar />
        <main>
          <Hero />
          <BrandStrip />
          {/* Todo: Add back in when we have imagery */}
          {/* <Categories /> */}
          <Locations />
          {/* <MidCTA /> */}
          <Trust />
          <Why />
          <FinalCTA />
        </main>
        <Footer />
        <StickyCallBar />
      </SiteRoot>
    </AppProvider>
  )
}
