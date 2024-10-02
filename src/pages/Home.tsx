import HeroSection from '../components/HeroSection';
import PublicationHighlights from '../components/PublicationHighlights';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import UpcomingEvents from '../components/UpcomingEvents';
import Footer from '../components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  const publications = [
    { id: 1, title: "The Great Novel", author: "Jane Doe", cover: "https://via.placeholder.com/200x300" },
    { id: 2, title: "Another Story", author: "John Smith", cover: "https://via.placeholder.com/200x300" },
  ];

  const testimonials = [
    { id: 1, text: "A qualidade das publicações dessa editora é impecável. Os livros são bem editados, com um cuidado notável na revisão e diagramação. Fiquei impressionado com o profissionalismo e atenção aos detalhes!", author: "Mario Sergio Cortella", avatarUrl: "https://media.licdn.com/dms/image/C4E03AQFORNHukyQJdg/profile-displayphoto-shrink_200_200/0/1532886580278?e=2147483647&v=beta&t=pViysSrAOJjj0p9FpvJhlhJg8kB1JK1kuwXVuBmS0rU" },
    { id: 2, text: "Como autor, posso dizer que o suporte oferecido pela editora durante todo o processo foi excelente. Me senti apoiado e valorizado, e o resultado final superou minhas expectativas. Recomendo a todos!", author: "Clóvis de Barros", avatarUrl: "https://media.licdn.com/dms/image/D4D03AQHPTJ6re4zVzQ/profile-displayphoto-shrink_200_200/0/1716320730990?e=2147483647&v=beta&t=9CiJgSTcLpuGr1bcagQ5ldsIeE5W3JTeRLm_oHjULWA" },
    { id: 2, text: "Fiquei muito satisfeito com a experiência de publicação nesta editora. Desde o primeiro contato, a equipe foi extremamente atenciosa e dedicada, tornando todo o processo fluido e tranquilo. A qualidade do material final e o cuidado com cada etapa realmente fazem a diferença. Estou ansioso para continuar essa parceria.", author: "Luiz Felipe Pondé", avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Psi0MDLGx0uUmSVBgDiXKpU2Uh2Esj00Qg&s" },
  ];

  const events = [
    { id: 1, title: "Lançamento de Livro: Palavras ao Vento", date: "15 de Outubro de 2024, às 19h", location: "Livraria Cultura, São Paulo, SP" },
    { id: 2, title: "Workshop de Escrita Criativa: Do Rascunho ao Best-Seller", date: "22 de Novembro de 2024, das 14h às 18h", location: "Auditório da Biblioteca Nacional, Rio de Janeiro, RJ" },
    { id: 2, title: "Bienal do Livro: Conexões Literárias", date: "1 a 10 de Setembro de 2024", location: "Centro de Convenções Anhembi, São Paulo, SP" },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <PublicationHighlights publications={publications} />
        <AboutUs />
        <Testimonials testimonials={testimonials} />
        <UpcomingEvents events={events} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
