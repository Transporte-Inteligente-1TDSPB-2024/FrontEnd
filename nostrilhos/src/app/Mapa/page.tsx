"use client";
import Image from "next/image";
import mapa from "@/img/mapa.png";
import { useState } from "react";


export default function Planejamento() {
  const [rotaSelecionada, setRotaSelecionada] = useState("Mais rápida");
  const [transporteSelecionado, setTransporteSelecionado] = useState("");

  const opcoesRota = ["Mais rápida", "Caminhar menos", "Menos trocas"];
  const opcoesTransporte = ["Ônibus", "Metrô", "Trem", "Barca", "Pedale", "Carros particulares"];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Cabeçalho */}
      <header className="bg-orange-500 text-center p-4 text-lg font-bold">
        Planejamento de Rotas
      </header>

      {/* Introdução */}
      <div className="text-center px-6 py-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold">Planejamento de Rota: A Chave para Eficiência e Economia</h2>
        <p className="mt-3 text-gray-300">
          O planejamento de rota é essencial para otimizar deslocamentos, reduzir custos e garantir pontualidade.
          Seja para logística, transportes ou viagens pessoais, definir o melhor trajeto evita atrasos, economiza combustível
          e melhora a experiência do usuário. Além disso, minimiza impactos ambientais ao reduzir emissões desnecessárias.
        </p>
      </div>

      {/* Planejamento de Rota */}
      <div className="bg-gray-800 max-w-md mx-auto p-4 rounded">
        <h3 className="text-lg font-bold">Planejando a Rota</h3>

        {/* Preferências */}
        <div className="bg-gray-300 text-black p-3 mt-3 rounded">
          <div className="flex justify-between">
            <span className="font-semibold">Preferências</span>
            <button className="text-blue-600 font-bold">Finalizar</button>
          </div>
        </div>

        {/* Tipo de Rota */}
        <div className="bg-gray-200 text-black mt-3 p-3 rounded">
          <h4 className="font-semibold">Tipo de rota</h4>
          {opcoesRota.map((opcao) => (
            <div
              key={opcao}
              className={`flex items-center py-2 cursor-pointer ${
                rotaSelecionada === opcao ? "text-blue-600 font-bold" : ""
              }`}
              onClick={() => setRotaSelecionada(opcao)}
            >
              {rotaSelecionada === opcao && <span className="mr-2">✔</span>}
              {opcao}
            </div>
          ))}
        </div>

        {/* Tipo de Transporte */}
        <div className="bg-gray-200 text-black mt-3 p-3 rounded">
          <h4 className="font-semibold">Tipos de transporte</h4>
          {opcoesTransporte.map((transporte) => (
            <div
              key={transporte}
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => setTransporteSelecionado(transporte)}
            >
              <span>{transporte}</span>
              <input type="radio" name="transporte" checked={transporteSelecionado === transporte} readOnly />
            </div>
          ))}
        </div>
      </div>

      {/* Imagem do mapa */}
      <div className="max-w-4xl mx-auto mt-6">
        <Image src={mapa} alt="Mapa dos Trens" className="rounded-lg" width={900} height={1388} />
      </div>
    </div>
  );
}
