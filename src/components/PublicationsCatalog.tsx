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
  img: string
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
        { id: 1, title: 'O Mito do Homem-Mês', author: 'Fred Brooks', year: 1975, category: 'Computação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71HNGP3tJbL._AC_UF1000,1000_QL80_.jpg' },
        { id: 2, title: 'Design Dirigido por Domínios', author: 'Eric Evans', year: 2003, category: 'Computação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/61aIS4n2jZL._AC_UF1000,1000_QL80_.jpg' },
        { id: 3, title: 'Código Limpo', author: 'Robert C. Martin', year: 2008, category: 'Programação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UF1000,1000_QL80_.jpg' },
        { id: 4, title: 'Refatoração', author: 'Martin Fowler', year: 1999, category: 'Programação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71e6ndHEwqL._AC_UF1000,1000_QL80_.jpg' },
        { id: 5, title: 'Estruturas de Dados e Algoritmos em Java', author: 'Robert Lafore', year: 2002, category: 'Computação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/91YgfEma0CL._AC_UF1000,1000_QL80_.jpg' },
        { id: 6, title: 'Engenharia de Software', author: 'Ian Sommerville', year: 1982, category: 'Computação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/91w7TnGT9PL._AC_UF1000,1000_QL80_.jpg' },
        { id: 7, title: 'Padrões de Projeto', author: 'Erich Gamma', year: 1994, category: 'Arquitetura de Software', type: 'Livro', img: 'https://m.media-amazon.com/images/I/81RXMnEXrdL._AC_UF1000,1000_QL80_.jpg' },
        { id: 8, title: 'Programador Pragmático', author: 'Andrew Hunt & David Thomas', year: 1999, category: 'Programação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71K5cdyx61L._AC_UF1000,1000_QL80_.jpg' },
        { id: 9, title: 'Java: Como Programar', author: 'Deitel & Deitel', year: 1996, category: 'Programação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/81jdJ94mSbL._AC_UF1000,1000_QL80_.jpg' },
        { id: 10, title: 'Arquitetura Limpa', author: 'Robert C. Martin', year: 2017, category: 'Arquitetura de Software', type: 'Livro', img: 'https://m.media-amazon.com/images/I/815d9tE7jSL._AC_UF1000,1000_QL80_.jpg' },
        { id: 11, title: 'Python para Análise de Dados', author: 'Wes McKinney', year: 2012, category: 'Ciência de Dados', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71DBpD6-brL._AC_UF1000,1000_QL80_.jpg' },
        { id: 12, title: 'Estruturas de Dados e Algoritmos em Python', author: 'Michael T. Goodrich', year: 2013, category: 'Computação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/614E+XmfeeL._AC_UF1000,1000_QL80_.jpg' },
        { id: 13, title: 'Algoritmos: Teoria e Prática', author: 'Thomas H. Cormen', year: 2009, category: 'Computação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71QtOUBMtNL._AC_UF1000,1000_QL80_.jpg' },
        { id: 14, title: 'Machine Learning: Uma Abordagem Probabilística', author: 'Kevin P. Murphy', year: 2012, category: 'Inteligência Artificial', type: 'Livro', img: 'https://m.media-amazon.com/images/I/61NfFcHXGxL._AC_UF1000,1000_QL80_.jpg' },
        { id: 15, title: 'Introdução à Teoria dos Grafos', author: 'Robin J. Wilson', year: 1979, category: 'Matemática', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71yDafj7tLL._AC_UF1000,1000_QL80_.jpg' },
        { id: 16, title: 'Padrões de Arquitetura de Aplicações Corporativas', author: 'Martin Fowler', year: 2002, category: 'Arquitetura de Software', type: 'Livro', img: 'https://m.media-amazon.com/images/I/818aZjDYNzL._UF894,1000_QL80_.jpg' },
        { id: 17, title: 'Compiladores: Princípios, Técnicas e Ferramentas', author: 'Alfred V. Aho', year: 1986, category: 'Computação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/615gIucTXqL._AC_UF1000,1000_QL80_.jpg' },
        { id: 18, title: 'A Linguagem de Programação C', author: 'Brian Kernighan & Dennis Ritchie', year: 1978, category: 'Programação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/71lTZ6EDZhL._UX250_.jpg' },
        { id: 19, title: 'Desvendando o SOA', author: 'Thomas Erl', year: 2005, category: 'Arquitetura de Software', type: 'Livro', img: 'https://www.casadocodigo.com.br/cdn/shop/products/SOAaplicado_ebook_large.jpg?v=1631649590' },
        { id: 20, title: 'JavaScript: O Guia Definitivo', author: 'David Flanagan', year: 2006, category: 'Programação', type: 'Livro', img: 'https://m.media-amazon.com/images/I/91z1xY4ppaL._AC_UF1000,1000_QL80_.jpg' }
      ];
      
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