import * as ACT from './actions';


export function getMovies(payload) {

    return (dispatcher) => {
        const movies = fetch('https://api.tvmaze.com/search/shows?q=batman');

        movies.then((data) => {
            return data.json();
          }).then((data) => {
              this.setState({ list: data || [ ]})
              console.log( data )
          }).catch((e) => {
              console.log(e)
              this.setState({ errState: e });
          });

    }

}
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
