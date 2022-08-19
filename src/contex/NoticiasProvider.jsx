import { useEffect, useState, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

 const [categoria,setCategoria] = useState("general");

 const [noticias, setNoticias] = useState([])

 useEffect(() => {

     const consultarApi = async () => {

         const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
         const respuesta = await fetch(url)
         const data = await respuesta.json()
       //  console.log(data)
         setNoticias(data.articles)
     }

     consultarApi()

 } , [categoria])

 const handlerCategoria = (e) => {
        setCategoria(e.target.value);
 }

    return (

    <NoticiasContext.Provider
    value={{
        categoria,
        handlerCategoria,
        noticias

    }}
    >
        {children}
    </NoticiasContext.Provider>
    )

}

export {
    NoticiasProvider
}

export default NoticiasContext;