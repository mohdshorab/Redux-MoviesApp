export const LOAD_BOLLYWOOD_MOVIES = 'LOAD_PRODUCTS';
export const LOAD_HOLLYWOOD_MOVIES = 'HOLLY_WOOD';


export function loadBollyWoodMovies(bollywood) {
    return {
        type: LOAD_BOLLYWOOD_MOVIES,
        bollywood: {
            ...bollywood,
        }
    }
}

export function loadHollyWoodMovies(hollywood){
    return{
        type: LOAD_HOLLYWOOD_MOVIES,
        hollywood:{
            ...hollywood
        }
    }
}