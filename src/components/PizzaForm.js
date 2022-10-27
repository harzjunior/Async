import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const PizzaForm = () => {
  //states for our properties
  const [title, setTitle] = useState("");
  const [toping, setToping] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);

  //for react-bootstrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //functions: async, because we are reaching out to the API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const pizza = { title, toping, price, category };

    //fetch request to post pizza data
    const response = await fetch(`pizza/`, {
      method: "POST",
      body: JSON.stringify(pizza),
      headers: { "Content-Type": "application/json" },
    }); //stringify converts (pizza) body to JSON string: and header property content type is json

    const json = await response.json();

    //check if response is not ok then update the state
    if (!response.ok) {
      setError(json.error); //the error property
    }

    if (response.ok) {
      // reset all states when formsubmited
      setTitle("");
      setToping("");
      setPrice("");
      setCategory("");
      setError(null);
      console.log("New Pizza Successfully Added", json);
    }
  };

  return (
    <div>
      <button
        onClick={handleShow}
        className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        + Add Pizza
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* Header */}
        <Modal.Header closeButton>
          <Modal.Title className="pl-20">Add Pizza</Modal.Title>
        </Modal.Header>

        {/* Body */}
        <Modal.Body>
          <form
            id="editModal"
            className="w-full max-w-sm"
            onSubmit={handleSubmit}
          >
            {/* title */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  // for="name"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  placeholder="Pepperoni"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* toping */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  // for="name"
                  htmlFor="toping"
                >
                  Toping
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="toping"
                  placeholder="Tomato Sauce Bufallo Mozzarella"
                  type="text"
                  value={toping}
                  onChange={(e) => {
                    setToping(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* price */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  // for="name"
                  htmlFor="price"
                >
                  Price
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="price"
                  placeholder="11.99"
                  type="text"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            {error && <div className="error">{error}</div>}

            {/* category */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  // for="name"
                  htmlFor="category"
                >
                  Category
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="category"
                  placeholder="Vegetarian"
                  type="text"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded ml-28 "
          >
            Close
          </button>
          {/* easiest way to submit a form with a button */}
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded "
            form="editModal"
            onClick={handleClose}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PizzaForm;
