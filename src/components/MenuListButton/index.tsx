import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuListButtonProps } from '../../interfaces/props/MenuListButtonProps';
import './styles.css';


function MenuListButton(props: MenuListButtonProps) {
  const [open, setOpen] = useState(false);
  const { to, children, icon, highlight } = props;
  const location = useLocation();

  useEffect(() => {
    let pathName = location.pathname;
    if (pathName === to) {
      setOpen(true);
    }
    else {
      setOpen(false);
    }
  }, [location, to]);

  return (
    <li>
      <Link to={to === '' ? '/emptyState' : to} className='text-decoration-none'>
        <button className="menu-list-button">
          <FontAwesomeIcon icon={icon} />{' '}
          <span className={`${open ? 'bold' : 'normal'} ${highlight ? 'underline' : ''}`}>{children}</span>
        </button>
      </Link>
    </li>
  );
}

export default MenuListButton;
