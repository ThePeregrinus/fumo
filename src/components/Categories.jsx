import {useState} from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    'Все',
    'Дурёхи',
    'Не дурёхи',
    'Тест',
    'Тест',
    'Тест',
    'Тест',
  ]
  
  return (
    <div className="categories">
      <ul>
        {
          categories.map((fumoCategory, categoryIndex) => 
          <li 
              key = {categoryIndex} 
              onClick = {() => setActiveCategory(categoryIndex)} className=  {activeCategory === categoryIndex ? "active" : ''}>
              {fumoCategory}
          </li>
          )
        }
      </ul>
    </div>
  );
}

export default Categories;