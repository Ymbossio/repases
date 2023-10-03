import { useState } from "react";



export function Contador(){
    const [Contar, setContar] = useState(0);

    return(<div>
        <h1>Contador en: {Contar}</h1>
        <button onClick={()=>{setContar(Contar+10)}}>Sumar</button>

        <button onClick={()=>{setContar(Contar-10)}}>Restar</button>

        <button onClick={()=>{setContar(Contar===0)}}>Reiniciar</button>
    </div>)
}