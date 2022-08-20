import { useEffect, useState, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

 const [categoria,setCategoria] = useState("general");
 const [noticias, setNoticias] = useState([])
 const [pagina, setPagina] = useState(1)
 const [totalPaginas, setTotalPaginas] = useState(0)

 useEffect(() => {

     const consultarApi = async () => {

         const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
         const respuesta = await fetch(url)
         const data = await respuesta.json()
        //  console.log(data)
         setNoticias(data.articles)
         setTotalPaginas(Math.ceil(data.totalResults/20) )
         setPagina(1)
     }

     consultarApi()

 } , [categoria])

 useEffect(() => {

    const consultarApi = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
        const respuesta = await fetch(url)
        const data = await respuesta.json()
       //  console.log(data)
        setNoticias(data.articles)
        setTotalPaginas(Math.ceil(data.totalResults/20) )
    }

    consultarApi()

} , [pagina]) 

 const handlerCategoria = (e) => {
        setCategoria(e.target.value);
 }

 const handlerChangePagintion = (e,value) => {
    //console.log(e.target.textContent) uso el textContent para obtener el numero de la pagina por que no tiene value
    //console.log(value) puedo usar value por que llega un evento y un valor
    setPagina(value)
 }

    return (

    <NoticiasContext.Provider
    value={{
        categoria,
        handlerCategoria,
        noticias,
        totalPaginas,
        handlerChangePagintion,
        pagina

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