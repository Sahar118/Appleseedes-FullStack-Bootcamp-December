import React, { useState } from 'react';
import './App.css';
const App = () => {

  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(true);
  const [checkedFour, setCheckedFour] = useState(true);



  const handleChange1 = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChange2 = () => {
    setCheckedTwo(!checkedTwo);
  };
  const handleChange3 = () => {
    setCheckedThree(!checkedThree);
  };
  const handleChange4 = () => {
    setCheckedFour(!checkedFour);
  };
  return (
    <div className='container'>
      <label>
        <input
          type="checkbox"
          checked={checkedOne}
          onClick={handleChange1}
        />
        I read the tern of the app
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedTwo}
          onClick={handleChange2}
        />
        I accept the tern of the app
      </label>

      <label>
        <input
          type="checkbox"

          checked={checkedThree}
          onClick={handleChange3}
        />
        I read the tern of the app
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedFour}
          onClick={handleChange4}
        />
        I accept the tern of the app
      </label>




    </div>
  );
};

export default App;