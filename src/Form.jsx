/* eslint-disable react/prop-types */
export default function Form({n1,setN1,n2,setN2,result,setResult}) {

    const soma =(e)=>{
        e.preventDefault()
        const res =  Number(n1)+Number(n2)
        setResult(res)
      }

  return (
    <div>

      <form action="">
        <input type="number" value={n1} onChange={(e)=>{setN1(e.target.value)}}/>
        <input type="number" value={n2} onChange={(e)=>{setN2(e.target.value)}}/>
        <button onClick={soma}>Soma</button>
      </form>

      <p>{result}</p>

    </div>
  )
}
