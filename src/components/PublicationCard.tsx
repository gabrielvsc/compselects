import { Link } from 'react-router-dom'

interface Publication {
  id: number
  title: string
  author: string
  year: number
  category: string
  type: string
}

interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Link to={`/publications/${publication.id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={`/placeholder.svg?height=200&width=300&text=${publication.title}`}
          alt={publication.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{publication.title}</h2>
          <p className="text-gray-600 mb-2">By {publication.author}</p>
          <p className="text-gray-600 mb-2">{publication.year}</p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {publication.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
