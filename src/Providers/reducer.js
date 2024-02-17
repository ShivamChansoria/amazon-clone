export const initialState = {
     basket: [],
     user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) =>  item.price + amount, 0);


//Reducer function returns the state according to the action type.
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
           const index= state.basket.findIndex((item) => item.id === action.id);
           let newBasket = [...state.basket];
           if(index >= 0) {
            newBasket.splice(index, 1);
           }        
           else{
            console.warn("Item is not in the basket");
           }
           return {
            ...state,
            basket:newBasket
           };

           case "SET_USER":
            return{
                ...state,
                user: action.user
            }
            case "REMOVE_USER":
            return{
                ...state,
                user: null
            }
        default:
            return state;
    }
}

export default reducer ;
