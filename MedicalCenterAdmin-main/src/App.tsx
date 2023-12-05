import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
export default class App extends Component  {
  componentDidMount(): void {
      //console.log('run')

  }

  render(): React.ReactNode {
    return (
      <div className='bg-stone-300 min-h-screen	'>
      {/* <div >
        <h1>Hello world</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        
      </div> */}
            <Home/>
            <Header/>
      {/* <Home/>
      <Contact/>
      <About/>
      <Counter/> */}
      </div>
    );
  }
}


// export default App;
