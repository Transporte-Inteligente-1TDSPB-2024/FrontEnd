import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-8 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className="text-lg font-bold mb-2">Mídias</h2>
        <ul className="flex space-x-4">
          <li className="inline p-10"><Link href="#" className="text-white hover:text-gray-400"><FaXTwitter size={24} /></Link></li>
          <li className="inline p-10"><Link href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></Link></li>
          <li className="inline p-10"><Link href="#" className="text-white hover:text-gray-400"><FaYoutube size={24} /></Link></li>
          <li className="inline p-10"><Link href="#" className="text-white hover:text-gray-400"><FaLinkedin size={24} /></Link></li>
        </ul>
      </div>
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-lg font-bold mb-2">Sobre</h2>
        <p className="text-gray-300">
          Projeto desenvolvido para a conclusão do Curso em parceria com a CCR, focando na mobilidade de Trens e Itens perdidos entre as estações.
        </p>
        <ul className="mt-2 text-gray-400">
          <li>Projeto desenvolvido por:</li>
          <li>Júlia Damasceno Busso - RM560293 - 1TDSPB</li>
          <li>Lucas Almeida de Siqueira - RM560214 - 1TDSQ</li>
          <li>Ernandes Ribeiro Neto - RM559731 - 1TDSPR</li>
        </ul>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <img src="/logo1.png" alt="Logo 1" className="h-12" />
        <img src="/logo2.png" alt="Logo 2" className="h-12" />
      </div>
    </footer>
  );
}