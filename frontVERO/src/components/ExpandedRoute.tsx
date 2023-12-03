import * as React from "react";
import { FaBus, FaCarSide, FaTrain, FaTrainTram, FaPersonWalking } from "react-icons/fa6";
import { route } from "../const";

const iconMap = {
  "CAR": FaCarSide,
  "TRAIN": FaTrain,
  "TRAMWAY": FaTrainTram,
  "BUS": FaBus,
  "FOOT": FaPersonWalking
}

const color = {
  "CAR": "red",
  "TRAIN": "lime",
  "TRAMWAY": "amber",
  "BUS": "orange",
  "FOOT": "slate"
}

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
    let Icon = iconMap[leg.mode]
    if (Icon == null) {
      Icon = React.Fragment
    }
    // <div className="flex flex-row">
    //   <div className="flex items-center space-x-4 rtl:space-x-reverse p-5">
    //     <span>{!!leg.duration ? Math.ceil(leg.duration / 60) : 0} min</span>
    //     <span>{!!leg.distance ? Math.ceil(leg.distance / 1000) : 0} km</span>
    //   </div>
    // </div>

    const firstPoint = points[0]
    const lastPoint = points[points.length - 1]
    console.log(firstPoint)
    return (
      <div className="flex justify-center">
        <div className="hiden bg-red-200 bg-lime-200 bg-amber-200 bg-orange-200 bg-slate-200" /> {/* to generate the needed css classes */}
        <ul
          className="divide-y divide-gray-200 dark:divide-gray-700 bg-white py-2"
          style={{ zIndex: 100, width: "90vw" }} >
          <li className="border-2 cursor-pointer rounded flex flex-row">
            <div className="flex flex-col items-center w-8 m-2 h-48">
              <div className="p-2 bg-slate-100 rounded-full">
                <Icon className="w-4 h-4 text-black" />
              </div>
              <div className={`relative flex w-4 bg-${color[leg.mode]}-200 rounded-full mx-4 my-2`} style={{ top: -30, zIndex: -1, height: '110%' }} />
            </div>
            <div className="flex flex-1 flex-col flex-1 py-3 px-2">
              <div className="flex flex-row justify-between">
                <a>{firstPoint.place.name}</a>
                <a>{firstPoint.departure?.time.replaceAll("T", " ").slice(0, 16)}</a>
              </div>
              <div className="flex flex-1" />
              {leg.mode != "CAR" && leg.mode != "FOOT" && <a>Ride for {points.length} stops</a>}
              <div className="flex flex-1" />
              <a>{lastPoint.place.name}</a>
            </div>
          </li>
        </ul>
      </div>
    );
  });

  return <div className="flex flex-col bg-white">{changes}</div>;
};

export default ExpandedRoute;
