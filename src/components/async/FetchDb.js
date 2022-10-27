import React from "react";
import useFetchAsync from "./hooks/useFetchAsync";
import promisesDemo from "./promises/promises";
import useAsyncAwaitDemo from "./promises/useAsyncAwaitDemo";

const FetchDb = () => {
  let url_vote = "http://localhost:8000/vote";
  let url_details = "http://localhost:8000/details";
  let url_pizza_town_one = "http://localhost:8008/firstMenu";
  let url_pizza_town_two = "http://localhost:8008/secondMenu";
  let url_pizza_town_three = "http://localhost:8008/thirdMenu";
  let url_poke_4 = "http://localhost:8010/moves";

  //Promises
  promisesDemo(url_poke_4);

  //Async Await
  useAsyncAwaitDemo(url_poke_4);

  return (
    <div>
      <h2>promisesDemo</h2>
    </div>
  );
};

export default FetchDb;
