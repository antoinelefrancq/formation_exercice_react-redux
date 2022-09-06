import PropTypes from 'prop-types';
import axios from 'axios';
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Loading from './Loading';

import './style.scss';
import { actionImportData } from '../../actions/recipes';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  const recipes = useSelector((state) => state.recipes.list);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:3001/recipes')
      .then((result) => {
        dispatch(actionImportData(result.data));
      })
      .catch((error) => {
        console.log('Requete axios NOK', error);
      });
  }, []);

  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={(<Home />)} />
        {recipes.map((recipe) => (
          <Route
            key={recipe.id}
            path={`/recipe/${recipe.slug}`}
            element={<Recipe findedRecipe={recipe.slug} />}
          />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
