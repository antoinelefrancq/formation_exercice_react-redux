import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.scss';

function Menu() {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <nav className="menu">
      <Link
        className="menu-link menu-link--active"
        to="/"
      >
        Accueil
      </Link>
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </Link>
      ))}

    </nav>
  );
}

export default Menu;
