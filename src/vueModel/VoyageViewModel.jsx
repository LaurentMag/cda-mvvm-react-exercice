import React, {useState} from "react";

// Londres, Pekin, Mexico, Oulan, Bodie, Dublin, Tokyo

export const VoyageViewModel = () => {
  const [destination, setDestination] = useState([
    {id: 0, ville: "Paris", timeZone: "1", date: "", nombre: 0},
    {id: 1, ville: "Londres", timeZone: "-1", date: "", nombre: 0},
    {id: 2, ville: "Mexico", timeZone: "-6", date: "", nombre: 0},
    {id: 3, ville: "Bodie", timeZone: "-8", date: "", nombre: 0},
    {id: 4, ville: "Dublin", timeZone: "-1", date: "", nombre: 0},
    {id: 5, ville: "Tokyo", timeZone: "9", date: "", nombre: 0},
    {id: 6, ville: "Athenes", timeZone: "2", date: "", nombre: 0},
    {id: 7, ville: "Vientiane", timeZone: "7", date: "", nombre: 0},
  ]);

  const [clockID, setClockID] = useState();

  const setTime = (timeZone) => {
    let time;

    let value;
    if (timeZone !== "") {
      value = timeZone;
    } else {
      return;
    }
    let change_time = new Date();

    if (timeZone < 0) {
      change_time.setHours(change_time.getHours() - Math.abs(value));
    } else {
      change_time.setHours(change_time.getHours() + value);
    }

    let hours = change_time.getHours();
    let minutes = change_time.getMinutes();
    let seconds = change_time.getSeconds();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    time = hours + ":" + minutes + ":" + seconds;

    return time;
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
