import { MapPin, Phone, Mail } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Informação de Contato</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Rua Exemplo, 123 - São Paulo, SP</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-primary" />
          <span>(11) 99999-9999</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-primary" />
          <span>contato@exemplo.com</span>
        </div>
      </div>
    </div>
  )
}