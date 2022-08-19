import React from "react"
import useNoticias from '../hooks/useNoticias'
import { Grid,Typography } from "@mui/material"
import Noticias from "./Noticias"

const ListadoNoticias = () => {
    const {noticias} = useNoticias()
    console.log(noticias)

  return (
    <>
    <Typography
    textAlign="center" 
    marginY={5}
    component="h2" variant="h3"
      >
        Ultimas Noticias
    </Typography>

    <Grid container spacing={2} >
        {noticias.map(noticia => (
            <Noticias key={noticia.url} noticia={noticia}/>))}
    </Grid>

    </>
  )
}
export default ListadoNoticias