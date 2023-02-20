import { useEffect } from 'react';
import Spinner from './Spinner'
import Timer from './Timer'
import './App.css';

function App() {
  function ren()
  const arr = ["spinner0", "spinner1", "spinner2"];
  let random = Math.floor(Math.random() * 3);

  const [timer, setTimer] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => !prev);
    }, 3000);
  }, []);
  return <div className="App">{timer && <Spinner cls={arr[random]} />}</div>;

}

export default App;


