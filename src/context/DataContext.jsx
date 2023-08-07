import { createContext, useState, useEffect } from 'react';
import { BASE_URL, API_KEY, fetchData } from '../api/base';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [searchTyping, setSearchTyping] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');

  useEffect(() => {
  
    console.log('searchSubmit changed:', searchSubmit);
  }, [searchSubmit]);

  return <DataContext.Provider value={{ searchTyping, setSearchTyping, searchSubmit, setSearchSubmit }}>{children}</DataContext.Provider>;
};

export default DataContext;
