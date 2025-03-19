import { Metadata } from "next";
import Image from "next/image";
import station from "@/img/station.png";
import imgpage1 from "@/img/imgpage1.png";
import imgpage2 from "@/img/imgpage2.png";
import imgpage3 from "@/img/imgpage3.png";
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Nos Trilhos ',
  description: 'página Home',
  openGraph: {
    title: 'Página Home - Nos Trilhos',
    description: 'Tamo na luta com next js'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }

}


export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-6">

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
        <Image src={station} alt="Estação de trem" className="rounded-lg" width={1093} height={472} />
        </div>
        <div>
          <p>
          A CCR é um grupo brasileiro que atua no setor de mobilidade urbana, sendo responsável pela operação de diversas linhas de trens metropolitanos em São Paulo por meio de suas concessionárias. A ViaMobilidade, uma empresa do Grupo CCR, é responsável pela operação, manutenção e investimentos nas linhas 8-Diamante e 9-Esmeralda do Trem Metropolitano de São Paulo por 30 anos (2022-2052), através de um contrato de concessão público-privada em parceria com o Governo do Estado de São Paulo.
          </p>
          <div className="mt-4">
          <Link href="/Loguin" className="bg-white text-black px-4 py-2 rounded-xl">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Ir para o Loguin
      </button>
    </Link>
          </div>
        </div>
      </section>

      {/* Verificação dos Status das Linhas */}
      <section className="my-6 p-6 bg-orange-600 rounded-lg">
        <h2 className="text-lg font-bold">Verificação dos Status das Linhas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-800 p-4 rounded">
            <p></p>
          <Image src={imgpage1} alt="Estação de trem" className="rounded-lg" width={220} height={146} />
            <h3 className="font-semibold">Linhas de Metrô</h3>
            <ul className="mt-2">
              <li> 📍 Linha 8-Diamante – Operação normal✅ </li>
              <li>📍 Linha 9-Esmeralda – Intervalos regulares✅ </li>
              <li> 📍 Linha 4-Amarela – Funcionamento estável✅ </li>
              <li>📍 Linha 5-Lilás – Circulação sem intercorrências ✅</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <p></p>
          <Image src={imgpage2} alt="Garota sentada" className="rounded-lg" width={220} height={146} />
            <h3 className="font-semibold">Combate a Ambulantes</h3>
            <p>O combate a ambulantes no metrô é importante para garantir segurança, conforto e organização no transporte público. Aqui estão alguns pontos principais:</p>
              <p>🚆Segurança – O comércio irregular pode obstruir passagens, dificultar evacuações em emergências e até facilitar furtos.</p>
              <p>📏 Organização – O metrô é um ambiente de circulação rápida. Ambulantes podem atrapalhar o fluxo de passageiros, especialmente em horários de pico.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
          <Image src={imgpage3} alt="Pés em um trilho de trem" className="rounded-lg" width={220} height={146}  />
            <h3 className="font-semibold">Você não está sozinho</h3>
            <p>Se você está passando por um momento difícil e sente que não há saída, por favor, saiba que você não está sozinho. 
            As linhas de trem não são a solução. Sua vida tem valor, e há esperança mesmo nos dias mais escuros. O que você sente agora não define seu futuro.

           <p> Ligue para o CVV (Centro de prevenção à Vida): 188</p></p>
          </div>
        </div>
      </section>

      {/* Item Perdido */}
      <section className="my-6 p-6 bg-orange-700 rounded-lg">
        <h2 className="text-lg font-bold">Item Perdido – Ajude-nos a Encontrá-lo!</h2>
        <ul className="mt-4">
          <li> Se você encontrou um objeto perdido, alguém pode estar desesperado tentando recuperá-lo. Pequenos gestos fazem toda a diferença!</li>
          <li>✔️ Verifique se há alguma identificação.</li>
          <li>✔️ Pergunte nas proximidades.</li>
          <li>✔️ Entregue em um local apropriado.</li>
          <li>✔️ Divulgue com responsabilidade.</li>
        </ul>
        <div className="mt-4">
          <button className="bg-orange-500 px-4 py-2 rounded">Saiba mais</button>
        </div>
      </section>
    </div>
  );
}
