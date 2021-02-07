export default function Reduser(state,action) {
    switch(action.type){
        case 'ADD_TO_CART': {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productsInfo,
                        amount: action.amount
                    }
                
                ]
            }
        }case 'REMOVE_FROM_CART': {
                let index = action.index;
                let new_state = {...state};
                delete new_state.cart[index];
                return new_state;
        }
        case 'RESET': {
            let new_state = {...state};
            new_state.cart = [];
            return new_state;
        }
        default:
            return state;
    }
}
