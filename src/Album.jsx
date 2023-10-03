import { useEffect, useState } from "react";


export function Album (){
     const [Album, setAlbum] = useState([]);
     const [search, setSearch] = useState('')

     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(Response => Response.json())
        .then(data=>{setAlbum(data)})
    },[])     


  function Buscar(e){
    setSearch(e.target.value)
    console.log(e.target.value)
  }


    const BuscarAlbum = Album.filter(card=>{
        return card.title.toLowerCase().includes(search.toLowerCase())

    })

    return (<div>
    <input type="search" placeholder="Buscar por titulo" value={search} onChange={Buscar}/>

        <table>
            <thead>
                <tr>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                </tr>
            </thead>
            <tbody>
            {BuscarAlbum.map(card=>(
                <tr key={card.id}>
                <td>{card.userId}</td>
                <td>{card.id}</td>
                <td>{card.title}</td>
            </tr>
            ))}
            </tbody>

        </table>
    </div>)
}