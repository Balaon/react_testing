import * as ACT from './actions';

export function loadMoviesAct(payload) {
    return {
        type: ACT.MOVIES_LOADED,
        payload,
    };
}

export function errorOccurredAct(payload) {
    return {
        type: ACT.ERROR_OCCURRED,
        payload,
    };
}

export function viewedMoviesAct(payload) {
    return {
        type: ACT.VIEWED_MOVIE,
        payload,
    };
}

export function unViewedMoviesAct(payload) {
    return {
        type: ACT.NOT_VIEWED_MOVIE,
        payload,
    };
}
