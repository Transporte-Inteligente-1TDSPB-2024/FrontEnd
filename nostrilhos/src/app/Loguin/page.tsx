"use client";
import Image from "next/image";
import trem01 from "@/img/trem01.png"
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", password);
  };

  return (
    <div className="flex h-screen">
      {/* Lado esquerdo com a imagem */}
      <div className="imagem-container">
        <Image src={trem01} alt="Estação de trem" width={748} height={1318} />

      </div>

      {/* Lado direito com o formulário */}
      <div className="w-1/2 bg-gray-900 flex flex-col justify-center items-center text-white px-10">
        <h2 className="text-orange-500 text-3xl font-bold mb-6">Loguin</h2>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Campo de email */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-300 text-black rounded outline-none"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo de senha */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Senha</label>
            <input
              type="password"
              className="w-full p-3 bg-gray-300 text-black rounded outline-none"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Botão de login */}
          <button
            type="submit"
            className="w-full p-3 bg-gray-300 text-black font-semibold rounded mt-3 hover:bg-gray-400 transition"
          >
            Entrar
          </button>
        </form>

        {/* Link de recuperação de senha */}
        <p className="text-gray-400 mt-3 italic cursor-pointer hover:underline">
          Esqueci a senha
        </p>
      </div>
    </div>
  );
}
