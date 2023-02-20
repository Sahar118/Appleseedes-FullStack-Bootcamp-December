
import './App.css';

function App() {
  // q1
  const data = ["hello", "world"];
  const [hello, world] = data


  // q3
  const number1 = 5;
  const number2 = 6;

  const string = "I love React!"


  return (
    <>
      <h2>Q1</h2>
      <p> {hello} {world} </p>
      <h2>Q2</h2>
      <p>{number1} + {number2} = {number1 + number2}</p>

      <h2>Q3</h2>
      <p>The string’s length is: {string.length}</p>
    </>
  );
}

export default App;


