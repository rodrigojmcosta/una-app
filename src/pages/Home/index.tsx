import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/exercicios">Exercícios</Link></li>
          <li><Link to="/pokemon">Pokédex</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Home;