 export interface ICart {
    id: number;
    name: string;
    price: number;
    image: string;

}

 export interface Action {
    type: string;
    id: number;
    name: string;
    price: number;
    image: string;
}

export const initialState : ICart[] = [];


export  function CartReducer(state : Array<ICart>, action : Action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return [...state,{
                id: action.id,
                name: action.name,
                price: action.price,
                image: action.image
            }]
        }
        case 'REMOVE_FROM_CART': {
            return state.filter((item) => item.name !== action.name)
        }
        case'REMOVE': {
            return state.filter((item) => item.image !== action.image)
        }
        case 'CLEAR': {
            return initialState
        }
        default:
            return state;
    }
}