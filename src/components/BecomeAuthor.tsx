import { Link } from 'react-router-dom'

export default function BecomeAuthor() {
  return (
    <section className="mb-16 container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6">Seja um autor</h2>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Processo de Publicação</h3>
        <p className="mb-4">
          Estamos sempre em busca de autores talentosos para se juntarem à nossa família editorial. Aqui está o que você pode esperar ao publicar conosco:
        </p>
        <h4 className="text-xl font-semibold mb-2">Benefícios</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Suporte editorial especializado</li>
          <li>Assistência de marketing e promoção</li>
          <li>Royalties competitivos</li>
          <li>Distribuição Global</li>
        </ul>
        <h4 className="text-xl font-semibold mb-2">Requisitos:</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Manuscrito original e de alta qualidade</li>
          <li>Compromisso com o processo de edição e revisão</li>
          <li>Disposição para participar de esforços de marketing</li>
        </ul>
        <Link 
          to="/submit-manuscript" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submeta seu manuscrito
        </Link>
      </div>
    </section>
  )
}