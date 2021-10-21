const initialState = {
    items: {},
    totalPrice: 0
};

const pizzas = (state = initialState, action) => {

    switch(action.type){
        case 'SET_PIZZAS':
            return{
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'SET_LOADED':
            return{
                ...state,
                items: action.payload,
                isLoaded: action.payload,
            }
        default:
            return state;
    }
}
export default pizzas;
