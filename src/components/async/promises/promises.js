const promisesDemo = (poke_url4) => {
  let pokemonInfo = null;
  let moveInfo = null;
  let machineInfo = null;
  let itemInfo = null;

  //Results
  const showResults = () => {
    console.log("Pokemon", pokemonInfo);
    console.log("Move", moveInfo);
    console.log("Machine", machineInfo);
    console.log("Item", itemInfo);
  };

  //==================================================================

  const getItemInfo = (response) => {
    itemInfo = response;
    showResults();
  };

  //==================================================================

  const getMachineInfo = (response) => {
    machineInfo = response;
    fetch(machineInfo.item.url)
      .then((res) => res.json())
      .then(getItemInfo)
      .catch((error) => console.log(error));
  };

  //==================================================================

  const getMoveInfo = (response) => {
    moveInfo = response;
    fetch(moveInfo.machines[0].machine.url)
      .then((res) => res.json())
      .then(getMachineInfo)
      .catch((error) => console.log(error));
  };

  //==================================================================

  const getPokemonInfo = (response) => {
    pokemonInfo = response;

    fetch(pokemonInfo[0].move.url)
      .then((res) => res.json())
      .then(getMoveInfo)
      .catch((error) => console.log(error));
  };

  //==================================================================

  fetch(poke_url4)
    .then((res) => res.json())
    .then(getPokemonInfo)
    .catch((error) => console.log(error));
};

export default promisesDemo;
