const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };
            const totalCount = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].items.length + sum, 0
            );
            const totalPrice = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].totalPrice + sum, 0
            );

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'REMOVE_ART_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }

        case 'PLUS_CART_ITEM':{
            const newItem = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItem,
                        totalPrice: getTotalPrice(newItem),
                    },
                },
            }
        }

        case 'MINUS_CART_ITEM':{
            const oldItem = state.items[action.payload].items;
            const newItem = oldItem.length > 1 
            ? state.items[action.payload].items.slice(1)
            : oldItem;
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItem,
                        totalPrice: getTotalPrice(newItem),
                    },
                },
            }
        }

        case 'CLEAR_CART':
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {},
            }

        default:
            return state;
    }
}
export default cart;
