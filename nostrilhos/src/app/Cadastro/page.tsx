import React from "react";
import Image from "next/image";
import trem01 from "@/img/trem01.png";

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      {/* Esquerda - Imagem com Link */}
      <div className="imagem-container">
        <Image src={trem01} alt="Estação de trem" width={748} height={1318} />

      </div>

      {/* Direita - Formulário */}
      <div className="form-container">
        <h2>Cadastro</h2>
        <form>
          <label>Nome completo</label>
          <input type="text" placeholder="Nome completo" />

          <label>Senha</label>
          <input type="password" placeholder="Senha" />

          <label>Repetir senha</label>
          <input type="password" placeholder="Repetir senha" />

          <label>Email</label>
          <input type="email" placeholder="Email" />

          <label>Data de Nascimento</label>
          <input type="date" />

          <button type="submit">Criar conta</button>
        </form>
      </div>
    </div>
  );
}
