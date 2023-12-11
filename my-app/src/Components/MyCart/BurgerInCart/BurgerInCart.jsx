import './burgerInCart.css';
import {useDispatch} from "react-redux";
import {removeBurgerAtCart, setCounter} from "../../../Redux/shoppingCartReducer";

const BurgerInCart = (props) => {
    let dispatch = useDispatch();
    return (
        <div className='BurgerInCart'>
            <img src={props.burgerInCart.images[0].sm} alt="burgerInCart"/>
            <div>
                <h2>{props.burgerInCart.name}</h2>
                <input type="number" onChange={() => dispatch(setCounter(props.burgerInCart))} value={props.burgerInCart.counter}/>
                <button onClick={() => {dispatch(removeBurgerAtCart(props.burgerInCart))}} className='DeleteButton'>Delete</button>
            </div>
        </div>
    )
}

export default BurgerInCart;