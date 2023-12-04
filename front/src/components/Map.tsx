import React from "react";
import { API_KEY_MAPS } from "../const";
import "../../node_modules/@sbb-esta/journey-maps/web-component/bundle.min.js";
import "../../node_modules/@sbb-esta/journey-maps/web-component/styles.css";

const Map = () => {
  const Ele = "sbb-journey-maps-wc";
  const params = {
    "api-key": API_KEY_MAPS,
    lang: "en",
  };
  return (
    <div style={{
      height: "100vh",
      position: "relative",
      top: 0,
    }}>
      <Ele {...params} />
    </div>
  );
};

export default Map;
