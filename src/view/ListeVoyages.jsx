import React, {Fragment, useState} from "react";
import {Voyage} from "./Voyage";

//new Date().toISOString().split('T')[0]

export const ListeVoyages = (props) => {
  const [sorted, setSorted] = useState(props.destination);

  const compare = (a, b) => {
    return a.date - b.date;
  };

  const sortDestinations = () => {
    setSorted(props.destination.sort(compare));
  };

  const submitInfos = (id, info) => {
    sortDestinations();
    console.log(sorted);
    props.update(id, info);
  };

  return (
    <section className="voyage-container">
      {props.destination &&
        props.destination.map((dest, index) => {
          return (
            <Voyage
              key={index}
              destinationObj={dest}
              clock={props.startClock}
              submit={submitInfos}
            />
          );
        })}
    </section>
  );
};
