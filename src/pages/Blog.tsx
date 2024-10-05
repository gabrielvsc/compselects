import React from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostList from '@/components/PostList'
import PostDetails from '@/components/PostDetails'
import { Button } from '@/components/ui/button'

interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'tendências' | 'entrevistas' | 'energia' | 'notícias' | 'educação' | 'tecnologia' | 'negócios'
  author: string
  date: string
}

const samplePosts: Post[] = [
  {
    "id": "1",
    "title": "A Ascensão da Computação Quântica",
    "excerpt": "Explorando o potencial dos computadores quânticos e seu impacto em diversas indústrias.",
    "content": "A computação quântica, um campo na interseção da física quântica e da ciência da computação, está evoluindo rapidamente e promete revolucionar inúmeras indústrias. Diferente dos computadores clássicos que utilizam bits (0s e 1s), os computadores quânticos usam qubits, que podem existir em múltiplos estados simultaneamente devido ao princípio da superposição. Essa propriedade única permite que computadores quânticos realizem certos cálculos exponencialmente mais rápido do que seus equivalentes clássicos. No entanto, desafios significativos ainda existem, como a alta sensibilidade a distúrbios ambientais, que leva a erros de cálculo.",
    "category": "tendências",
    "author": "Dr. Quântico",
    "date": "2024-10-01"
  },
  {
    "id": "2",
    "title": "Entrevista com o Pioneiro de IA: Dr. Rede Neural",
    "excerpt": "Insights de um dos principais pesquisadores em inteligência artificial.",
    "content": "Em uma entrevista exclusiva, conversamos com Dr. Rede Neural, um pesquisador pioneiro no campo da inteligência artificial, para discutir o estado atual e as perspectivas futuras da IA. Dr. Neural destacou avanços recentes em modelos de linguagem, como o GPT-3, que demonstraram uma capacidade sem precedentes de compreender e gerar textos semelhantes aos humanos. Ele também discutiu questões éticas, como o viés em sistemas de IA e a privacidade de dados, enfatizando a necessidade de diálogo contínuo entre tecnólogos, ética e políticas públicas.",
    "category": "entrevistas",
    "author": "Jornalista de Tecnologia",
    "date": "2024-09-28"
  },
  {
    "id": "3",
    "title": "Grande Editora Adota Acesso Aberto",
    "excerpt": "Uma mudança significativa na publicação acadêmica à medida que uma grande editora adota políticas de acesso aberto.",
    "content": "Uma das maiores e mais prestigiadas editoras anunciou uma transição abrangente para o acesso aberto (OA) em todas as suas publicações de periódicos. Nos próximos cinco anos, a editora planeja converter 100% de seus periódicos para o modelo OA, o que tornará milhares de artigos de pesquisa disponíveis gratuitamente para leitores de todo o mundo. Isso ocorre em resposta à crescente pressão de financiadores de pesquisa e governos para tornar o conhecimento científico mais acessível.",
    "category": "notícias",
    "author": "Insider da Publicação",
    "date": "2024-09-25"
  },
  {
    "id": "4",
    "title": "Tecnologias Emergentes no Setor de Saúde",
    "excerpt": "Como novas tecnologias estão transformando o atendimento e a pesquisa médica.",
    "content": "O setor de saúde está passando por uma transformação profunda graças a novas tecnologias como IA, big data e dispositivos de monitoramento remoto. A inteligência artificial, por exemplo, está ajudando a diagnosticar doenças com maior precisão, enquanto o big data permite a análise de grandes volumes de dados clínicos para identificar padrões e prever surtos de doenças. Dispositivos de monitoramento remoto permitem que médicos acompanhem a saúde dos pacientes em tempo real, melhorando o atendimento e reduzindo custos.",
    "category": "tendências",
    "author": "Analista de Saúde",
    "date": "2024-10-02"
  },
  {
    "id": "5",
    "title": "Explorando o Futuro da Mobilidade Urbana",
    "excerpt": "Como tecnologias de mobilidade estão redesenhando as cidades modernas.",
    "content": "Veículos autônomos, infraestrutura inteligente e transporte compartilhado estão transformando o futuro da mobilidade urbana. Cidades ao redor do mundo estão adotando novas tecnologias para melhorar a segurança e a eficiência do trânsito. No entanto, a adoção em larga escala ainda enfrenta desafios, como regulamentações, integração com o sistema de transporte existente e questões de segurança. Especialistas acreditam que, com o tempo, essas tecnologias poderão reduzir o congestionamento e melhorar a qualidade de vida nas cidades.",
    "category": "tendências",
    "author": "Urbanista Futurista",
    "date": "2024-09-30"
  },
  {
    "id": "6",
    "title": "Educação Digital: Transformando a Aprendizagem",
    "excerpt": "Como a tecnologia está moldando o futuro da educação.",
    "content": "A digitalização da educação está revolucionando a maneira como aprendemos e ensinamos. Plataformas online, realidade virtual e inteligência artificial estão criando novas formas de engajamento e personalização do aprendizado. Em um ambiente de sala de aula digital, os alunos têm acesso a conteúdos interativos e feedback instantâneo, enquanto os professores podem usar dados para personalizar suas abordagens. No entanto, a desigualdade no acesso à tecnologia continua sendo um obstáculo, e políticas eficazes serão essenciais para garantir que a educação digital seja acessível a todos.",
    "category": "educação",
    "author": "Especialista em Educação",
    "date": "2024-09-27"
  },
  {
    "id": "7",
    "title": "Computação na Nuvem: O Próximo Passo para Pequenas Empresas",
    "excerpt": "Como a computação na nuvem está ajudando pequenas empresas a crescer.",
    "content": "A computação na nuvem oferece às pequenas empresas acesso a ferramentas e recursos que antes eram exclusivos para grandes corporações. Com soluções na nuvem, pequenas empresas podem armazenar dados com segurança, automatizar processos e acessar poder de computação escalável. Essa acessibilidade permite que elas concorram em pé de igualdade com empresas maiores. No entanto, a adoção da nuvem também traz desafios de segurança e privacidade que precisam ser gerenciados com cuidado.",
    "category": "negócios",
    "author": "Consultor de TI",
    "date": "2024-09-26"
  },
  {
    "id": "8",
    "title": "A Revolução da Energia Renovável",
    "excerpt": "O crescimento das fontes de energia renovável e seu impacto no futuro.",
    "content": "As fontes de energia renovável, como solar e eólica, estão crescendo a um ritmo sem precedentes. Com o aumento da demanda por soluções sustentáveis, governos e empresas estão investindo pesadamente em infraestrutura renovável. Especialistas acreditam que a transição para energias limpas não só ajudará a combater as mudanças climáticas, mas também criará milhões de novos empregos. No entanto, desafios como o armazenamento de energia e a integração à rede elétrica ainda precisam ser superados.",
    "category": "energia",
    "author": "Especialista em Energia",
    "date": "2024-09-29"
  },
  {
    "id": "9",
    "title": "Cibersegurança no Mundo Digital",
    "excerpt": "Protegendo dados e sistemas em um ambiente digital cada vez mais complexo.",
    "content": "À medida que mais negócios migram para o digital, a segurança cibernética se tornou uma prioridade. As ameaças evoluem rapidamente, e organizações precisam adotar medidas proativas para proteger seus sistemas e dados sensíveis. Desde ataques de ransomware até fraudes digitais, os riscos são diversos e em constante mudança. Implementar políticas de segurança robustas, treinar funcionários e adotar tecnologias de detecção avançada são essenciais para mitigar esses riscos.",
    "category": "tecnologia",
    "author": "Especialista em Cibersegurança",
    "date": "2024-09-24"
  }
]


export default function BlogPage() {
  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header title="Blog" subtitle="Últimas trends, entrevistas, e notícias" />
      <main className="flex-grow container mx-auto px-4 py-8">
        {selectedPost ? (
          <>
            <PostDetails post={selectedPost} />
            <Button
              onClick={() => setSelectedPost(null)}
              className="mt-4"
            >
              Volte para os posts
            </Button>
          </>
        ) : (
          <PostList posts={samplePosts} onPostSelect={setSelectedPost} />
        )}
      </main>
      <Footer />
    </div>
  )
}