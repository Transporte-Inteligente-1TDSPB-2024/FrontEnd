import Image from "next/image";
import mapa2 from "@/img/mapa2.png";

export default function MapaFerroviario() {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center">
        {/* Cabeçalho */}
        <header className="bg-orange-500 w-full text-center p-4 text-lg font-bold">
          Confuso com o Mapa Ferroviário?
        </header>
  
        {/* Descrição */}
        <div className="text-center p-6 max-w-3xl">
          <h2 className="text-xl font-semibold">
            Os trens estão circulando por São Paulo desde 1867, as linhas estão maiores do que nunca
          </h2>
          <p className="text-gray-300 mt-2">
            Ao acessar o mapa, é possível verificar quais trens estão em operação, os horários estimados de chegada e 
            eventuais ocorrências que possam impactar o trajeto.
          </p>
        </div>
  
        {/* Botão */}
        <div className="bg-orange-500 px-6 py-2 rounded text-black font-bold cursor-pointer hover:bg-orange-600">
          Mapa Ferroviário
        </div>
  
        {/* Blocos de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-4xl w-full">
          <div className="bg-orange-600 p-4 rounded text-center">
            <h3 className="font-bold">CCS AutoBan</h3>
            <p>SP-330, SP-348, SP-300, SPI-102/330</p>
          </div>
          <div className="bg-orange-600 p-4 rounded text-center">
            <h3 className="font-bold">CCR RioSP</h3>
            <p>BR-116, BR-101</p>
          </div>
          <div className="bg-orange-600 p-4 rounded text-center">
            <h3 className="font-bold">CCR RodoAnel</h3>
            <p>SP-021</p>
          </div>
          <div className="bg-orange-600 p-4 rounded text-center">
            <h3 className="font-bold">CCR SPVias</h3>
            <p>SP-280, SP-270, SP-255, SP-258, SP-127</p>
          </div>
          <div className="bg-orange-600 p-4 rounded text-center">
            <h3 className="font-bold">CCR ViaOeste</h3>
            <p>SP-270, SP-280, SP-075, SPI091/270</p>
          </div>
          <div className="bg-orange-600 p-4 rounded text-center">
            <h3 className="font-bold">Renovias</h3>
            <p>SP-340, SP-215, SP-342, SP-344 e SP-350</p>
          </div>
        </div>
  
        {/* Imagem do Mapa */}
        <div className="p-6">
        <Image src={mapa2} alt="Mapa dos Trens" className="rounded-lg" width={1103} height={745} />

        </div>
      </div>
    );
  }
  