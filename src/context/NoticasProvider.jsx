/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const NoticiasContext = createContext();

const NoticasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState('general');

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticasProvider };
export default NoticiasContext;
