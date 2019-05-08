import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';


let tempArr = [{
  fName: 'Apollo',
  lName: 'Du',
  email: '123@gmail.com',
  age: 20,
  onlineStatus: true,
}];

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render post"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
