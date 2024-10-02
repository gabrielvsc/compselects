import { useState, useEffect } from 'react'
import { PublicationCard } from './PublicationCard'
import { SearchParams } from './PublicationsPage'

interface Publication {
  id: number
  title: string
  author: string
  year: number
  category: string
  type: string
}

interface PublicationsCatalogProps {
  searchParams: SearchParams
}

export function PublicationsCatalog({ searchParams }: PublicationsCatalogProps) {
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    const fetchPublications = async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const mockPublications: Publication[] = [
        { id: 1, title: 'Book 1', author: 'Author 1', year: 2021, category: 'Fiction', type: 'Book' },
        { id: 2, title: 'Journal 1', author: 'Author 2', year: 2022, category: 'Science', type: 'Journal' },
        { id: 3, title: 'Book 2', author: 'Author 3', year: 2023, category: 'Non-Fiction', type: 'Book' },
        { id: 4, title: 'Magazine 1', author: 'Author 4', year: 2023, category: 'Technology', type: 'Magazine' },
        { id: 5, title: 'Book 3', author: 'Author 5', year: 2022, category: 'Fiction', type: 'Book' },
        { id: 6, title: 'Journal 2', author: 'Author 6', year: 2021, category: 'Science', type: 'Journal' },
      ]
      
      const filteredPublications = mockPublications.filter(pub => {
        return (
          pub.title.toLowerCase().includes(searchParams.query.toLowerCase()) &&
          pub.author.toLowerCase().includes(searchParams.author.toLowerCase()) &&
          (searchParams.year === '' || pub.year.toString() === searchParams.year) &&
          (searchParams.category === '' || pub.category === searchParams.category)
        )
      })
      
      setPublications(filteredPublications)
    }

    fetchPublications()
  }, [searchParams])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {publications.map(publication => (
        <PublicationCard key={publication.id} publication={publication} />
      ))}
    </div>
  )
}