import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import * as PropTypes from "prop-types";
import { Col, Row, Card, CardImg, Table} from 'reactstrap';
import Spinner from '../../components/spinner.jsx';
import * as URL from '../../router/url'



export default function MovieTable(props) {

    const isLoad = useSelector((store) => (store.app.isLoading));
    const moviesListRedux = useSelector((store) => (store.app.movies || []));

    const { movieID } = props;
   
     
    if (isLoad){
        return ( <Spinner />);
    } else{
        const { 
            genres,
            image,
            language,
            name,
            network,
            premiered,
            summary,
            url,
         } = moviesListRedux[movieID].show;

        return (

            <div>
                <Row>
                    <Col xs="6" sm="4">
                        <Card>
                            <CardImg top src={ image.original } alt={ name } />
                        </Card>
                    </Col>
                </Row>
                <Table hover>
                    <tbody>
                        <tr>
                            <th scope="row" >Название:</th>
                            <td>{ name }</td>
                        </tr>
                        <tr>
                            <th scope="row" >Дата выпуска:</th>
                            <td>{ premiered.split("-").reverse().join("/") }</td>
                        </tr>
                        <tr>
                            <th scope="row" >Жанр:</th>
                            <td>{ genres.join(", ") }</td>
                        </tr>
                        <tr>
                            <th scope="row" >Язык озвучки:</th>
                            <td>{ language }</td>
                        </tr>
                        <tr>
                            <th scope="row" >Производство:</th>
                            <tr>
                                <td scope="row" >Студия:</td>
                                <td>{ network.name }</td>
                            </tr>
                            <tr>
                                <td scope="row" >Страна:</td>
                                <td>{ network.country.name }</td>
                            </tr>
                        </tr>
                        <tr>
                            <th scope="row" ></th>
                            <td><small><a target="_blink" href={ url }>Смотреть фильм</a></small></td>
                        </tr>
                        <tr>
                            <th scope="row" >Описание:</th>
                            <td><small className="text-muted" dangerouslySetInnerHTML={ { __html: summary } }/></td>
                        </tr>
                    </tbody>
                </Table>
                <Link
                        to={ `${ URL.ROOT }` }
                        className="btn btn-primary btn-sm"
                    >
                    Все фильмы
                </Link>
                <br/>
                <br/>
            </div>
        )
    }
   
}


MovieTable.propTypes = {
    movieID: PropTypes.string.isRequired,
}

MovieTable.defaultTypes = {
    movieID: "",
}