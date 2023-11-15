import axios from "axios"
import { useEffect, useState } from "react"
import './ReqAPI.css'

export default function ReqAPI() {
  const url = "https://jsonplaceholder.typicode.com/users"

  const [user, setUser] = useState([])

  const getUsers = async() =>{
    const response = await axios.get(url)
    setUser(response.data)
    console.log(user)
  }

  useEffect(()=>{
    getUsers()
  },[])
  
  return (
  // 🔽 Isso é um fragment,utilizado substituindo uma div para criar um objeto enxuto no DOM
   <>  
      <p>Requisição de Users</p>
      {/* Por estar dentro de um arquivo JSX não é possivel utilizar IF, somente Ternário(?) no retorno da função */}
      {user ? 
      // React OBRIGA A UTILIZAR PARENTESES EM ESTRUTURA DE REPETIÇÃO
      user.map((item)=>( 
        <div key={item.id} className="userContainer">
          <div className="parContainer">           
            <p className="nameContainer">
              <span className="nomeLabel">Nome:</span> {item.name}
            </p>
            <p className="emailContainer">
              <span className="emailLabel">E-mail:</span> {item.email}
            </p>
           </div>
        </div>
      ))
      : 
      <p>Loading..</p>}
    </>
  )
}
