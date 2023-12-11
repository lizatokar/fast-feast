import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import './certainBurger.css';
import Comments from "../Comments/Comments";
import {useDispatch, useSelector} from "react-redux";
import {setBurger} from "../../Redux/burgerInfoReducer";
import {addBurgersToCart} from "../../Redux/shoppingCartReducer";

const CertainBurger = (props) => {
    let certainBurger = useSelector(state => state.burgerInfo.burger);
    let dispatch = useDispatch();
    let {certainBurgerId} = useParams();
    let [likes, setLikes] = useState(10);
    let [dislikes, setDislikes] = useState(4);


    useEffect(() => {
        axios
            .get(`https://burgers-hub.p.rapidapi.com/burgers/${certainBurgerId}`, {
                headers: {
                    'x-rapidapi-key': 'ffefe14405mshc64b409892bdcf9p133b59jsnaab699d33296',
                    'x-rapidapi-host': 'burgers-hub.p.rapidapi.com',
                },
            })
            .then((response) => {
                dispatch(setBurger(response.data))
            });

    }, []);

    let navigate = useNavigate();

    const BackHandler = () => {
        navigate('/burgers');
    }

    const likeHandler = () => {
        setLikes(likes + 1);
    }

    const dislikeHandler = () => {
        setDislikes(dislikes + 1);
    }

    const AddBurgerToCartHandler = () => {
        dispatch(addBurgersToCart(certainBurger))
    }


    return (
        <div className='ContainerBurger'>
            <button onClick={BackHandler} className='BackToBurgersButton'>Back to Burgers</button>

            {
                certainBurger.id ? <div className='CertainBurger'>
                    <img src={certainBurger.images[0].sm} alt={certainBurger.name}/>
                    <div className='Description'>
                        <h1>{certainBurger.name}</h1>
                        <h2>Price: {certainBurger.price}$</h2>
                        <p>{certainBurger.desc}</p>
                        <p>Rating: {Math.round(likes / dislikes)}</p>
                        <div className='LikesDislikesButtons'>
                            <button onClick={likeHandler} className='LikeButton'>Like ({likes})</button>
                            <button onClick={dislikeHandler} className='DislikeButton'>Dislike ({dislikes})</button>
                        </div>
                        <button onClick={AddBurgerToCartHandler} className='AddBurgerToCartButton'>Add to Cart</button>
                        <Comments comments={props.comments}/>
                    </div>
                </div> : <h1>Loading...</h1>
            }
        </div>
    )
}

export default CertainBurger;
