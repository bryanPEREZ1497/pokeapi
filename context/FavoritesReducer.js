
export const actionTypes = {
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE'
}

export default function FavoritesReducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_FAVORITE:
            return [...state, (action.payload)]
            break;
        case actionTypes.REMOVE_FAVORITE:
            return [...state.filter((fav) => fav.id !== action.payload.id)]
            // return [...state, state.filter((fav) => fav.id !== action.payload.id)]
            break;

        default:
            break;
    }
}