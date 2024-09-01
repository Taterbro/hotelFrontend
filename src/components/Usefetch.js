import { useState, useEffect } from "react";

const Usefetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("something went wrong, the data wasn't fetched");
        }
        return res.json();
      })
      .then((dat) => {
        setData(dat);
        setLoading(false);
        seterror(null);
        console.log(dat);
      })
      .catch((err) => {
        seterror(err.message);
        setLoading(false);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default Usefetch;
