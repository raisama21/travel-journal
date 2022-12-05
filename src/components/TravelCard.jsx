import React from "react";
import { ImLocation } from "react-icons/im";

function TravelCard(props) {
  return (
    <div className="max-w-[35rem] mx-auto pb-7 flex items-center justify-between">
      <div className="max-w-[7.875rem] h-[10.5rem] w-[50%]">
        <img
          src={props.imageUrl}
          alt="mount fuji cover image"
          className="h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-[73%]">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex item-center gap-1">
            <ImLocation className="text-pc2" />
            <h3>{props.location}</h3>
          </span>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="mb-4">{props.title}</h2>
        <h4 className="mb-2">
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TravelCard;
