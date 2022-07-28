import { useState, useEffect } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import FumoBlock from './components/FumoBlock';

function App() {
  const [fumos, setFumos] = useState([]);

  useEffect(() => {
    fetch('https://62e1114cfa99731d75cd00a7.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setFumos(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {fumos.map((pizza, pizzaIndex) => (
              <FumoBlock key={pizzaIndex} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
