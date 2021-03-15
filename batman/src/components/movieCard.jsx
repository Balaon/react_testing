import React from 'react'
import { Link } from 'react-router-dom'
import * as PropTypes from "prop-types";
import * as URL from '../router/url'
import { 
    Button, 
    Card, 
    CardImg, 
    CardBody, 
    CardText, 
    CardTitle, 
    Col, 
    Row } from 'reactstrap';


function MovieCard(props) {

    const onChange = () => null
    const watched = false;

    const {
        id,
        name = "",
        url = "",
        image = {},
        summary, 
        premiered,
      } = props;

    return (
            <Card style={ { width: "30%" } } color={ watched ? "primary" : "" }>
            <CardImg top width="100%" src={ image } alt={ name }/>
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                <CardText>
                    <small className="text-muted" dangerouslySetInnerHTML={ { __html: summary } }/></CardText>
                <CardText>
                    <small className="text-muted">{ premiered }</small> <br />
                    <small><a target="_blink" href={ url }>Visit movie page</a></small> <br />
                </CardText>
                <Row>
                <Col>
                    <Button
                    size="sm"
                    onClick={ () => { onChange(id) }}
                    variant={ watched ? "seccess" : "outline-secondary"}
                    >
                    { watched ? "Смотрел" : "Не смотрел"}
                    </Button>
                </Col>
                <Col>
                    <Link
                        to={ `${ URL.DETAILS }/${ id }` }
                        className="btn btn-secondary btn-sm"
                    >
                    Детали
                    </Link>
                </Col>
                </Row>
            </CardBody>
            </Card>
    )
}

MovieCard.propTypes ={
        id:PropTypes.number,
        name:PropTypes.string,
        url:PropTypes.string,
        image:PropTypes.string,
        summary:PropTypes.string, 
        premiered:PropTypes.string,
}

export default MovieCard;