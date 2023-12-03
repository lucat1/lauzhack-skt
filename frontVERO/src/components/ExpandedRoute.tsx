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
      <div>
        <div className="flex flex-row justify-around m-4">
          <span className="flex flex-row">
            {<FaArrowRight className="mr-2" />} {leg.mode}
          </span>
          <span>{!!leg.duration ? Math.ceil(leg.duration / 60) : 0} min</span>
          <span>{!!leg.distance ? Math.ceil(leg.distance / 1000) : 0} km</span>
        </div>
        <div>
          {points.map((point) => {
            return <div>{point.place.name}</div>;
          })}
        </div>
      </div>
    );
  });

  return <div className="flex flex-col bg-white">{changes}</div>;
};

export default ExpandedRoute;
