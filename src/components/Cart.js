import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
const Cart=()=>{
 const cartData=useSelector((state)=>state.cartData);
let amount=cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev+next)
 return (
    <div>
        <Link to="/"><Button>Product List</Button></Link>
      <h1>Cart Page</h1>
      <div className='cart-page-container'>
       <table>
        <tr>
            <td>name</td>
            <td>color</td>
            <td>price</td>
            <td>brand</td>
             <td>category</td>
        </tr>
        {
            cartData.map((item)=> <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
        </tr>)}
       </table>
       <div className='price-detail'>
        <div><span>Amount</span><span>   :  {amount}</span></div>
        <div><span>Discount</span><span> :    {amount/10}</span></div>
        <div><span>Total</span><span>  =   {amount-amount/10}</span></div>
         <Link to="https://netbanking.hdfcbank.com/netbanking/"><Button variant="danger">pay Amount</Button></Link>
       </div>
      </div>
    </div>
  );
}

export default Cart;
