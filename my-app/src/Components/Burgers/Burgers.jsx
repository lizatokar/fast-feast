import {useEffect, useState} from "react";
import axios from "axios";
import Burger from "./Burger/Burger";
import './burgers.css'

const Burgers = () => {
    let [burgers, setBurgers] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        axios
            .get('https://burgers-hub.p.rapidapi.com/burgers', {
                headers: {
                    'x-rapidapi-key': 'ffefe14405mshc64b409892bdcf9p133b59jsnaab699d33296',
                    'x-rapidapi-host': 'burgers-hub.p.rapidapi.com',
                },
            })
            .then((response) => {
                setBurgers(response.data);
            });
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const filterBurgersByPrice = (burger) => {
        if (selectedCategory === "lessThan5") {
            return burger.price < 5;
        } else if (selectedCategory === "equalTo5") {
            return burger.price === 5;
        } else if (selectedCategory === "moreThan5") {
            return burger.price > 5;
        } else {
            return true;
        }
    };


    return (
        <div className='Burgers'>
            <h1>Burgers</h1><br/>
                <select onChange={handleCategoryChange} className="selectWithBurgers">
                    <option value="">All prices</option>
                    <option value="lessThan5">Less than 5$</option>
                    <option value="equalTo5">5$</option>
                    <option value="moreThan5">More than 5$</option>
                </select>
            <div>
                {
                    burgers.length > 0 ?
                        burgers
                            .filter(filterBurgersByPrice)
                            .map(burger => <Burger key={burger.id} burger={burger} />) :
                        <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default Burgers;
