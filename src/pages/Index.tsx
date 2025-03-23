
import React from 'react';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">Design Elegante e Minimalista</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Uma experiência moderna e sofisticada inspirada nos princípios de design da Apple</p>
          <a 
            href="#sobre" 
            className="inline-block px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#sobre');
              if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                
                window.scrollTo({
                  top: y,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Conheça Mais
          </a>
        </div>
      </section>
      
      {/* Sobre Section */}
      <section id="sobre" className="min-h-screen flex items-center bg-white p-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Sobre</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-medium mb-4">Nossa Filosofia</h3>
              <p className="text-gray-700 mb-6">
                Acreditamos que o design excepcional surge da simplicidade e da atenção meticulosa aos detalhes. 
                Nossa abordagem é inspirada pelos princípios de Steve Jobs e Dieter Rams, focando na criação 
                de experiências que são intuitivas e elegantes.
              </p>
              <p className="text-gray-700">
                Cada elemento é cuidadosamente considerado e tem um propósito. Nada é supérfluo ou desnecessário, 
                resultando em uma experiência limpa e focada que coloca o conteúdo e a funcionalidade em primeiro lugar.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64 md:h-auto">
              <p className="text-lg font-medium text-gray-500">Imagem Ilustrativa</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Serviços Section */}
      <section id="servicos" className="min-h-screen flex items-center bg-gray-50 p-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gray-900 rounded-full mb-6 flex items-center justify-center text-white">
                  {item}
                </div>
                <h3 className="text-xl font-medium mb-3">Serviço {item}</h3>
                <p className="text-gray-700">
                  Descrição do serviço com foco na qualidade e atenção aos detalhes, 
                  refletindo nossa abordagem minimalista e funcional.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefícios Section */}
      <section id="beneficios" className="min-h-screen flex items-center bg-white p-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Benefícios</h2>
          <div className="space-y-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-lg font-medium text-gray-500">Imagem {item}</p>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-medium mb-3">Benefício {item}</h3>
                  <p className="text-gray-700">
                    Uma descrição detalhada do benefício, enfatizando como nossa abordagem 
                    minimalista e focada em detalhes traz vantagens tangíveis para você.
                    A atenção aos detalhes e o design intencional resultam em uma experiência superior.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contato Section */}
      <section id="contato" className="min-h-screen flex items-center bg-gray-900 text-white p-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Entre em Contato</h2>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block mb-2 text-sm font-medium">Nome</label>
                  <input 
                    type="text" 
                    id="nome" 
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mensagem" className="block mb-2 text-sm font-medium">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="inline-block px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-950 text-white/70 p-6">
        <div className="max-w-5xl mx-auto text-center">
          <p>© 2023 Elegance Design. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
