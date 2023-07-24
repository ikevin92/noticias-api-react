/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const NoticiasContext = createContext();

const NoticasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };

  const consultarAPI = async (isPage = false) => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&page=${pagina}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    if (!isPage) {
      setPagina(1);
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
    }

    const { data } = await axios(url);

    setNoticias(data.articles);
    setTotalNoticias(data.totalResults);
  };

  useEffect(() => {
    consultarAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria]);

  useEffect(() => {
    consultarAPI(true);
  }, [pagina]);

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        noticias,
        totalNoticias,
        pagina,
        handleChangeCategoria,
        handleChangePagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticasProvider };
export default NoticiasContext;
