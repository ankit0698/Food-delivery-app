import CartIcon from "../Cart/CartIcon"
import classes from './CartButton.module.css'
import CartContext from "../../store/cart-context"
import { useContext, useState, useEffect } from 'react'
const CartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const { items } = cartCtx
    const cartItemsCount = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClass = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnHighlighted(true)
        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [items])


    return (

        <button className={btnClass}
            onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {cartItemsCount}
            </span>
        </button>
    )
}

export default CartButton