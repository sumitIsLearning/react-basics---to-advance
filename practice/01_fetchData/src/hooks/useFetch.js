import { useEffect, useState } from "react";

export const useFetch = (url , method) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const query = `
  query {
    post {
      id
      title
      body
    }
  }
`;

  async function fetchData(isMounted) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) throw error(`HTTP Error status: ${response.status}`);
      const content = await response.json();

      {
        isMounted && setData(content.data.post);
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
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
