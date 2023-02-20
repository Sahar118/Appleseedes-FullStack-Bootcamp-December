

import Forms from './component/Form'
import './App.css';
const App = () => {

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  }


  return (
    <div className='container'>

      <Forms onSaveExpenseData={saveExpenseDataHandler} />

    </div>
  );
};

export default App;