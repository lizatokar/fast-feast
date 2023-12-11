import './header.css';
import {NavLink} from "react-router-dom";
import logo from '../../Assets/img/logo/logo.png';
import foodDelivery from '../../Assets/img/orderFood/foodDelivery.png';


const Header = () => {
    return (
        <header className='Header'>
            <div className='LogoText'>
                <img src={logo} alt='logo' className='Logo'/>
                <p>Fast Feast</p>
            </div>
            <div className='Delivery'>
                <img src={foodDelivery} alt='delivery' className='FoodDelivery'/>
                <h3>Speed up <br/><em><span className='FirstSpan'>your food ordering</span></em><br/><span className='SecondSpan'>to a new level</span></h3>
            </div>
            <nav>
               <NavLink to='/'>About Us</NavLink>
                <NavLink to='/burgers'>Burgers</NavLink>
                <NavLink to='/my-cart'>My Cart</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
            </nav>
        </header>
    )
}

export default Header;