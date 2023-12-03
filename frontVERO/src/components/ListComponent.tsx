import React from "react";
import { FaBus, FaCarSide, FaPersonWalking } from "react-icons/fa6";

interface Iprops {
  setShowRouteClicked:  React.Dispatch<React.SetStateAction<boolean>>
}

const ListComponent = ({setShowRouteClicked}: Iprops) => {
  const paths = [
    {
      minute: 5,
      icon: FaPersonWalking,
    },
    {
      minute: 12,
      icon: FaBus,
    },
    {
      minute: 12,
      icon: FaCarSide,
    },
    {
      minute: 12,
      icon: FaBus,
    },
  ];
  const maxVisiblePaths = 3; // Numero massimo di percorsi da visualizzare

  return (
    <div className="flex justify-center" onClick={() => setShowRouteClicked(true)}>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-white" style={{ zIndex: 100, width: '90vw' }}>
        <li className="pb-3 sm:pb-4 border-2 cursor-pointer rounded" >
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
          </div>

          <div className="flex pl-3 flex-row flex-1">8:44 - 15:54</div>
        </li>
      </ul>
    </div>
  );
};

export default ListComponent;
