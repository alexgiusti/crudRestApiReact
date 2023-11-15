import { useState } from 'react'
import './App.css'
import Form from './Form'
import ReqAPI from './ReqAPI'

const App =()=>{
  const[n1, setN1] = useState(0)
  const[n2, setN2] = useState(0)
  const[result, setResult] = useState(0)

console.log(n1,n2,result)



  return(
    <div>
      <h3>Soma de Números</h3>
      <Form n1={n1}  setN1={setN1} n2={n2} setN2={setN2} result={result} setResult={setResult}/>
      <ReqAPI />
    </div>
  )
}


export default App