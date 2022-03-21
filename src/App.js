import { useState } from 'react';
import './App.css';
import foods_db from './foods.json';
import { FoodBox, AddFoodForm } from './components';

function App() {
  const [foods, setFoods] = useState(foods_db);
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');

  const addFood = (newFood) => {
    const updatedFood = [...foods, newFood];
    setFoods(updatedFood);
  };

  return (
    <div className="App">
      {foods.map((food) => (
        <FoodBox
          key={food.name}
          food={{
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
          }}
        />
      ))}
      <AddFoodForm
        name={name}
        calories={calories}
        image={image}
        servings={servings}
        addFood={addFood}
        setName={setName}
        setImage={setImage}
        setCalories={setCalories}
        setServings={setServings}
      />
    </div>
  );
}

export default App;
