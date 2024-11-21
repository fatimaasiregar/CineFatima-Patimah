import { Link } from 'react-router-dom';
import { Krjcontext } from "../App";


function Header() {
  console.log('Header is rendering');
  
  return (
    <header>
      <h1>CineFatima</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/film">Film</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
