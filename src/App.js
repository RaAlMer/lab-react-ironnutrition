import { useState } from "react";
import "./App.css";
import foods_db from "./foods.json";
import { FoodBox, AddFoodForm, Search } from "./components";
import { Button, Divider, Row } from "antd";

function App() {
  const [foods, setFoods] = useState(foods_db);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [filterFood, setFilterFood] = useState(foods);

  const [show, setShow] = useState(false);

  const addFood = (newFood) => {
    const updatedFood = [...foods, newFood];
    setFoods(updatedFood);
  };

  const searchFood = (searchTerm) => {
    const foodFiltered = !searchTerm
      ? foods
      : foods.filter((food) =>
          food.name
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        );
    setFilterFood(foodFiltered);
  };

  const handleDelete = (foodName) => {
    setFoods((previousFood) => {
      return previousFood.filter((food) => {
        return food.name !== foodName;
      });
    });
  };

  const handleShow = () => {
    setShow((previousShow) => {
      return !previousShow;
    });
  };

  return (
    <div className="App">
      {show && (
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
      )}
      <Button style={{ margin: "20px" }} onClick={handleShow}>
        {show ? "Hide Form" : "Add New Food"}{" "}
      </Button>
      <Search
        search={searchTerm}
        setSearchTerm={setSearchTerm}
        searchFood={searchFood}
      />
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {filterFood.length === 0 || foods.length === 0 ? (
          <div>
            <p>Oops! There is no more content to show.</p>
            <p style={{ fontSize: "128px", textAlign: "center" }}>
              <b>∅</b>
            </p>
          </div>
        ) : (
          filterFood.map((food, index) => (
            <FoodBox
              key={index}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings
              }}
              handleDelete={handleDelete}
            />
          ))
        )}
      </Row>
    </div>
  );
}

export default App;

