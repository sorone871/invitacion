import { useState } from "react";
import InvitationCard from "../Invitacion/Invitacion";
const Main = () =>{

    

    const handleAccess = async (token, setError) => {
  try {
    const response = await fetch(
      `https://nyj.soroner.com/wp-json/boda/v1/verificar/?token=${encodeURIComponent(token)}`
    );
    const data = await response.json();

    if (data.status === "valido") {
      // Redirigir agregando ?auth=TOKEN
      window.location.href = `https://nyj.soroner.com/?auth=${token}`;
    } else {
      setError("Código inválido o ya usado.");
    }
  } catch (error) {
    console.error("Error de conexión:", error);
    setError("Error de conexión con el servidor. Intenta nuevamente.");
  }
};


    return(
        <main className="h-screen w-full bg-[url('/image/papiroChico.png')] bg-no-repeat bg-cover bg-center bg-[#0E0E0E] flex flex-col justify-start items-center p-8
        font-got
        ">
            <div className="w-[10rem] h-[10rem]">
                <img src="/image/wedding.png" alt="" />
            </div>


            <InvitationCard 
                onSubmit={handleAccess}
            />
           


        </main>
    )
}

export default Main;