
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { Nav, Navbar, Container } from "react-bootstrap"
function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.warn("data in main components", data);
  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <div>
      <div className='product-container'>
        {
          data?.productData?.map((item, id) => <div key={id} className='product-item'>
            <img src={item?.photo} alt="" />
            <div className='price'>Name : {item?.name}</div>
            <div className='price'>Color : {item?.color}</div>
            <div className='price'>price : {item?.price}</div>
            <div className='price'>category : {item?.category}</div>
            <div className='price'>brand : {item?.brand}</div>
            <div className='btn'>
              <div className='btn1'>
                <Button variant="success" className='mbt' onClick={() => dispatch(addToCart(item))} >Add to cart</Button>
              </div>
              <Button variant="danger" className='mbt2' onClick={() => dispatch(removeFromCart(item.id))}>Remove to cart</Button>

            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;