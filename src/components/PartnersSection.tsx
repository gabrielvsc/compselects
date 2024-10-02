import PartnerCard from "./PartnerCard"

export default function PartnersSection() {
  const partners = [
    { name: "Tech University", description: "Leading research institution in computer science", logo: "https://via.placeholder.com/200x300" },
    { name: "InnovateCorp", description: "Global technology solutions provider", logo: "https://via.placeholder.com/200x300" },
    { name: "DataSphere", description: "Big data and analytics company", logo: "https://via.placeholder.com/200x300" },
    { name: "AI Frontiers", description: "Artificial intelligence research center", logo: "https://via.placeholder.com/200x300" },
    { name: "CyberGuard", description: "Cybersecurity consulting firm", logo: "https://via.placeholder.com/200x300" },
    { name: "CloudNine", description: "Cloud computing services provider", logo: "https://via.placeholder.com/200x300" },
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