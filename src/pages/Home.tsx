import HeroSection from '@/components/HeroSection';
import PublicationHighlights from '@/components/PublicationHighlights';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import UpcomingEvents from '@/components/UpcomingEvents';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  const publications = [
    { id: 1, title: "The Great Novel", author: "Jane Doe", cover: "https://via.placeholder.com/200x300" },
    { id: 2, title: "Another Story", author: "John Smith", cover: "https://via.placeholder.com/200x300" },
  ];

  const testimonials = [
    {
      id: 1,
      text: "A editora sempre entrega qualidade excepcional em cada publicação. Fiquei impressionado com o cuidado editorial e a dedicação em garantir que cada conceito técnico fosse apresentado de forma clara e precisa.",
      author: "Andrew S. Tanenbaum",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Andrew_S._Tanenbaum_2012.jpg"
    },
    {
      id: 2,
      text: "Trabalhar com essa editora foi uma experiência transformadora. Desde a primeira interação até a entrega do produto final, a equipe demonstrou um compromisso inabalável com a excelência e o respeito pela visão do autor.",
      author: "Bjarne Stroustrup",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bjarne_Stroustrup_%282013%29.jpg/220px-Bjarne_Stroustrup_%282013%29.jpg"
    },
    {
      id: 3,
      text: "O processo de revisão técnica foi detalhado e extremamente colaborativo. A editora realmente entende a importância de apresentar conteúdos complexos de uma forma que seja acessível sem sacrificar a profundidade.",
      author: "Barbara Liskov",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Barbara_Liskov_MIT_computer_scientist_2010.jpg"
    },
  ];

  const events = [
    { id: 1, title: "Lançamento de Livro: Destruindo o Código Limpo", date: "15 de Outubro de 2024, às 19h", location: "Livraria Cultura, São Paulo, SP" },
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
