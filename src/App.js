import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import A from './components/component1.js';
import StateComponent from './components/stateCom.js';
import Head from './components/head.js';
import ReactDOM from 'react-dom';
import Prave from './components/prave.js';
import Cards from './components/card.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Resume from './components/resume.js'

// function App() {
//   //return (
//     // <div>
//     //   <h1>cutie</h1>
//     //   <p>Welcome to apssdc</p>
//     //   <Header></Header>
//     //   <A></A>
//     //   <StateComponent></StateComponent>
//     //   <p>{4+5}</p>
//     //   <Head name="parve">
//     //       <p>This is Props data</p>
//     //       <p>1st iteration</p>
//     //   </Head>
//     //   <Head name="sandy">
//     //       <p>This is Props data</p>
//     //       <p>2nd iterations</p>
//     //   </Head>
//     // </div>
//      //React.createElement('h2',null,'praveen')
//      //React.createElement('h3',{style:{color:'blue'}},'praveen')

//      return <div><h2>praveen is sad</h2><h3>someone make him happy</h3></div>
//   //);
// }

// class App extends React.Component{
//   render(){
//     return(
//       //React.createElement('div',{style:{background:'yellow'}},React.createElement('h2',null,'praveeen1'))
//       React.createElement('div',{id:'hai'},React.createElement('h2',null,'praveeen2'))
//     );
//   }
// }

// 

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Prave name="Venkat" role="developer"></Prave>
//         <Prave name="Akhil" role="Trainer"></Prave>
//       </div>
//     )
//   }
// }

class App extends Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Cards}/>

          <Route exact path="/resume" component={Resume}/>
        </BrowserRouter>
        {/* <Cards/> */}
        {/* <Prave></Prave> */}
      </div>
    );
  }
}

export default App;
