const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        
        {/* Links */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Início</a></li>
            <li><a href="/about" className="hover:text-white">Sobre nós</a></li>
            <li><a href="/submissions" className="hover:text-white">Publicações</a></li>
            <li><a href="/authors" className="hover:text-white">Autores</a></li>
            <li><a href="/contact" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/careers" className="hover:text-white">Carreiras</a></li>
            <li><a href="/partners" className="hover:text-white">Parcerias</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/events" className="hover:text-white">Eventos</a></li>
            <li><a href="/support" className="hover:text-white">Suporte</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">Contato</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:contato@exemplo.com" className="hover:text-white">contato@exemplo.com</a></li>
            <li>Telefone: <a href="tel:+551199999999" className="hover:text-white">(11) 99999-9999</a></li>
            <li>Endereço: Rua Exemplo, 123 - São Paulo, SP</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-white">Assine nossa Newsletter</h3>
          <p className="text-sm mb-4">Receba as últimas atualizações diretamente no seu e-mail.</p>
          <form>
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className="w-full p-2 mb-4 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600" 
            />
            <button 
              type="submit" 
              className="w-full bg-gray-700 py-2 rounded text-gray-300 hover:bg-gray-600">
              Inscrever-se
            </button>
          </form>
        </div>

      </div>
      
      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        <p>Desenvolvido por <strong>@gabrielvscode.</strong> Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
