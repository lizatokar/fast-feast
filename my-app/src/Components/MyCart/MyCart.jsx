import {useSelector} from "react-redux";
import './myCart.css';
import BurgerInCart from "./BurgerInCart/BurgerInCart";
const MyCart = () => {
    let allBurgersInCart = useSelector(state => state.shoppingCart.burgersInCart)

    return (
        <div className='ShoppingCart'>

            <div className='container'>

                <div className='inputs'>
                    <h2>Enter your details</h2>
                    <h3>Name:</h3>
                    <input type="text" placeholder='Your name'/>
                    <h3>Email:</h3>
                    <input type="email" placeholder='Your e-mail'/>
                    <h3>Phone:</h3>
                    <input type="text" placeholder='Your phone number'/>
                    <div className='totalPrice'>
                        <h2>Total Price: {allBurgersInCart.reduce((acc, burgerInCart) => acc + (burgerInCart.price * burgerInCart.counter), 0).toFixed(2)}$</h2>
                        <button className='OrderButton'>Order</button>
                    </div>
                </div>
                <div className='AddedBurgersInCart'>
                    {allBurgersInCart.map(burgerInCart => <BurgerInCart burgerInCart={burgerInCart}/>)}
                </div>

            </div>

        </div>
    )
}

export default MyCart;