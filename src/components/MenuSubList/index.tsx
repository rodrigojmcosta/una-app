import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuSubListProps } from '../../interfaces/props/MenuSubListProps';
import './styles.css';

function MenuSubList(props: MenuSubListProps) {
  const [open, setOpen] = useState(false);
  const { icon, name, to } = props;
  const location = useLocation();

  useEffect(() => {
    const firstPath = location.pathname.split('/')[1];
    if (firstPath === to) {
      setOpen(true);
    }
    else {
      setOpen(false);
    }
  }, [location, to]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li>
      <button className="menu-sub-list-button" onClick={handleClick}>
        <FontAwesomeIcon icon={icon} />
        <span className={`sub-list-icon ${open ? 'bold align-text-left ' : 'normal align-text-left '}`}>{name}</span>
        {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </button>
      {open && <ul className="sub-list">{props.children}</ul>}
    </li>
  );
}

export default MenuSubList;
