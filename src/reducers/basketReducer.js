import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';

const initialState = {
    selectProduct: 0,
    basketNumbers: 0,
    cartCost: 0,
    cartProducts: 0,
    products: {
        greyTshirt: {
            name: "Grey Tshirt",
            tagName: 'greyTshirt',
            price: 15.00,
            numbers: 0,
            inCart: false
        },
        blackTshirt: {
            name: "Black Tshirt",
            tagName: 'blackTshirt',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        blueTshirt: {
            name: "Blue Tshirt",
            tagName: 'blueTshirt',
            price: 15.00,
            numbers: 0,
            inCart: false
        },
        redTshirt: {
            name: "Red Tshirt",
            tagName: 'redTshirt',
            price: 15.00,
            numbers: 0,
            inCart: false
        }
    }
}

const BasketReducer = (state = initialState, action) => {
    let productSelected = 0;

    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            let productSelected = { ...state.products[action.payload] }

            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            //productSelected = { ...state.products[action.payload] }
            let cartSelected = { ...state.products[action.payload] }
            //productSelected.numbers += 1;
            cartSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    
                    [action.payload]: cartSelected
                    //[action.payload].numbers: cartSelected
                  
                }
            }
        
        case DECREASE_QUANTITY:
            let decreseSelected = { ...state.products[action.payload] };
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if (decreseSelected.numbers === 0) {
                decreseSelected.numbers = 0;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers - 1
            } else {
                decreseSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers
            }

            return {
                ...state,
                basketNumbers: state.basketNumbers - 1,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: decreseSelected
                }
            }
        case CLEAR_PRODUCT:
            let deleteSelected = { ...state.products[action.payload] };
            let numbersBackup = deleteSelected.numbers;
            deleteSelected.numbers = 0;
            deleteSelected.inCart = false;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost: state.cartCost - (numbersBackup * deleteSelected.price),
                products: {
                    ...state.products,
                    [action.payload]: deleteSelected
                }
            }
        default:
            return state;
    }
}

export default BasketReducer;