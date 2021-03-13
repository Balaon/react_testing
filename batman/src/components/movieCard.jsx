import React from 'react'
import * as PropTypes from "prop-types";
import { 
    Button, 
    Card, 
    CardImg, 
    CardBody, 
    CardText, 
    CardTitle, 
    Col, 
    Row } from 'reactstrap';


export  function MovieCard(props) {

    const onViewMore = () => null
    const onchange = () => null
    const watched = false;

    const {
        id,
        name = "",
        url = "",
        summary= "", 
        premiered= "",
        image = {},
      } = props;

    return (
        <div style={ { float: "left" } }>
            <Card color={ watched ? "primary" : "" }>
            <CardImg top width="100%" src={ image } alt={ name }/>
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                <CardText><small dangerouslySetInnerHTML={ { __html: summary } }/></CardText>
                <CardText>
                <small className="text-muted">{ premiered }</small> <br />
                <small><a target="_blink" href={ url }>Visit movie page</a></small> <br />
                </CardText>
                <Row>
                <Col>
                    <Button
                    size="sm"
                    onClick={ () => { onchange(id) }}
                    variant={ watched ? "seccess" : "outline-secondary"}
                    >
                    { watched ? "Смотрел" : "Не смотрел"}
                    </Button>
                </Col>
                <Col>
                    <Button
                    size="sm"
                    onClick={ () => { onViewMore(id) } }
                    variant="info"
                    >
                    Детали
                    </Button>
                </Col>
                </Row>
            </CardBody>
            </Card>
      </div>
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


