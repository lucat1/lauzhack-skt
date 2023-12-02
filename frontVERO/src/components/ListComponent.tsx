import React from 'react'
import { PiFilmStripThin } from "react-icons/pi";
import { FaPersonWalking } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { FaBus } from "react-icons/fa";

const ListComponent = () => {

   type DistanceMap = { [key: string]: number };

   const icons = [FaCarSide, FaBus, FaPersonWalking]
   const distances: DistanceMap = {
     red: 50,
     blue: 50,
     green: 50
   };
   
   function convertToProportional(values: DistanceMap) {
     const valuesArray = Object.values(values);
     const sum = valuesArray.reduce((acc, val) => acc + val, 0);
     
     const proportionalValues = valuesArray.map(val => (val / sum) * 100);
     
     return proportionalValues;
   }

   const colorKeys = Object.keys(distances);
   let totalPercentage = 100;
   const proportionalDistances = convertToProportional(distances);
  return (
    
<ul  className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
   <li  className="pb-3 sm:pb-4 border-2">
      <div  className="flex items-center space-x-4 rtl:space-x-reverse p-5">
         <div  className='flex items-center'>
         <PiFilmStripThin />
         </div>
         <div  className="flex-1 min-w-0 flex items-center ">
            <p  className="text-sm  truncate ">
               From <b>Losanna </b>
               To   <b> Zurigo</b>
            </p>
         </div>
      </div>
      <div className='flex flex-row flex-1'>
      {proportionalDistances.map((item, i) => {
        const colorIndex = i % colorKeys.length;
        const color = colorKeys[colorIndex];
        const width = totalPercentage + item;
        const barStyle = {
          width: `${width}%`,
          backgroundColor: color
        };
        totalPercentage += item;

        return (
          <div
            key={i}
            style={barStyle}
            className={`h-3 rounded w-full flex items-center justify-center bg-${color}-${i}00`}
          >  </div>
        );
      })}
      </div>
   </li>
</ul>

  )
}

export default ListComponent