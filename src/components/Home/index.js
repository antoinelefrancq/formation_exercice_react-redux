import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import Error from '../Error';
import Recipe from '../Recipe';

function Home() {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <Page>
      <AppHeader />
      <Routes>
        <Route
          path="/"
          element={(
            <Content
              title="Les recettes oRecipes"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
              recipes={recipes}
            />
)}
        />
        {recipes.map((recipe) => (
          <Route
            key={recipe.id}
            path={`/recipe/${recipe.slug}`}
            element={<Recipe findedRecipe={recipe.slug} />}
          />
        ))}

        <Route path="*" element={<Error />} />
      </Routes>

    </Page>
  );
}

export default Home;
