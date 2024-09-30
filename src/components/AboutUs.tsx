import { Button } from "./ui/button";

const AboutUs = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Sobre Nós</h2>
      <p className="text-lg text-center max-w-3xl mx-auto mb-8">
      Somos uma editora independente líder, comprometida em descobrir e nutrir talentos literários excepcionais. Com mais de 25 anos de experiência, trouxemos inúmeros best-sellers e obras aclamadas pela crítica para leitores em todo o mundo.
      </p>
      <div className="text-center">
        <Button variant="link">Aprenda mais sobre nossa história</Button>
      </div>
    </div>
  </section>
);

export default AboutUs;