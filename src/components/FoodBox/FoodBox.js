import "./FoodBox.css";
import { Card, Col, Button } from "antd";

export function FoodBox({ food, handleDelete }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.image} />
        <p>Calories: {food.calories}</p>
        <p>
          Servings: <b>{food.servings}</b>
        </p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => handleDelete(food.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}
