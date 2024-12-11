import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET", query = null, variables = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(isMounted) {
    setLoading(true);
    try {
      const options = {
        method: method.toUpperCase(),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      };

      if (options.method === "POST") {
        options.body = JSON.stringify({
          query,
          variables,
        });
      }
      console.log(options);
      const response = await fetch(url, options);

      if (!response.ok) throw error(`HTTP Error status: ${response.status}`);
      const content = await response.json();

      {
        isMounted && setData(content.data);
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
    console.log("mounted");
    let isMounted = true;
    fetchData(isMounted);
    return () => {
      isMounted = false;
    };
  }, [url , method , query, JSON.stringify(variables) ]);

  return {
    data,
    loading,
    error,
  };
};
