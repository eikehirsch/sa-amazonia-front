import Navbar from "../components/Navbar";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Home = () => {

  const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)

  function InventarUsuario() {
    let usuarioNovo = {
      id: Date.now(),
      nome: "Capitão Ganso",
      email: "capitao@juliarobert.com"
    }

    setUsuarios([...usuarios, usuarioNovo]);
  }

  return (
    <div>
        <Navbar />
        <h1>Página home do site</h1>
        <p>Olá, {usuarioLogado}.</p>
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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates esse iure dolorum, minus, pariatur officiis explicabo doloribus rem nisi modi excepturi neque magni accusantium quam, magnam sunt omnis ullam.</p>
    </div>
  )
}

export default Home