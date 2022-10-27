import { useEffect, useState } from "react";

const useFetchAsync = (url, err) => {
  //manage state
  const [data, setData] = useState("");
  const [errMsg, setErrMsg] = useState("");

  //fetch data from an API
  useEffect(() => {
    const fetchCustomer = async () => {
      await fetch(url)
        .then((response) => {
          if (!response.ok) {
            setErrMsg(err);
            throw Error("Could not fetch data at the moment!");
          }
          setErrMsg("");
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
    };
    fetchCustomer();
  }, [url, err]);

  return { data, errMsg };
};

export default useFetchAsync;