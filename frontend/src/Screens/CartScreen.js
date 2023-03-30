import React, { useEffect } from 'react'
import { Link , useParams,  useNavigate, useSearchParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../Components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen( location ) {
  const [searchParams,setSearchParams]=useSearchParams()
  const match = useParams()
  const navigate = useNavigate()

  const productId = match.id;
  const qty = Number(searchParams.get('qty'))
  
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart 


  useEffect(() => {
    if (productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
        Cart Test
    </div>
  )
}

export default CartScreen