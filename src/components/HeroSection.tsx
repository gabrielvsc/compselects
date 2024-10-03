import { Button } from "./ui/button";

const HeroSection = () => (
  <section className="relative h-[500px] bg-blue-950 text-white">
    <img
      src="https://www.spescoladeteatro.org.br/wp-content/uploads/2020/05/books.jpg"
      alt="New publications banner"
      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Descubra sua próxima boa leitura</h1>
      <p className="text-xl md:text-2xl mb-8">Trazendo grandes histórias desde 1995</p>
      <div className="space-x-4">
        <Button size="lg">Explore nossos livros</Button>
        <Button size="lg" variant="outline" className="text-black">Submeta seu compromisso</Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
