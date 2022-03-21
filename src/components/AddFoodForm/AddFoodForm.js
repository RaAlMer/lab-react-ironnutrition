import "./AddFoodForm.css";
import { Input, Divider } from 'antd';

export function AddFoodForm({name, calories, image, servings, addFood, setName, setImage, setCalories, setServings}){
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            name,
            calories,
            image,
            servings
        }
        addFood(newFood);
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>
            <label>Name</label>
            <Input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
            <label>Image</label>
            <Input value={image} type="text" onChange={(e) => setImage(e.target.value)}/>
            <label>Calories</label>
            <Input value={calories} type="number" onChange={(e) => setCalories(e.target.value)}/>
            <label>Servings</label>
            <Input value={servings} type="number" onChange={(e) => setServings(e.target.value)}/>
            <button type="submit">Create</button>
        </form>
    )
}