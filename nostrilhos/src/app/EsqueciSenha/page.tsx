import Image from "next/image";
import Link from "next/link";
import trem01 from "@/img/trem01.png"

export default function EsqueciSenha() {
  return (
    <div className="container">
      {/* Lado esquerdo com imagem */}
      <div className="image-side">
      <Image src={trem01} alt="Estação de trem" objectFit="cover" width={748} height={1318} />
      </div>

      {/* Lado direito com formulário */}
      <div className="form-side">
        <h2>Esqueci a senha</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Celular" />
          <button type="submit">Enviar código</button>
        </form>

        <Link href="/Loguin">Voltar para login</Link>
      </div>
    </div>
  );
}
