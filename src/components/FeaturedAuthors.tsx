import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Author {
  id: number
  name: string
  photo: string
  bio: string
  publications: string[]
}

const featuredAuthors: Author[] = [
  {
    "id": 1,
    "name": "Fred Brooks",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fred_Brooks_%28cropped_square%29.jpg/1200px-Fred_Brooks_%28cropped_square%29.jpg",
    "bio": "Fred Brooks foi um pioneiro da engenharia de software, mais conhecido por seu livro clássico 'The Mythical Man-Month', que explora a complexidade da gestão de projetos de software. Sua experiência e visão moldaram a maneira como gerenciamos grandes equipes e sistemas hoje.",
    "publications": ["The Mythical Man-Month", "No Silver Bullet"]
  },
  {
    "id": 2,
    "name": "Eric Evans",
    "photo": "https://res.cloudinary.com/value-object/image/upload/t_speaker300v3/v1/hm/v1464275787/speakers/EricEvans_1_jmr2sd.jpg",
    "bio": "Eric Evans é um dos maiores especialistas em design de software e autor do influente livro 'Domain-Driven Design', que introduziu novas abordagens para modelagem de software. Suas ideias são amplamente adotadas para criar sistemas complexos que refletem o domínio do negócio.",
    "publications": ["Domain-Driven Design", "Domain-Driven Design: Reference"]
  }  
]

export default function FeaturedAuthors() {
  return (
    <section className="mb-16 container mx-auto px-4">
      <h2 className="mt-16 text-3xl font-bold mb-6">Autores em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredAuthors.map((author) => (
          <Card key={author.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img
                  src={author.photo}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <CardTitle>{author.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{author.bio}</p>
              <h4 className="font-semibold mb-2">Publicações em Destaque:</h4>
              <ul className="list-disc list-inside">
                {author.publications.map((pub, index) => (
                  <li key={index}>{pub}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}