import { Card } from "@/components/ui/card"

interface Partner {
  name: string;
  description: string;
  logo: string;
}

export default function PartnerCard({ name, description, logo }: Partner) {
  return (
    <Card className="p-4">
      <img
        src={logo}
        alt={name}
        className="h-16 object-contain mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}