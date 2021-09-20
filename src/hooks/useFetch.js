import { useEffect, useState } from "react";

const useFetch = (url, config) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //..fetch
    fetch(url, config && config)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [url, config]);

  return { data, error, loading };
};

export default useFetch;
