// Action Types
export const LOAD_BOLLYWOOD_MOVIES = 'LOAD_BOLLYWOOD_MOVIES';
export const LOAD_HOLLYWOOD_MOVIES = 'LOAD_HOLLYWOOD_MOVIES';
export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const WATCH_LATER = 'WATCH_LATER';
export const REMOVE_FROM_WATCH_LATER = 'REMOVE_FROM_WATCH_LATER';
export const ADD_TO_LIKED_MOVIES = 'ADD_TO_LIKED_MOVIES';
export const REMOVE_FROM_LIKED_MOVIES = 'REMOVE_FROM_LIKED_MOVIES';

export function loadBollyWoodMovies(bollywood) {
    return {
        type: LOAD_BOLLYWOOD_MOVIES,
        bollywood: {
            ...bollywood,
        }
    }
}

export function loadHollyWoodMovies(hollywood) {
    return {
        type: LOAD_HOLLYWOOD_MOVIES,
        hollywood: {
            ...hollywood
        }
    }
}

export function addTofav(movie) {
    return {
        type: ADD_TO_FAV,
        payload: movie
    }
}

export function removeFromFav(movie) {
    return {
        type: REMOVE_FROM_FAV,
        payload: movie
    }
}

export function addToWatchLater(movie) {
    return {
        type: WATCH_LATER,
        payload: movie
    }
}
export function removeFromWatchLater(movie) {
    return {
        type: REMOVE_FROM_WATCH_LATER,
        payload: movie
    }
}

export function addToLikedMovies(movie) {
    return {
        type: ADD_TO_LIKED_MOVIES,
        payload: movie
    }
}
export function removeFromLikedMovies(movie) {
    return {
        type: REMOVE_FROM_LIKED_MOVIES,
        payload: movie
    }
}
