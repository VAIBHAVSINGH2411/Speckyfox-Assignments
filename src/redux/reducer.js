import {ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from './constant'
export const cartData = (data = [], action) => {


  switch(action.type){
    case ADD_TO_CART:
        console.warn("add to card action ",action);
        return [action.data,...data];
    
        case REMOVE_FROM_CART:
        console.warn("remove from cart  ",action);
       // data.length=data.length?data.length-1:[];
       const remainingItem=data.filter((item)=>item.id!==action.data);
       console.warn("remaring item",remainingItem)
           return [...remainingItem]

        case EMPTY_CART:
            console.warn("empty  from cart  ",action);
            data=[]
            return [...data]

        default:
            return data;
    }
}