import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import reactSpring from 'react-spring';

function App() {

  const props = useSpring({ to: {opacity: 1}, from: { opacity: 0 } })

  const [flip, set] = useState(false)

  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })

  return (
    <div>
      <animated.h1 style={props1}>hello</animated.h1>

      <animated.div style={props}>I will fade in!</animated.div>
    </div>

  );
}

export default App;
