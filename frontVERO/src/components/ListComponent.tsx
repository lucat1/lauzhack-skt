import React from "react";
import { PiFilmStripThin } from "react-icons/pi";
import { FaPersonWalking } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import ExpandedRoute from "./ExpandedRoute";

const ListComponent = ({ legs }) => {
  type DistanceMap = { [key: string]: number };

  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li className="pb-3 sm:pb-4 border-2">
        <div className="flex flex-row">
          <div className="flex items-center space-x-4 rtl:space-x-reverse p-5">
            {paths.slice(0, maxVisiblePaths).map((path, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="flex items-center">
                    <path.icon />
                    <sup>{path.minute} </sup>{" "}
                  </div>
                  {index < maxVisiblePaths - 1 && ">"} {/* Aggiungi ">" solo tra i percorsi visibili */}
                </React.Fragment>
              );
            })}
            {paths.length > maxVisiblePaths && <span>&nbsp;...</span>}
          </div>
          <div className="flex flex-1 items-center justify-end mr-2">7hr 10 min</div>
        </div>

            return (
              <div
                key={i}
                style={barStyle}
                className={`h-3 rounded w-full flex items-center justify-center bg-${color}-${i}00`}
              ></div>
            );
          })}
        </div>
      </li>
      <ExpandedRoute />
    </ul>
  );
};

export default ListComponent;
