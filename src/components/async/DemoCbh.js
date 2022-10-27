import React from "react";
import callBackHell from "./callBackHell";

const DemoCbh = () => {
  //Resouces
  let url_pizza_town_one = "http://localhost:8008/firstMenu";
  let url_pizza_town_two = "http://localhost:8008/secondMenu";
  let url_pizza_town_three = "http://localhost:8008/";
  // let poke_url = "https://pokeapi.co/api/v2/pokemon/1"; // the main endpoint
  let url_poke = "http://localhost:8010/";
  let url_poke_0 = "http://localhost:8010/abilities";
  let url_poke_1 = "http://localhost:8010/forms";
  let url_poke_2 = "http://localhost:8010/game_indices";
  let url_poke_3 = "http://localhost:8010/held_items";
  let url_poke_4 = "http://localhost:8010/moves";
  let url_poke_5 = "http://localhost:8010/past_types";
  let url_poke_6 = "http://localhost:8010/species";
  let url_poke_7 = "http://localhost:8010/sprites";
  let url_poke_8 = "http://localhost:8010/stats";
  let url_poke_9 = "http://localhost:8010/types";

  callBackHell(url_poke_4);

  return <div>callBack</div>;
};

export default DemoCbh;
