import React, {useEffect, useState} from "react";

export const Voyage = (props) => {
  const [clock, setClock] = useState();
  const [info, setInfo] = useState({date: "", nombre: ""});

  const createClock = () => {
    let time = props.clock(props.destinationObj.timeZone);
    setClock(time);
  };

  useEffect(() => {
    //setInterval(createClock, 1000);
    createClock();
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    const input = e.target;

    setInfo((prev) => {
      return {
        ...prev,
        [input.name]: input.value,
      };
    });
  };

  const submitInfos = (e) => {
    e.preventDefault();
    props.submit(props.destinationObj.id, info);
  };

  return (
    <section className="voyage-unit">
      <div>
        <p>{props.destinationObj.ville}</p>
        <p>Heure Locale : {clock}</p>
        <p>Date de départ : {props.destinationObj.date}</p>
        <p>Nomber de Voyageurs : {props.destinationObj.nombre}</p>
      </div>

      <form
        className="form"
        onSubmit={submitInfos}>
        <div>
          <label htmlFor="dateID">date d'arrivé : </label>
          <input
            id="dateID"
            type="date"
            name="date"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="dateID">Voyageurs: </label>
          <input
            id="nombreID"
            type="number"
            name="nombre"
            onChange={handleOnChange}
          />
        </div>
        <button>Valider</button>
      </form>
    </section>
  );
};
