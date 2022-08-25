import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Header from './Components/LearningComponents/Header'
import Footer from './Components/LearningComponents/Footer'
import Body from './Components/LearningComponents/Body'
import Counter from './Components/Counter/Counter'

class App extends Component{
  state={
    name:"React Js",
    value:"States"
  }
  render(){
    return(
      <div className='App'>
        <Display name={this.state.name} value={this.state.value}></Display>
        
      </div>
    )
  }
}

class Display extends Component{
  render(){
    return(
      <div>
        <h1 style={{backgroundColor:'blue'}}>This is the Display Component</h1>
        <h1>Welcome to {this.props.name}</h1>
        <p>This is {this.props.value}</p>
      </div>
    )
  }
  
}





// function App() {
//   return (
//     <div className="App">
//       <center>
        
//         {/* <FirstComponent></FirstComponent> */}
//       </center>
//       {/* <SecondComponent></SecondComponent> */}





//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }


// function LearningComponents () {
//   return(
//     <div className="LearningComponents">
//         <h1>Hello World</h1>
//         <Header></Header>
//         <Body></Body>
//         <Footer></Footer>
//     </div>
//   )
// }

// export function FunctionComponent(){
//   return(
//     <div className='FunctionComponent'>
//       <h1>Function Component</h1>
//     </div>
//   )
// }





//class component
// class FirstComponent extends Component {
//   render(){
//     return(
//       <div className='FirstComponent'>
//         FirstComponent
//       </div>
//     )
//   }
// }

// class SecondComponent extends Component {
//   render(){
//     return(
//       <div className='SecondComponent'>
//         2nd Component
//       </div>
//     )
//   }
// }

export default App;
