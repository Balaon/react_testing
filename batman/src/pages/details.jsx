
import React from 'react';
import { useSelector } from 'react-redux';
import MovieTable from "./details/movieTable";
import movieIdentifier from './details/filsIdentifier'


function DetailsPage(props) {

	const moviesList = useSelector((store) => (store.app.movies || []));
    const { code } = props.match.params;

	return (
		<React.Fragment>
            <MovieTable movieID={ movieIdentifier(moviesList, code) || "" } />
		</React.Fragment>
	);
}

export default DetailsPage;