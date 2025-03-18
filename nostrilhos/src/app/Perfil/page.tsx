"use client";
import Image from "next/image";
import perfil from "@/img/perfil.png";
import { useState } from "react";

type ProfileFields = "name" | "email" | "info" | "settings";

const initialProfile: Record<ProfileFields, string> = {
  name: "Usuário",
  email: "usuario@email.com",
  info: "Informações adicionais",
  settings: "Configurações do perfil",
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [editField, setEditField] = useState<ProfileFields | null>(null);
  const [tempValue, setTempValue] = useState("");

  const handleEdit = (field: ProfileFields) => {
    setEditField(field);
    setTempValue(profile[field] ?? "");
  };

  const handleSave = () => {
    if (editField) {
      setProfile({ ...profile, [editField]: tempValue });
      setEditField(null);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      <header className="bg-orange-500 w-full text-center p-4 text-lg font-bold">
        Página de Perfil
      </header>
      <div className="mt-6 text-center">
        <Image src={perfil} alt="Imagem 01" width={266} height={250}className="w-24 h-24 rounded-full mx-auto" />
          
        <h2 className="mt-2 bg-gray-700 px-3 py-1 rounded inline-block">{profile.name}</h2>
      </div>
      <div className="mt-6 w-full max-w-md">
        {Object.keys(profile).map((field) => (
          <div key={field} className="flex items-center justify-between bg-gray-300 p-3 my-2 rounded">
            {editField === field ? (
              <input
                type="text"
                className="w-full p-1 text-black"
                value={tempValue ?? ""}
                onChange={(e) => setTempValue(e.target.value)}
              />
            ) : (
              <span className="flex-grow">{profile[field] ?? "Não definido"}</span>
            )}
            <button
              className="bg-gray-700 text-white px-3 py-1 rounded ml-2 flex items-center justify-center w-10 h-10"
              onClick={() => (editField === field ? handleSave() : handleEdit(field))}
            >
              {editField === field ? "✔" : "⋮"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}