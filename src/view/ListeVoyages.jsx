import React, {Fragment, useEffect, useState} from "react";
import {Voyage} from "./Voyage";

//new Date().toISOString().split('T')[0]

export const ListeVoyages = (props) => {
  // const [sorted, setSorted] = useState(props.destination);

  // useEffect(() => {
  //   sortDestinations();
  // });

  // const compare = (a, b) => {
  //   const dateA = a.date;
  //   const dateB = b.date;

  //   let compare = 0;
  //   if (dateA === "" && dateB !== "") {
  //     compare = 1;
  //   } else if (dateA !== "" && dateB === "") {
  //     compare = -1;
  //   } else if (dateA < dateB) {
  //     compare = -1;
  //   } else if (dateA > dateB) {
  //     compare = 1;
  //   }
  //   return compare;
  // };

  // const sortDestinations = () => {
  //   setSorted(props.destination.sort(compare));
  // };

  const submitInfos = (id, info) => {
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
