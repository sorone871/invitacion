import { useState } from "react";

const InvitationCard = ({ onSubmit }) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!token.trim()) {
      setError("Por favor ingresa un código.");
      return;
    }
    setError(""); // Limpia errores previos
    onSubmit(token, setError); // Llama la lógica que viene del padre
  };

  

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative perspective-1000">
        <div
          className={`
            bg-[#f4ecdc]/80 backdrop-blur-[2px]
            rounded-3xl p-8 transition-all duration-500 ease-out
            shadow-[20px_20px_40px_#63432D40,-20px_-20px_40px_#D6C7B060]
            hover:shadow-[25px_25px_50px_#63432D50,-25px_-25px_50px_#D6C7B070]
            w-full max-w-md
            ${token ? 'translate-y-[-6px] rotate-x-[3deg]' : ''}
          `}
        >
          <h1 className="text-3xl md:mb-6 font-bold text-[#3a2a1a] text-center drop-shadow-[1px_1px_0_#D6C7B0]">
            N&J
          </h1>

          <p className="text-[#4a3a27] mb-8 text-center text-lg">
            Ingresa tu código de invitación:
          </p>

          <div className="relative mb-2">
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Ejemplo: Familia123"
              className={`
                w-full px-6 py-4 bg-[#f4ecdc]/90 rounded-2xl border-0
                shadow-[inset_4px_4px_8px_#63432D40,inset_-4px_-4px_8px_#D6C7B070]
                text-[#3a2a1a] text-center text-lg font-medium
                placeholder-[#a8957a]
                transition-all duration-400 ease-out
                focus:outline-none focus:translate-y-[-3px]
                focus:shadow-[inset_2px_2px_6px_#63432D50,inset_-2px_-2px_6px_#D6C7B080,0_8px_16px_rgba(99,67,45,0.2)]
              `}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center animate-pulse">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className={`
              w-full mt-6 py-4 bg-[#f4ecdc]/90 rounded-2xl border-0
              shadow-[6px_6px_12px_#63432D40,-6px_-6px_12px_#D6C7B070]
              text-[#3a2a1a] text-lg font-semibold
              transition-all duration-300 ease-out
              hover:translate-y-[-2px]
              hover:shadow-[10px_10px_20px_#63432D60,-10px_-10px_20px_#D6C7B090]
              active:shadow-[inset_4px_4px_8px_#63432D50,inset_-4px_-4px_8px_#D6C7B070]
            `}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
