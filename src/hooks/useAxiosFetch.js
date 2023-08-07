import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl, objectKey, func) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          if (objectKey && func) {
            setData(func(response.data[objectKey])); // Panggil fungsi func dengan data dari respons API
          } else if (objectKey) {
            setData(response.data[objectKey]);
          } else if (func) {
            setData(func(response.data));
          } else {
            setData(response.data);
          }
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl, objectKey, func]); // Tambahkan func sebagai dependensi

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
