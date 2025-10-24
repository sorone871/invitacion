import { useState } from "react";
import InvitationCard from "../Invitacion/Invitacion";
const Main = () =>{

    

 const handleAccess = async (token, setError) => {
  try {
    console.log('1. Token a validar:', token);
    
    const response = await fetch('https://nyj.soroner.com/wp-json/boda/v1/acceder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Cambiar a JSON
      },
      body: JSON.stringify({ token: token }), // Cambiar a JSON
      credentials: 'include' // ← AÑADIR ESTO (IMPORTANTE)
    });
    
    const data = await response.json();
    console.log('2. Respuesta del API:', data);

    if (data.status === "valido") {
      console.log('3. Session ID recibido:', data.session_id);
      
      // Crear cookie (tu método actual está bien)
      document.cookie = `boda_session=${data.session_id}; path=/; max-age=${60*60*24}; domain=.soroner.com; secure; samesite=lax`;
      console.log('4. Cookie creada');
      
      // AÑADIR una pequeña pausa para asegurar la cookie
      await new Promise(resolve => setTimeout(resolve, 100));
      
      console.log('5. Cookies actuales:', document.cookie);
      
      // Redirigir
      window.location.href = 'https://nyj.soroner.com/';
    } else {
      setError(data.message || "Código inválido o ya usado.");
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