import './main.css';
import aboutUs from '../../Assets/img/orderFood/aboutUs.png';

const Main = () => {
    return (
        <div className='Main'>
            <main>
                <section>
                    <div className='Section'>
                        <div className='AboutUs'>
                            <div className='AboutUsDescription'>
                                <h1>We are Fast Feast</h1>
                                <p>We’re an American company and the fastest-growing multicategory player in the USA, Europe, Western Asia and Africa.
                                    With technology at the core of our business, we create innovative solutions by connecting customers, businesses
                                    and couriers, whilst making sure we have a sustainable impact on our communities and ecosystems.
                                </p>
                                <p>We've gathered together all the top-rated cafes and restaurants of the city you are living and offer you the fast
                                    delivery of the meal you will definitely enjoy. Our team is working non-stop on developing the menu and quality of our services,
                                    so you can take some rest while having lunch.
                                </p>
                            </div>
                            <img src={aboutUs} alt='food_app'/>
                        </div>
                        <h2>Why Choose Us:</h2>
                        <div className='Benefits'>
                            <div className='Benefit'>
                                <h3>Almost 20 Years of Experience</h3>
                                <p>Since 2005, we have been providing food delivery services to satisfied customers who never have to go hungry.</p>
                            </div>
                            <div className='Benefit'>
                                <h3>Stay Ahead of the Competition</h3>
                                <p>Our menu is constantly expanding to offer a wide variety of food options for our customers to enjoy.</p>
                            </div>
                            <div className='Benefit'>
                                <h3>The Convenience of Mobile Ordering</h3>
                                <p>Our mobile app allows customers to quickly receive warm, fresh, and delicious food, saving them valuable time.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main;