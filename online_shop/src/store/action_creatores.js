import * as ACT from './actions'


export function updateCatalog(payload){
    return{
        type: ACT.UPDATE_CATALOG,
        payload,
    };
}
export function updateLoading(payload){
    return{
        type: ACT.UPDATE_LOADING,
        payload,
    };
}
export function updateCategory(payload){
    return{
        type: ACT.UPDATE_CATEGORY,
        payload,
    };
}
export function updateBrands(payload){
    return{
        type: ACT.UPDATE_BRANDS,
        payload,
    };
}
export function updateRanges(payload){
    return{
        type: ACT.UPDATE_RANGES,
        payload,
    };
}
export function updateColors(payload){
    return{
        type: ACT.UPDATE_COLORS,
        payload,
    };
}
export function updateCart(payload){
    return{
        type: ACT.UPDATE_CART,
        payload,
    };
}
export function updateFilters(payload){
    return{
        type: ACT.UPDATE_FILTERS,
        payload,
    };
}


 export function loadCatalog(){

    return(dispatch)=>{
        dispatch(updateLoading({ catalog: true }));

        const data = fetch('http://test-api.ipromote.ru/API/CATALOG/FIND');
        
        data.then(data=>{return data.json()})
        .then( (data) => {
            dispatch(updateCatalog(data)); 
            dispatch(updateLoading({ catalog: false })); 
        })
        .catch((e) => {
			dispatch(updateLoading({ catalog: false }));
			console.log("ERROR while loading data from url", e);
		});

    }
 }
 export function loadCategory(){

    return(dispatch)=>{
        dispatch(updateLoading({ category: true }));

        const data = fetch('http://test-api.ipromote.ru/API/CATEGORY/FIND');
        
        data.then(data=>{return data.json()})
        .then( (data) => {
            dispatch(updateCategory(data)); 
            dispatch(updateLoading({ category: false })); 
        })
        .catch((e) => {
			dispatch(updateLoading({ category: false }));
			console.log("ERROR while loading data from url", e);
		});

    }
 }
 export function loadBrands(){

    return(dispatch)=>{
        dispatch(updateLoading({ brands: true }));

        const data = fetch('http://test-api.ipromote.ru/API/BRAND/FIND');
        
        data.then(data=>{return data.json()})
        .then( (data) => {
            dispatch(updateBrands(data)); 
            dispatch(updateLoading({ brands: false })); 
        })
        .catch((e) => {
			dispatch(updateLoading({ brands: false }));
			console.log("ERROR while loading data from url", e);
		});

    }
 }
 export function loadColors(){

    return(dispatch)=>{
        dispatch(updateLoading({ colors: true }));

        const data = fetch('http://test-api.ipromote.ru/API/COLOR/FIND');
        
        data.then(data=>{return data.json()})
        .then( (data) => {
            dispatch(updateColors(data)); 
            dispatch(updateLoading({ colors: false })); 
        })
        .catch((e) => {
			dispatch(updateLoading({ colors: false }));
			console.log("ERROR while loading data from url", e);
		});

    }
 }


