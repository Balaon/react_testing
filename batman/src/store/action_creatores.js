import * as ACT from './actions';


export function getMovies(payload) {

    const requestURL = `https://api.tvmaze.com/search/shows?q=${ payload }`; //batman
    return (dispatcher) => {
        dispatcher(updateLoadingAct(true))

        const movies = fetch(requestURL);
        movies.then((data) => {
                return data.json();
          }).then((data) => {
                dispatcher(updateMoviesAct(data))
                dispatcher(updateLoadingAct(false))
          }).catch((e) => {
                dispatcher(updateLoadingAct(false))
                dispatcher(errorOccurredAct(e))
          });
    }
}

export function updateLoadingAct(payload) {
    return {
        type: ACT.UPDATE_LOADING,
        payload,
    };
}

export function updateMoviesAct(payload) {
    return {
        type: ACT.UPDATE_MOVIES,
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
