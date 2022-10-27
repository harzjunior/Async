import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Img from "../img/logo1.jpg";
import { v4 as uuidv4 } from "uuid";

const FitnessDetails = ({ pizza }) => {
  const { title, toping, category, price } = pizza;
  return (
    <div className=" m-2 py-8 px-8 max-w-[350px] bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-3 justify-between">
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5 text-lg">
          {/* title & price */}
          <div className="flex items-center justify-between">
            <p className="text-xl text-black font-semibold">{title}</p>
            <p className="text-slate-800 ">${price}</p>
          </div>
          <div className="flex justify-between">
            {/* topping & category */}
            <div className="">
              {/* toping */}
              <p className="text-slate-800 flex flex-wrap space-x-2  ">
                {toping
                  ? toping.map((tp) => (
                      <em key={uuidv4()} className="text-orange-800 text-sm">
                        {tp}
                      </em>
                    ))
                  : "loadind..."}
              </p>
              {/* category */}
              <p className="flex items-center justify-start text-green-700 text-sm">
                {category}
              </p>
            </div>
            {/* image */}
            <div className="">
              <img
                className="block mx-auto h-14 rounded-full sm:mx-0 sm:shrink-0"
                src={Img}
                alt="Woman's Face"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessDetails;
