/* eslint-disable react/prop-types */
import { createContext, useEffect } from 'react';

const NoticiasContext = createContext();

const NoticasProvider = ({ children }) => {
  return (
    <NoticiasContext.Provider value={{}}>{children}</NoticiasContext.Provider>
  );
};

export { NoticasProvider };
export default NoticiasContext;
