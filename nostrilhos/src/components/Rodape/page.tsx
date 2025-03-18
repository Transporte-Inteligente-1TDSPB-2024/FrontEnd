import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logonostrilhos from "@/img/logonostrilhos.png";
import logofiap from "@/img/logofiap.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-bold mb-2">Mídias</h2>
        <ul className="flex space-x-4">
          <li><Link href="#" className="text-white hover:text-white-400"><FaXTwitter size={24} /></Link></li>
          <li><Link href="#" className="text-white hover:text-white-400"><FaInstagram size={24} /></Link></li>
          <li><Link href="#" className="text-white hover:text-white-400"><FaYoutube size={24} /></Link></li>
          <li><Link href="#" className="text-white hover:text-white-400"><FaLinkedin size={24} /></Link></li>
        </ul>
      </div>
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-lg font-bold mb-2">Sobre</h2>
        <p className="text-gray-300">
          Projeto desenvolvido para a conclusão do Curso em parceria com a CCR, focando na mobilidade de Trens e Itens perdidos entre as estações.
        </p>
        <ul className="mt-2 text-gray-400 text-left">
          <li>Projeto desenvolvido por:</li>
          <li>Júlia Damasceno Busso - RM560293 - 1TDSPB</li>
          <li>Lucas Almeida de Siqueira - RM560214 - 1TDSQ</li>
          <li>Ernandes Ribeiro Neto - RM559731 - 1TDSPR</li>
        </ul>
      </div>
      <div className="flex flex-col items-end space-y-4">
        <Image src={logofiap} alt="Logo Fiap" className="h-12" width={64} height={64} />
        <Image src={logonostrilhos} alt="Logo Nos Trilhos" className="h-12" width={64} height={64}  />
      </div>
    </footer>
  );
}
