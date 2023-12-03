import React from "react";
export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-2 bg-red-600 text-white">
      <div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 10.55A5.55 5.55 0 0 1 10.55 5h26.9A5.55 5.55 0 0 1 43 10.55v26.9A5.55 5.55 0 0 1 37.45 43h-26.9A5.55 5.55 0 0 1 5 37.45v-26.9ZM10.55 4A6.55 6.55 0 0 0 4 10.55v26.9A6.55 6.55 0 0 0 10.55 44h26.9A6.55 6.55 0 0 0 44 37.45v-26.9A6.55 6.55 0 0 0 37.45 4h-26.9Zm21.29 18.02L26.74 17h3.79L37 23.5 30.53 30h-3.79l5.1-4.99H25.5V30h-3v-4.99h-6.3L21.3 30h-3.79L11 23.5l6.51-6.5h3.79l-5.1 5.02h6.3V17h3v5.02h6.34Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
}
