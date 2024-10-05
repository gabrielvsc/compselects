import TeamCard from "./TeamCard"

export default function TeamSection() {
  const teamMembers = [
    { name: "Gabriel Vasconcelos", role: "Editor Sênior", image: "https://avatars.githubusercontent.com/u/91812687?v=4" },
    { name: "Paulo Victor", role: "Editor Sênior", image: "https://avatars.githubusercontent.com/u/94625698?v=4" },
    { name: "Alfredo Vasconcelos", role: "Editor Sênior", image: "https://avatars.githubusercontent.com/u/70920004?v=4" },
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