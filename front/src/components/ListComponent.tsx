import React from "react";
import { FaBus, FaCarSide, FaTrain, FaTrainTram, FaPersonWalking } from "react-icons/fa6";

interface Iprops {
  setShowRouteClicked: React.Dispatch<React.SetStateAction<boolean>>
  data: any[]
}

const iconMap = {
  "CAR": FaCarSide,
  "TRAIN": FaTrain,
  "TRAMWAY": FaTrainTram,
  "BUS": FaBus,
  "FOOT": FaPersonWalking
}

const ListComponent = ({ setShowRouteClicked, data }: Iprops) => {
  const legs = data.legs
  const steps = legs.map((leg) => {
    let s = leg.start?.time || leg.points[0].departure.time
    let e = leg.end?.time || leg.points[leg.points.length - 1].arrival.time
    const start = new Date(s)
    const end = new Date(e)
    const msDiff = end - start
    const minuteDiff = Math.ceil(msDiff / (1000 * 60))
    let diff = `${minuteDiff}`
    if (minuteDiff >= 60) {
      diff = `${Math.round(minuteDiff / 6) / 10}h`
    }

    let icon = iconMap[leg.mode]
    if (icon == null) {
      icon = React.Fragment
    }
    return {
      minute: diff,
      icon: icon,
    }
  })

  console.log(legs)
  const firstPlace = legs[0].start?.place || legs[0].points[0].place
  const firstTime = legs[0].start?.time || legs[0].points[0].departure.time
  const lastPlace = legs[legs.length - 1].end?.place || legs[legs.length - 1].points[legs[legs.length - 1].points.length - 1].place
  const lastTime = legs[legs.length - 1].end?.time || legs[legs.length - 1].points[legs[legs.length - 1].points.length - 1].arrival.time
  return (
    <div className="flex justify-center" onClick={() => setShowRouteClicked(true)}>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-white" style={{ zIndex: 100, width: '90vw' }}>
        <li className="pb-3 sm:pb-4 border-2 cursor-pointer rounded" >
          <div className="flex flex-row">
            <div className="flex items-center space-x-4 rtl:space-x-reverse p-5">
              <a className="px-2">{firstPlace.name}</a>
              {steps.map((path, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="flex items-center">
                      <path.icon />
                      <sup>{path.minute} </sup>{" "}
                    </div>
                    {index < steps.length - 1 && ">"} {/* Aggiungi ">" solo tra i percorsi visibili */}
                  </React.Fragment>
                );
              })}
              <a className="px-2">{lastPlace.name}</a>
            </div>
          </div>

          <div className="flex pl-3 flex-row flex-1">{firstTime.replaceAll("T", " ").slice(0, 16)} - {lastTime.replaceAll("T", " ").slice(0, 16)}</div>
        </li>
      </ul>
    </div>
  );
};

export default ListComponent;
