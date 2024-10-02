import { Card } from "@/components/ui/card"

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({ name, role, image }: TeamMember) {
  return (
    <Card className="p-4">
      <div className="text-center">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </Card>
  )
}