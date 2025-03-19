"use client";
import Image from "next/image";
import perfil from "@/img/perfil.png";
import { useState } from "react";

export default function ProfileCard() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    informação: "",
    configurações: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen p-10">
      {/* Imagem do perfil */}
      <div className="relative">
        <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <Image src={perfil} alt="Mapa dos Trens" className="rounded-lg" width={266} height={250} />
        </div>
        <div className="text-center mt-2 bg-gray-700 px-4 py-1 rounded-md">{formData.name || "Nome"}</div>
      </div>

      {/* Formulário de Informações */}
      <div className="mt-6 w-full max-w-md space-y-4">
        {Object.keys(formData).map((key, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-300 text-black px-4 py-2 rounded-md">
            <input
              type="text"
              name={key}
              value={formData[key] || ""} /*Se nem o chatgt arrumou isso com eu tentando 15x, eu aceito tirar uma nota mais baixa por causa dessa coisa */
              onChange={handleChange}
              className="bg-transparent w-full outline-none"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
