import { combineReducers } from 'redux';
import* as ACT from './actions';

const initialState = {
    catalog: [],
    cart: {},
    categories: [],
    brands:[],
    colors:[],
    renges: [],
    filters: {
		brand: {}, 
		color: {}, 
		price: {}, 
    },
    isLoading: {},
};

function rootReducer(store = initialState, action){
    
    switch (action.type) {
        case ACT.UPDATE_CATALOG:
            return{
                ...store,
                catalog: action.payload,
            }
            break;
        case ACT.UPDATE_LOADING:
            return{
                ...store,
                isLoading: { ...store.isLoading, ...action.payload},
            }
            break;
        case ACT.UPDATE_CATEGORY:
            return{
                ...store,
                categories: action.payload,
            }
            break;
        case ACT.UPDATE_BRANDS:
            return{
                ...store,
                brands: action.payload,
            }
            break;
        case ACT.UPDATE_RANGES:
            return{
                ...store,
                renges: action.payload,
            }
            break;
        case ACT.UPDATE_COLORS:
            return{
                ...store,
                colors: action.payload,
            }
            break;
        case ACT.UPDATE_CART:
            return{
                ...store,
                cart: { ...store.cart, ...action.payload },
            }
            break;
        case ACT.UPDATE_FILTERS:
            return{
                ...store,
                filters: { ...store.filters, ...action.payload },
            }            
            break;
    
      
    }
    return store;
}

export default ()=>combineReducers({
    app: rootReducer,
});