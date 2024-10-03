import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Header from "@/components/Header"
import FeaturedAuthors from "@/components/FeaturedAuthors"
import BecomeAuthor from "@/components/BecomeAuthor"
import Testimonials from "@/components/Testimonials.tsx"

export default function Authors() {
  const testimonials = [
    {
      "id": 1,
      "text": "Publicar com esta editora foi uma experiência excepcional. A atenção aos detalhes técnicos e a compreensão das nuances do campo da computação resultaram em um produto final de altíssima qualidade. Recomendo para autores que desejam um trabalho impecável e bem editado.",
      "author": "Donald Knuth",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/KnuthAtOpenContentAlliance.jpg/220px-KnuthAtOpenContentAlliance.jpg"
    },
    {
      "id": 2,
      "text": "O suporte durante todo o processo de publicação foi inigualável. A equipe soube entender as complexidades do conteúdo técnico, o que fez toda a diferença. O resultado final reflete o alto padrão que eu esperava para um trabalho de software engineering.",
      "author": "Martin Fowler",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Webysther_20150414193208_-_Martin_Fowler.jpg/1200px-Webysther_20150414193208_-_Martin_Fowler.jpg"
    },
    {
      "id": 3,
      "text": "A editora se destacou pela precisão editorial e cuidado com os detalhes. O feedback técnico durante a produção foi fundamental para aprimorar o material. A experiência foi excelente e espero colaborar novamente no futuro.",
      "author": "Robert C. Martin",
      "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lhVqEBAPhZ2sUDGGpOJ2FJHu8lQhjQ2t8g&s"
    }    
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Header 
          title="Nossos Autores"
          subtitle="Conheça os talentos por trás de nossas publicações. Seja você também um autor! faça parte da nossa história."
        />
        <FeaturedAuthors />
        <BecomeAuthor />
        <Testimonials testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  )
}