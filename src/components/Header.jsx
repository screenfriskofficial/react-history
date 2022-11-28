import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header-navigation">
      <div className="logo">
        <Link to={'/'} className="link">
          <p>REACT-HISTORY</p>
        </Link>
      </div>

      <div className="complete-test">
        <Link to={'/test'} className="link">
          <p>Пройти тест</p>
        </Link>
      </div>
    </div>
  );
}
export default Header;
