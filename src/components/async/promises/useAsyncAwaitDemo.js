const useAsyncAwaitDemo = (poke_url4) => {
  let pokemonInfo;
  let moveInfo;
  let machineInfo;
  let itemInfo;

  const showResults = () => {
    return new Promise((resolve, recject) => {
      setTimeout(() => {
        console.log("Pokemon", pokemonInfo);
        console.log("Move", moveInfo);
        console.log("Machine", machineInfo);
        console.log("Item", itemInfo);
        resolve("Finished!!");
      }, 1000);
    });
  };

  const initialize = async () => {
    try {
      pokemonInfo = await fetch(poke_url4).then((res) => res.json());
      moveInfo = await fetch(pokemonInfo[0].move.url).then((res) => res.json());
      machineInfo = await fetch(moveInfo.machines[0].machine.url).then((res) =>
        res.json()
      );
      itemInfo = await fetch(machineInfo.item.url).then((res) => res.json());

      console.log("Fetching Data... ");
      const msg = await showResults();
      console.log(msg);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  initialize();
};

export default useAsyncAwaitDemo;
