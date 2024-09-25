import Navbar from "../../components/navbar/Navbar";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

import "./Home.css"

const Home = () => {

  // const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)

  // const [inputNome, setInputNome] = useState('');
  // const [inputEmail, setInputEmail] = useState('');

  // function InventarUsuario() {
  //   let usuarioNovo = {
  //     id: Date.now(),
  //     nome: inputNome,
  //     email: inputEmail
  //   }

  //   setUsuarios([...usuarios, usuarioNovo]);
  // }

  return (
    <div className="home-container">
        <Navbar />
        <div className="home-subcontainer">
          <h1>Protegendo o futuro, denunciando hoje.</h1>
          <p>Denunciar crimes ambientais é essencila para a preservação da natureza, proteção da biodiversidade, justiça ambiental e conscientização. A ação cidadã que garante um futuro sustentável para todos.</p>
          <button>Faça uma denúncia agora.</button>
          <span>AJUDES-NOS A PROTEGER O MEIO.</span>
        </div>
        {/* <h1>Página home do site</h1>
        <p>Olá, {usuarioLogado}.</p>
        <label htmlFor="">Nome</label>
        <input type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)}/>
        <label htmlFor="">E-mail</label>
        <input type="text" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)}/>
        <div>
          {usuarios.map((usuario, key) => (
            <div key={usuario.id}>
              <p>Nome: {usuario.nome}</p>
              <p>E-mail: {usuario.email}</p>
            </div>
          ))
          }
        </div>
        <button onClick={() => InventarUsuario()}>Inventar usuário.</button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates esse iure dolorum, minus, pariatur officiis explicabo doloribus rem nisi modi excepturi neque magni accusantium quam, magnam sunt omnis ullam.</p> */}
    </div>
  )
}

export default Home