import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App(){

  const [number1,setNum_1]=useState(0)
  const [number2,setNum_2]=useState(0)
  const [total, set_total]=useState(0)

  function addition(){
    set_total(number1 + number2)
  }

  function subtraction(){
    set_total(number1 - number2)
  }

  return(
    <div>

      <h1>Basic Calculator</h1>
  
      <p> <strong> Number 1 </strong>: {number1} </p>

      <label>1st Number</label>
      <input type="number" value={number1} onChange={e => setNum_1(+e.target.value) } />
      <label>2nd Number</label>
      <input type="number" value={number2} onChange={e => setNum_2(+e.target.value) } />
      <button onClick={addition} >Add</button>
      <button onClick={subtraction} >Subtract</button>

      <h2>{total}</h2>
    </div>
  )
    

}

// function getValue(val){
//   console.log(val.target.value)
// }

// const element = (
//   <div>
//     <h1>Simple Calculator!</h1>
//     <label>1st number</label>
//     <input type="number" onChange={getValue} />
//     <label>2nd number</label>
//     <input type="number" />
//     <h2></h2>
//   </div>
// );


ReactDOM.render(<App />, document.getElementById('root'));
