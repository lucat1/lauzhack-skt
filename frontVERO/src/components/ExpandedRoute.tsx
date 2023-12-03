import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { route } from "../const";

const ExpandedRoute = () => {
  const legs = route.legs;
  const changes = legs.map((leg) => {
    let points;
    if (leg.mode == "FOOT") {
      points = [leg.start, leg.end];
    } else {
      //ts-ignore
      points = [leg.points[0], leg.points[leg.points.length - 1]];
    }
    console.log(points);

    return (
      <div className="flex justify-center">
        <ul
          className="divide-y divide-gray-200 dark:divide-gray-700 bg-white"
          style={{ zIndex: 100, width: "90vw" }}
        >
          <li className="pb-3 sm:pb-4 border-2 cursor-pointer rounded">
          <span className="flex flex-row items-center p-1">
            {<FaArrowRight className="mr-2" />} {leg.mode}
          </span>   
            <div className="flex flex-row">
              
              <div className="flex items-center space-x-4 rtl:space-x-reverse p-5">
                   <span>{!!leg.duration ? Math.ceil(leg.duration / 60) : 0} min</span>
                   <span>{!!leg.distance ? Math.ceil(leg.distance / 1000) : 0} km</span>
              </div>
            </div>

            <div className="flex pl-3 flex-row flex-1">
              {points.map((point) => {
                return <div className="break-words">{point.place.name}</div>;
              })}
            </div>
          </li>
        </ul>
      </div>
    );
  });

  return <div className="flex flex-col bg-white">{changes}</div>;
};

export default ExpandedRoute;
