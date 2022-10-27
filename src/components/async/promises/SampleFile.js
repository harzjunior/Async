const SampleFile = () => {
  let pizzaFirstMenu = "http://localhost:8008/firstMenu";
  let pizzaSecondMenu = "http://localhost:8008/secondMenu";

  function setUp_1() {
    let promise = fetch(pizzaFirstMenu);
    console.log(promise);
  }

  //   setUp_1();

  //===============Regurlar Function========================Unformated result==========================================

  const setUp_2 = () => {
    let promise = fetch(pizzaFirstMenu);
    promise.then(gotData);
    promise.catch(gotError);

    function gotData(data) {
      console.log(data);
    }

    function gotError(data) {
      console.log(data);
    }
  };

  //   setUp_2();

  //==============Regurlar Function===============same_with_line_15===============catchError=======================

  const setUp_3 = () => {
    let promise = fetch(pizzaFirstMenu);
    promise.then((data) => console.log(data));
    promise.catch((error) => console.log(error));
  };

  //   setUp_3();

  //================================Instead of the above example=======================================
  //we can use chaining

  const setUp_4 = () => {
    fetch(pizzaFirstMenu)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  // setUp_4();

  //==================================================================================================
  const setUp_5 = () => {
    fetch(pizzaFirstMenu) //fetch pizza from API
      .then((response) => response.json()) // convert to json
      .then((data) => console.log(data)) // console log data when successful
      .catch((error) => console.log(error)); // console log when there is error
  };

  // setUp_5();

  //====================================Making own Promise============================================
  /*
  const setTimeoutWithNoPromise = (time) => {
    setTimeout(SayHi, time);
  };

  const SayHi = () => {
    console.log("hi");
  };

  //Cannot read properties 'then' of undefined, because there is no promise to return
  setTimeoutWithNoPromise(1000)
    .then(() => console.log("hello,hi"))
    .catch((err) => console.log("error", err));
*/

  //=================================Fixing the above ERROR=========================================

  const setTimeoutPromise = (time) => {
    //we need to return a promise here

    // const handlePromise = (resolve, reject) => {}; or bellow anonymous arrow function.
    return new Promise((resolve, reject) => {
      //reject a promise when NaN
      if (isNaN(time)) {
        return reject(new Error("Only valid digits are allowed"));
      }
      setTimeout(resolve, time); //our callback here is resolve and reject, that will be used in (then) promise
    }); //Promise resolver undefined is not a function. We need to provide resolve and reject for our promise. Our promise needs to know what happens when its resolved/rejected
  };

  //we don't need this anymore since we have our then promise to handle this part
  const SayHello = () => {
    console.log("Hello Harz");
  };

  //call our promise function
  setTimeoutPromise(1000)
    .then(() => console.log("hello then"))
    .catch((err) => console.log("error", err));

  //===============================Promise with ES8 Async/Await=======================================
  //from the above example

  //using async instead of promise constructor
  const setTimeoutPromiseEs8 = async (time) => {
    //when the function returns a promise then await for the promise to complete

    await setTimeoutPromiseAwait(time); // await is alternative to dot then()

    return;
  };

  //A promise function
  const setTimeoutPromiseAwait = (time) => {
    return new Promise((resolve, reject) => {
      if (isNaN(time) || time === "") {
        return reject(new Error("Only valid digits are allowed"));
      }
      setTimeout(resolve, time);
    });
  };

  //call our promise function
  setTimeoutPromiseEs8(1000)
    .then(() => console.log("hello ES8"))
    .catch((err) => console.log("error", err));

  //==========================converting setUp_5 function to Async/Await==================================

  /*
  const setUp_5 = () => {
    fetch(pizzaFirstMenu) //fetch pizza from API
      .then((response) => response.json()) // convert to json
      .then((data) => console.log(data)) // console log data when successful
      .catch((error) => console.log(error)); // console log when there is error
  };

  */

  // setUp_5();

  const asyncAwait = async () => {
    const response_1 = await fetch(pizzaFirstMenu);
    const data_1 = await response_1.json();
    const response_2 = await fetch(pizzaSecondMenu);
    const data_2 = await response_2.json();

    console.log(data_1);
    console.log(data_2);
  };

  // asyncAwait();

  //===============================================Promise_all=================================================
  let pizzaDynamic = "http://localhost:8008/";

  const asyncAwait_2 = async (menu, ex) => {
    const response = await fetch(pizzaDynamic + menu);
    const data_x = await response.json();

    //return the data
    console.log(ex);
    return {
      data: data_x,
    };
  };

  //requires an array of promises
  //Promise_all ==> from our created array of promises, when all promises are complete and resolved,
  // give us all the results of all the promises in an array of the same order as the original promises

  //Downside is, when one array of promise fails then the rest of the promises won't resolved
  const promises = [
    asyncAwait_2("firstMenu", 2),
    asyncAwait_2("thirdMenu", 3),
    asyncAwait_2("secondMenu", 1),
  ];

  Promise.all(promises)
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
      }
    })
    .catch((error) => error + "error fetching data");

  //====================================Try & Catch====================================================

  const asyncAwait_3 = async (menu, ex) => {
    const response = await fetch(pizzaDynamic + menu);
    let data_x = null;
    try {
      data_x = await response.json();
    } catch (error) {
      console.log(error + "error fetching data");
      console.log(error);
    }

    //return the data
    console.log(ex);
    return {
      data: data_x,
    };
  };

  const promises_1 = [
    asyncAwait_3("firstMenu", 2),
    asyncAwait_3("thirdMenu", 3),
    asyncAwait_3("secondMenu", 1),
  ];

  Promise.all(promises_1)
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i] !== null) {
          console.log(res[i]);
        }
      }
    })
    .catch((error) => error + "error fetching data");

  return (
    <div>
      <h2>SampleFile</h2>
    </div>
  );
};

export default SampleFile;
