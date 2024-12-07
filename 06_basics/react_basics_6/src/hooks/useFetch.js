import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(isMounted) {
    setLoading(true);
    try {
      console.log(url);
      const response = await fetch(url);

      if (!response.ok) {
        throw error(`HTTP error, status:${response.status}`);
      }

      const content = await response.json();
      {
        isMounted && setData(content);
        setLoading(false);
      }
      
    } catch (err) {
      {
        isMounted && setLoading(false);
        setError(`An error occured: ${err.message}`);
      }
    }
  }

  useEffect(() => {
    let isMounted = true;
    fetchData(isMounted);

    return () => {
      isMounted = false;
    };
  },[url]);
  

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
