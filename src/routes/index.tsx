import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Navbar from '@/components/Navbar'
import ExperienceTimeline from '@/components/ExperinceTimeline'
import Contact from '@/components/Contacts'
import Services from '@/components/Services'
import Catalog from '@/components/Catalog'
import FinalCTA from '@/components/FinalCta'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div >
      <Navbar/>
     <Hero/>
     <ExperienceTimeline/>
     <Services/>
     <Catalog/>
     <Contact/>
     <FinalCTA/>
    </div>
  )
}
