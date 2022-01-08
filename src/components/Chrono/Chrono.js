import React from 'react';

const Chrono = ({time}) => {

  //const hour = ("0" + Math.floor((time / 1) % 1)).slice(-2);

  const day = ("0" + Math.floor((time / (3600000 * 24 * 365)) % 365 )).slice(-2);
  const hour = ("0" + Math.floor((time / 3600000) % 24 )).slice(-2);
  const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const ms = ("0" + (time % 1000)).slice(-3);

  return <h1>{day}/{hour}:{min}:{sec}.{ms}</h1>
}

export default Chrono;
