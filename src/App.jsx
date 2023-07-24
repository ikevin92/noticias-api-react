import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import { NoticasProvider } from './context/NoticasProvider';

function App() {
  return (
    <NoticasProvider>
      <Container>
        <header>
          <Typography
            align="center"
            marginY={5}
            component="h1"
            variant="h3"
          >
            Buscador de noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />
      </Container>
    </NoticasProvider>
  );
}

export default App;
