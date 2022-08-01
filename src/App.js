import React from 'react';
import InputElement from './components/common/InputElement';
import CardGrid from './components/common/CardGrid';
import DropdownElement from './components/common/DropdownElement';

function App() {
  return (
    <>
    <div className='container-md flexRow'>
      <div className='margin-default'>
        <InputElement></InputElement>
        <DropdownElement></DropdownElement>
      </div>
      <div className="verticalLine"></div>
      <div className='margin-default'>
        <CardGrid></CardGrid>
      </div>
    </div>
    </>
  );
}

export default App;
