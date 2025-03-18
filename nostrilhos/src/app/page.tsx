import { Metadata } from "next";
import Image from "next/image";
import station from "@/img/station.png";
import imagem01logo from "@/img/imagem01logo.png";
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
          <Link href="/perfil">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Ir para o Perfil
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
            <h3 className="font-semibold">Linhas de Metrô</h3>
            <ul className="mt-2">
              <li>🔴 Linha 8-Diamante – Operação normal</li>
              <li>🟢 Linha 9-Esmeralda – Intervalos regulares</li>
              <li>🟡 Linha 4-Amarela – Funcionamento estável</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold">Combate a Ambulantes</h3>
            <p>O combate a ambulantes no metrô é importante para segurança...</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold">Você não está sozinho</h3>
            <p>Se estiver passando por um momento difícil, saiba que não está sozinho...</p>
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
