import React, {useState, useEffect} from 'react'
import Navbar from "../../components/navbar/Navbar"
import DenunciasTable from "../../components/denunciasTable/DenunciasTable"
import "./Denuncias.css"

function Denuncias() {

  const [isLoading, setIsLoading] = useState(false);

  const [denuncias, setDenuncias] = useState([]);

  const getDenuncias = async () => {

    setIsLoading(true); // Começa a carregar (mostrar o spinner)

    try {
      // Fazendo a requisição para a API
      const response = await fetch('http://localhost:8080/denuncias/');

      const data = await response.json();
      console.log('datinha', data)
      setDenuncias(data)

    } catch (erro) {
      
    }
    finally {
      setIsLoading(false); // Começa a carregar (mostrar o spinner)
    }
  }

  useEffect(() => {
    getDenuncias();
  }, [])
  

  return (
    <div className='denuncias-big-container'>
      <Navbar />
      <div className="denuncias-container">
        <h1 className="denuncias-title">
          Denúncias ambientais
        </h1>
        {/* <DenunciasTable denuncias={denuncias}/> */}
      </div>
    </div>
  )
}

export default Denuncias