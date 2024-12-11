import React, { useEffect, useState } from "react";

export const useFetch = (url, method = "GET", query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(isMounted) {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: query,
      });

      if (!response.ok) throw error(`HTTP Error status:${response.status}`);

      const content = await response.json();
      {
        isMounted && setData(content);
        setLoading(false);
      }
    } catch (error) {
      {
        isMounted && setError(`An Error Occured:${error.message}`);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    let isMounted = true;
    fetchData(isMounted);

    return () => {
      isMounted = false;
    };
  }, [url, method]);

  return {
    data,
    loading,
    error,
  };
};
