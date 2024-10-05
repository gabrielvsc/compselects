export function Map() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Nossa localização</h2>
        <iframe
          title="Google Maps"
          className="w-full h-60"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7916.474543657527!2d-35.91908535940181!3d-7.213752327217538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e2c7816c38f%3A0xd98e854f0b0d6fe1!2sUFCG%20-%20Campus%20Campina%20Grande!5e0!3m2!1spt-BR!2sbr!4v1727385365513!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
    </div>
  )
}