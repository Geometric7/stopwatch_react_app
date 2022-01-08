import Timer from './components/Timer/Timer';
import Container from './components/Container/Container';
import { useState } from 'react';

function App() {

  const [currentTime, setCurrentTime] = useState(0)
  const[timer, setTimer] = useState(null)

  return (
    <Container>
    <div>
      <Timer currentTime={currentTime} setCurrentTime={setCurrentTime} timer={timer} setTimer={setTimer} />
    </div>
    </Container>
  );
};

export default App;
