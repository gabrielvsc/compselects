import React, { useState } from 'react'
import { SearchParams } from './PublicationsPage'

interface AdvancedSearchProps {
  onSearch: (params: SearchParams) => void
}

export function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [query, setQuery] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({ query, author, year, category })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-100 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Todas as Categorias</option>
          <option value="Computação">Computação</option>
          <option value="Programação">Programação</option>
          <option value="Ciência de Dados">Ciência de Dados</option>
          <option value="Matemática">Matemática</option>
          <option value="Arquitetura de Software">Arquitetura de Software</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  )
}