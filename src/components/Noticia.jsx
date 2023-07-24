/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

const Noticia = ({ noticia }) => {
  const { urlToImage = null, source, title, description, url } = noticia;

  if (!urlToImage) return null;

  return (
    <Grid
      item
      md={6}
      lg={4}
    >
      <Card>
        <CardMedia
          component="img"
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage}
          height={250}
        />

        <CardContent>
          <Typography
            variant="body1"
            color="error"
          >
            {source.name}
          </Typography>
          <Typography
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={'100%'}
            textAlign="center"
          >
            Leer Noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default Noticia;
