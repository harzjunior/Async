import React, { useEffect, useState } from "react";
import PizzaDetails from "../components/PizzaDetails";
import PizzaForm from "../components/PizzaForm";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  //fetch data from our API
  useEffect(() => {
    const fetchPizza = async () => {
      const response = await fetch(`pizza/`);
      const json = await response.json();

      console.log(json);
      if (response.ok) {
        setPizza(json);
      }
    };
    fetchPizza();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-wrap text-white justify-center">
        {pizza &&
          pizza.map((piz) => <PizzaDetails key={piz._id} pizza={piz} />)}
      </div>
      <PizzaForm />
    </div>
  );
};

export default Pizza;
