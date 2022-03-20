import {getProductsMoreSearched} from "../services/product.service";

const initialState = []

export async function moreSearched(dispatch) {
    let response = await getProductsMoreSearched()
    dispatch({type: 'products/more-searched', payload: response})
}

export function products(state = initialState, action) {
    switch (action.type) {
        case 'products/more-searched': {
            return action.payload
        }
        default:
            return state
    }
}