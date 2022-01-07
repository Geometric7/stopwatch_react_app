import { useEffect } from 'react';
import Button from '../Button/Button';
import Chrono from '../Chrono/Chrono'

const Timer = ({ currentTime, setCurrentTime, timer, setTimer }) => {

    const start =() => {
      setTimer(setInterval(() => {
        setCurrentTime(currentTime => currentTime + 10);
      }, 10));
      clearInterval(timer);
    }
    /*
  }
  const msToTime = duration => {

    // Pad 2|3 digits, def->2
    const pad = (n, z) => {
      z= z || 2;
      return ('00' + n).slice(-z);
    }

    const ms = duration % 1000;
    duration = (duration - ms) / 1000;
    const secs = duration % 60;
    duration = (duration - secs) / 60;
    const mins = duration % 60;

    return pad(mins) + ':' + pad(secs) + '.' + pad(ms,3);
  }

const start = () => {
  setTimer(setInterval(() => {
    setCurrentTime(currentTime => currentTime + 1);
  }, 1 ));
  clearInterval(timer);
}*/

const stop =() => {
  clearInterval(timer);
}

const reset = () => {
  setCurrentTime(0)
}

useEffect(() => {
  return () => {
    if(timer) clearInterval(timer);
  };
}, []);

return (
  <div>
    <Chrono time={currentTime} />
    <Button onClick={start}>Start</Button>
    <Button onClick={stop}>Stop</Button>
    <Button onClick={reset}>Reset</Button>
  </div>
)
}

export default Timer;
