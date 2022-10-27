const callBackHell = (poke_url4) => {
  let pokemonInfo = null;
  let moveInfo = null;
  let machineInfo = null;
  let itemInfo = null;

  //create an object
  let pokemonXHR = new XMLHttpRequest(); //url_1

  //send a request
  pokemonXHR.responseType = "json";
  pokemonXHR.open("GET", poke_url4);
  pokemonXHR.send();

  //callBack function
  pokemonXHR.onload = function () {
    pokemonInfo = this.response;

    //==================================================================

    const moveXHR = new XMLHttpRequest(); //url_2
    moveXHR.responseType = "json";
    moveXHR.open("GET", pokemonInfo[0].move.url);
    moveXHR.send();

    moveXHR.onload = function () {
      moveInfo = this.response;

      //==================================================================

      const machineXHR = new XMLHttpRequest(); //url_2
      machineXHR.responseType = "json";
      machineXHR.open("GET", moveInfo.machines[0].machine.url);
      machineXHR.send();

      machineXHR.onload = function () {
        machineInfo = this.response;

        //==================================================================

        const itemXHR = new XMLHttpRequest(); //url_2
        itemXHR.responseType = "json";
        itemXHR.open("GET", machineInfo.item.url);
        itemXHR.send();

        itemXHR.onload = function () {
          itemInfo = this.response;

          //==================================================================

          console.log("Pokemon", pokemonInfo);
          console.log("Move", moveInfo);
          console.log("Machine", machineInfo);
          console.log("Item", itemInfo);
        };
      };
    };
  };
};

export default callBackHell;
