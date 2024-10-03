import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SubmissionForm } from '@/components/SubmissionForm'

export default function SubmissionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header title="Submissões de Manuscrito" subtitle="Submeta seu trabalho para uma revisão!" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Guia para uma boa Submissão</h2>
          <div className="prose max-w-none">
            <p>
              Por favor, siga estas diretrizes ao enviar seu manuscrito para revisão:
            </p>
            <ul>
              <li>- Os manuscritos devem estar em formato PDF, com espaço duplo e margens de 1 polegada.</li>
              <li>- Use uma fonte padrão (por exemplo, Times New Roman, Arial) em tamanho 12.</li>
              <li>- Inclua uma página de título com o título do manuscrito, nomes dos autores e afiliações.</li>
              <li>- Forneça um resumo com no máximo 250 palavras.</li>
              <li>- Use um estilo de citação consistente (por exemplo, APA, MLA) em todo o manuscrito.</li>
              <li>- Certifique-se de que todas as figuras e tabelas estejam claramente identificadas e referenciadas no texto.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Formulário de Submissão</h2>
          <SubmissionForm />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Política Editorial</h2>
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold">Processo de revisão</h3>
            <p>
              Todas as submissões passam por um rigoroso processo de revisão por pares duplo-cego. A triagem inicial é realizada pela equipe editorial, seguida de avaliação por pelo menos dois revisores independentes.
            </p>
            <h3 className="text-lg font-semibold">Ética</h3>
            <p>
              Aderimos aos mais altos padrões de ética de publicação. Plágio, fabricação de dados e outras formas de má conduta acadêmica não são tolerados. Os autores devem divulgar quaisquer conflitos de interesse.
            </p>
            <h3 className="text-lg font-semibold">Direitos autorais</h3>
            <p>
              Os autores mantêm os direitos autorais de seu trabalho. Ao enviar, você nos concede o direito de publicar seu trabalho, caso seja aceito. Encorajamos a publicação em acesso aberto, mas respeitamos as preferências dos autores em relação à distribuição.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}