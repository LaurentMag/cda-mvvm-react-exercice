import React, {useState} from "react";

// Londres, Pekin, Mexico, Oulan, Bodie, Dublin, Tokyo

export const VoyageViewModel = () => {
  const [destination, setDestination] = useState([
    {id: 0, ville: "Paris", timeZone: 0, date: "", nombre: 0},
    {id: 1, ville: "Londres", timeZone: -1, date: "", nombre: 0},
    {id: 2, ville: "Mexico", timeZone: -6, date: "", nombre: 0},
    {id: 3, ville: "Bodie", timeZone: -8, date: "", nombre: 0},
    {id: 4, ville: "Dublin", timeZone: -1, date: "", nombre: 0},
    {id: 5, ville: "Tokyo", timeZone: 9, date: "", nombre: 0},
    {id: 6, ville: "Athenes", timeZone: 2, date: "", nombre: 0},
    {id: 7, ville: "Vientiane", timeZone: 7, date: "", nombre: 0},
    {id: 8, ville: "Pyongyang", timeZone: 9, date: "", nombre: 0},
  ]);

  const [clockID, setClockID] = useState();

  const setTime = (timeZone) => {
    if (typeof timeZone !== "number") {
      return;
    }

    let newTime = new Date();
    newTime.setHours(newTime.getHours() + timeZone);
    let hours = newTime.getHours();
    let minutes = newTime.getMinutes();
    let seconds = newTime.getSeconds();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };

  const updateDestination = (id, info) => {
    setDestination((prev) => {
      return prev.map((dest) => {
        if (dest.id === id) {
          return {
            ...dest,
            ...info,
          };
        } else {
          return dest;
        }
      });
    });
  };

  return {destination, setTime, updateDestination};
};
