import Link from "next/link";
import Image from "next/image";
import logofiap from "@/img/logofiap.png";
import logonostrilhos from "@/img/logonostrilhos.png";

export default function Header() {
  return (
    <header className="bg-white text-black px-4 py-2 rounded-xl flex items-center justify-between border-b-2 border-orange-600">
      {/* Logo */}
      <div>
      <Link href="/" className="bg-white text-black px-4 py-2 rounded-xl">
        <Image src={logonostrilhos} alt="Logo" width={64} height={64} className="h-12" />
        </Link>
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/Perfil" className="bg-white text-black px-4 py-2 rounded-xl">Perfil</Link></li>
          <li><Link href="/Rotas" className="bg-white text-black px-4 py-2 rounded-xl">Verificação de Linhas</Link></li>
          <li><Link href="/AchadoPerdido" className="bg-white text-black px-4 py-2 rounded-xl">Achados e Perdidos</Link></li>
          <li><Link href="/Mapa" className="bg-white text-black px-4 py-2 rounded-xl">Mapa</Link></li>
          <li><Link href="/Duvidas" className="bg-white text-black px-4 py-2 rounded-xl">Dúvidas</Link></li>
        </ul>
      </nav>

      {/* Botão de conta */}
      <div>
        <Link href="/Cadastro" className="bg-white text-black px-4 py-2 rounded-xl">Crie sua conta</Link>
      </div>
    </header>
  );
}