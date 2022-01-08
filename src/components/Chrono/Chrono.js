import React from 'react';

const Chrono = ({time}) => {

  //const hour = ("0" + Math.floor((time / 1) % 1)).slice(-2);
  const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const miSec = ("0" + Math.floor((time / 10) % 60)).slice(-2);
  const thoSec = ("0" + ((time / 1) % 10000)).slice(-3);

  return <h1>{min}:{sec}:{miSec}.{thoSec}</h1>
}

export default Chrono;
