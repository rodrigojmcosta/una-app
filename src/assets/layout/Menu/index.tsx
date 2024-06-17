import { faBook, faCheck, faHome, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';
import MenuListButton from '../../../components/MenuListButton';
import MenuSubItem from '../../../components/MenuSubItem';
import MenuSubList from '../../../components/MenuSubList';
import bibliotecaLogoFilled from '../../BibliotecaSaber_logo_filled.png';
import './styles.css';

function Menu() {

  return (
    <nav>
      <div className='nav-header'>
        <img src={bibliotecaLogoFilled} width={'150px'} height={'80px'} alt="Logo biblioteca" />
      </div>
      <div className='overflow-nav-menu'>
        <div className={`nav-list`} >
          <ul className='menu'>
            <MenuListButton icon={faHome} to='/home'>Início</MenuListButton>
            <MenuSubList icon={faUser} to='alunos' name="Alunos">
              <MenuSubItem to='/alunos/cadastro'>
                Cadastrar alunos
              </MenuSubItem>
            </MenuSubList>
            <MenuSubList icon={faBook} to='livros' name="Livros">
              <MenuSubItem to='/livros/catalogo'>
                Catálogo
              </MenuSubItem>
              <MenuSubItem to='/livros/cadastro'>
                Cadastrar um livro
              </MenuSubItem>
            </MenuSubList>
            <MenuListButton icon={faReceipt} to='/pendencias'>Pendências</MenuListButton>
            <MenuListButton icon={faCheck} to='/devolucao'>Registrar devolução</MenuListButton>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu