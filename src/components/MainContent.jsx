import React from "react";
import TravelCard from "./TravelCard";
import TravelData from "../data";

function MainContent() {
  const data = TravelData.map((item) => {
    return <TravelCard key={item.id} {...item} />;
  });

  return (
    <main>
      <div>{data}</div>
    </main>
  );
}

export default MainContent;
