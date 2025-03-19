import Image from "next/image";
import trem01 from "@/img/trem01.png";

export default function Registro() {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">Registro Achados e Perdidos</header>

      {/* Layout Principal */}
      <div className="container">
        {/* Imagem à esquerda */}
        <div className="image-container">
        <Image src={trem01} alt="Estação de trem" width={748} height={1318} />
        </div>

        {/* Formulário à direita */}
        <div className="form-container">
          <h2 className="form-title">Cadastro de <br /> Item Perdido <br /> ou Assédio</h2>

          <form>
            <input type="text" placeholder="Nome completo" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="text" placeholder="Localização" className="input-field" />
            <input type="text" placeholder="Item perdido ou Assédio" className="input-field" />
            <textarea placeholder="Descrição do Item ou abusador" className="input-field textarea-field"></textarea>

            {/* Upload de Arquivo */}
            <div className="file-upload">Arquivo <br /> foto.png</div>

            {/* Botão de Envio */}
            <button className="submit-button">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}