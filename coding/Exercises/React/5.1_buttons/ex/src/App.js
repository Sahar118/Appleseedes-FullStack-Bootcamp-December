
import './App.css';
import Button from './Button';

function App() {
  const buttonsText = [
    {
      title: 'Important',

    },
    {
      title: 'Not Important',
    }
  ]
  return (
    <div className="App">
      <Button title={buttonsText[0].title}></Button>
      <Button title={buttonsText[1].title}></Button>


    </div >
  );
}

export default App;
