import {useState} from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    'Всё',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
    'Невкусная'
  ]
  
  return (
    <div className="categories">
      <ul>
        {
          categories.map((pizzaCategory, categoryIndex) => 
          <li onClick = {() => setActiveCategory(categoryIndex)} className=  {activeCategory === categoryIndex ? "active" : ''}>
              {pizzaCategory}
          </li>
          )
        }
      </ul>
    </div>
  );
}

export default Categories;