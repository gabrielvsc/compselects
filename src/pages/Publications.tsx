import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PublicationsCatalog } from '@/components/PublicationsCatalog'
import Header from '@/components/Header'
import { AdvancedSearch } from '@/components/AdvancedSearch'

export interface SearchParams {
  query: string
  author: string
  year: string
  category: string
}

export default function PublicationsPage() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    query: '',
    author: '',
    year: '',
    category: '',
  })

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header 
        title="Publicações"
        subtitle="Avançando o conhecimento para um futuro melhor"
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <AdvancedSearch onSearch={handleSearch} />
        <PublicationsCatalog searchParams={searchParams} />
      </main>
      <Footer />
    </div>
  )
}