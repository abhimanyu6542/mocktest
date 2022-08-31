import React,{useState, useEffect} from 'react';


function Calculator() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Sub=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum-parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const multiply=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum*parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }
  const divide=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum/parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>
            <input type="text" id="result" value={currentSum}  readOnly />   <br /> 
            <input type="text" id="num" placeholder="enter a number" /> <br />
            <button onClick={Add}>+</button>  
            <button onClick={Sub}>-</button>
            <button onClick={multiply}>*</button>
              <button onClick={divide}>/</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default Calculator;