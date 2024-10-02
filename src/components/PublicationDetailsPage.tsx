import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

interface Publication {
  id: string
  title: string
  author: string
  year: number
  category: string
  type: string
  description: string
  summary: string
  coverImage: string
}

export default function PublicationDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const [publication, setPublication] = useState<Publication | null>(null)

  useEffect(() => {
    const fetchPublicationDetails = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const mockPublication: Publication = {
        id: id || '',
        title: 'Sample Publication',
        author: 'John Doe',
        year: 2023,
        category: 'Fiction',
        type: 'Book',
        description: 'This is a sample description of the publication.',
        summary: 'A brief summary of the publication goes here.',
        coverImage: '/placeholder.svg?height=400&width=300&text=Cover',
      }

      setPublication(mockPublication)
    }

    fetchPublicationDetails()
  }, [id])

  if (!publication) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src={publication.coverImage}
              alt={publication.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{publication.title}</h1>
            <p className="text-xl mb-2">By {publication.author}</p>
            <p className="text-gray-600 mb-4">
              {publication.year} - {publication.category}
            </p>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="mb-4">{publication.description}</p>
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <p className="mb-4">{publication.summary}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4">
              Purchase
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Download Sample
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
