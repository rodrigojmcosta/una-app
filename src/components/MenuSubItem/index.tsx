import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuSubItemProps } from '../../interfaces/props/MenuSubItemProps';
import './styles.css';

function MenuSubItem(props: MenuSubItemProps) {

  const { to, children } = props;
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    isOpen(location, to);
  }, [location, to]);

  const isOpen = (location: any, to: string) => {
    //Lógica para não perder o foco do menu em sub rotas
    let path = location.pathname;
    let posicaoTerceiraBarra = path.indexOf('/', (path.indexOf('/', path.indexOf('/') + 1)) + 1);
    let substringPath = path.substring(0, posicaoTerceiraBarra);
    path = substringPath === '' ? path : substringPath;

    if (path === to) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <li>
      <Link to={to === '' ? '/emptyState' : to} className='text-decoration-none'>
        <button className={`sub-item ${open ? 'open' : 'closed'}`}>
          <span className={open ? 'bold' : 'normal'}>{children}</span>
        </button>
      </Link>
    </li>
  );

}

export default MenuSubItem;