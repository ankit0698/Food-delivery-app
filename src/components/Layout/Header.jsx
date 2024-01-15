
import CartButton from './CartButton'
import mealsImage from '../../assets/meal-food-app.jpg'
import classes from './Header.module.css'
const Header = (props) => {
    return (<>
        <header className={classes.header}>
            <h1>Tasty Meals</h1>
            <CartButton onClick={props.onShowCart} />
        </header>

        <div className={classes.mainImage}>
            <img src={mealsImage} alt="meal pot" />
        </div>
    </>)
}

export default Header