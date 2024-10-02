import TeamCard from "./TeamCard"

export default function TeamSection() {
  const teamMembers = [
    { name: "Gabriel Vasconcelos", role: "Editor Sênior", image: "https://via.placeholder.com/200x300" },
    { name: "Paulo Andrade", role: "Editor Sênior", image: "https://via.placeholder.com/200x300" },
    { name: "Alfredo Vasconcelos", role: "Editor Sênior", image: "https://via.placeholder.com/200x300" },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Nosso Time</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}