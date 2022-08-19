import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Noticias = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={title}
            image={urlToImage}
            height="250"
          />
        )}
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" component="div">
            {description}
          </Typography>

            <CardActions>
                
                <Link href={url} target="_blank"
                variant="botton" 
                width={'100%'}
                textAlign="center"
                sx={{
                    textDecoration: 'none',
                }}
                >
                
                

                
                LEER NOTICIA</Link>
            </CardActions>

        </CardContent>
      </Card>
    </Grid>
  );
};
export default Noticias;
