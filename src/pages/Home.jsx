import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import FumoBlock from '../components/FumoBlock';
import Skeleton from '../components/FumoBlock/Skeleton';

const Home = () => {
    const [fumos, setFumos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://62e1114cfa99731d75cd00a7.mockapi.io/items')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setFumos(json);
          setIsLoading(false);
        });
    }, []);
  
    return(
        <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Плюшки</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : fumos.map((fumo) => <FumoBlock key={fumo.id} {...fumo} />)}
      </div>
    </>
  )
}

export default Home;