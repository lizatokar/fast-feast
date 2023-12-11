import {useNavigate} from "react-router-dom";
import './burger.css';
import {addBurgersToCart} from "../../../Redux/shoppingCartReducer";
import {useDispatch} from "react-redux";
const Burger = (props) => {
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const ShowMoreHandler = () => {
        navigate(`/burger/${props.burger.id}`);
    }

    const AddBurgerToCartHandler = () => {
        dispatch(addBurgersToCart(props.burger))
    }

    return (
        <div className='Burger'>
            <img src={props.burger.images[0].sm} alt={props.burger.name}/>
            <h2>{props.burger.name}</h2>
            <h3>{props.burger.price}$</h3>
            <div className='buttons'>
            <button onClick={ShowMoreHandler}>Show more</button>
            <button onClick={AddBurgerToCartHandler}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Burger;