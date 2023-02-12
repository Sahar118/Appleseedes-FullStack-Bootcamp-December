import logo from './logo.svg';
import './App.css';

function App() {
// q1
  const data = ["hello", "world"];
  const myData = data.join(' ');

  // q2
  const capitalizeWords = (data) => {
    return data
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  };

  // q3
  const number1 = 5;
  const number2 =6;
const string = "I love React!"
const stringLength = string.length;


  return (
<>
  <h2>Q1</h2>
    <p> {capitalizeWords(myData)} </p>
  <h2>Q2</h2>
  <p> {number1} + {number2} = {number1+number2}</p>

  <h2>Q3</h2>
  <p>The string’s length is: {stringLength}</p>
</>
  );
}

export default App;


