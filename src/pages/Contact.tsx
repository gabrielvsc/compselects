import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { ContactInfo } from '@/components/ContactInfo'
import { Map } from '@/components/Map'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header title="Contato" subtitle="Entre em contato com o nosso time ou faça uma visita à nossa empresa!" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}