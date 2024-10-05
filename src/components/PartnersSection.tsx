import PartnerCard from "./PartnerCard"

export default function PartnersSection() {
  const partners = [
    { name: "Rocketseat", description: "Plataforma de Ensino de Programação", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdhz5AbI0bBXT_p6pu3gJ0OipamVbNHLDg&s" },
    { name: "UFCG", description: "Universidade Federal de Campina Granade", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UfcgBrasao.jpg/640px-UfcgBrasao.jpg" },
    { name: "StackOverFlow", description: "Maior comunidade de desenvolvedores do mundo", logo: "https://media.wired.com/photos/5926db217034dc5f91becd6b/master/w_2560%2Cc_limit/so-logo-s.jpg" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Nossos Parceiros</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  )
}