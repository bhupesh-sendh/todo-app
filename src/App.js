import logo from './logo.svg';
import './App.css';
import React,{Component, useEffect, useReducer} from 'react';
import Header from './Components/LearningComponents/Header'
import Footer from './Components/LearningComponents/Footer'
import Body from './Components/LearningComponents/Body'
//import Counter from './Components/Counter/Counter'
import Button from 'react-bootstrap/Button';
import {useState} from 'react'


function App(){
  const[input,setInput]=useState("")
  const[result,setResult]=useState(0)
  const handler=e=>{
    setInput(e.target.value)
  }

  return(
    <div className='App'>
      <input type="text" placeholder={input} value={input} name="input" onChange={handler} />
      <br /> 
      <button onClick={()=>setResult(eval(input))}>Result</button>
      {/* <button onClick={()=>setInput(input="")}>Reset</button> */}
      <h1>Result is:{result}</h1>
      <Button onClick={()=>setInput(input+'1')}>1</Button>
      <Button onClick={()=>setInput(input+'2')}>2</Button>
      <Button onClick={()=>setInput(input+'3')}>3</Button>
      <br />
      <Button onClick={()=>setInput(input+'4')}>4</Button>
      <Button onClick={()=>setInput(input+'5')}>5</Button>
      <Button onClick={()=>setInput(input+'6')}>6</Button>
      <br />
      <Button onClick={()=>setInput(input+'7')}>7</Button>
      <Button onClick={()=>setInput(input+'8')}>8</Button>
      <Button onClick={()=>setInput(input+'9')}>9</Button>

    </div>
  )
}

// function App(){
//   const[count,setcount]=useState(0)
//   const[user,setUser]=useState("")
//   const onChange=e=>{ //e stands for each and every event
//     setUser(e.target.value)
//   }
//   const arr=["html","css","JS","ReactJS"]
//   // Array.map(    //Syntax of array.map function
//   //   (value,index)=><li>{value}</li>
//   // )

 
//   useEffect(()=>console.log(count),[count])// after exeduting the below return only useEffect will work
//   return(
//     <div className='App'>
//       <h1>{count}</h1>
//       <button onClick={()=>setcount(count+1)}>Click here</button>
//       <input type="text" value={user} name="user" placeholder='Username' onChange={onChange} />
//       <br></br>
//       {user}
//       {
//       arr.map(
//         (value,index)=><li>{value}</li>
//       )
//       }  {/* //since its js code therefore have to enclose within {} */}
      
      
//     </div>
//   )
// }


// class App extends Component{
//   state={
//     name:"React Js",
//     value:"States"
//   }
//   render(){
//     return(
//       <div className='App'>
//         <Display name={this.state.name} value={this.state.value}></Display>
//         <button onClick={()=>console.log("clicked")}>CLICK HERE</button>
        
//       </div>
//     )
//   }
// }

// class Display extends Component{
//   render(){
//     return(
//       <div>
//         <h1 style={{backgroundColor:'blue'}}>This is the Display Component</h1>
//         <h1>Welcome to {this.props.name}</h1>
//         <p>This is {this.props.value}</p>
//       </div>
//     )
//   }
  
// }





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
