import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Header from "@/components/Header"
import HistoryMission from "@/components/HistoryMission"
import TeamSection from "@/components/TeamSection"
import PartnersSection from "@/components/PartnersSection"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />   
      <main className="flex-grow">
        <Header 
          title="Sobre Nós"
          subtitle="Avançando o conhecimento para um futuro melhor"
        />
        <HistoryMission />
        <TeamSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}