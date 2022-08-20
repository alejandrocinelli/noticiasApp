import React from "react";
import useNoticias from "../hooks/useNoticias";
import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Noticias from "./Noticias";

const ListadoNoticias = () => {
  const { noticias,totalPaginas,handlerChangePagintion,pagina } = useNoticias();
  //console.log(noticias)

  return (
    <>
      <Typography textAlign="center" marginY={5} component="h2" variant="h3">
        Ultimas Noticias
      </Typography>

      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticias key={noticia.url} noticia={noticia} />
        ))}
      </Grid>

      <Stack spacing={2}
      sx={{
          marginTop: '2rem',
          marginBottom: '3rem',
      }}
      direction="row"
      alignItems="center"
      justifyContent="center"
      >
        <Pagination 
        count={totalPaginas} color="primary"
        onChange={handlerChangePagintion}
        page={pagina}
        
        />
      </Stack>
    </>
  );
};
export default ListadoNoticias;
