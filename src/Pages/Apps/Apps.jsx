import React from "react";
import App from "./App";

const Apps = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {data.map((singleApp) => (
        <App key={singleApp.id} singleApp={singleApp}></App>
      ))}
    </div>
  );
};

export default Apps;
