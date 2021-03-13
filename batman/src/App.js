import React from 'react';
import './App.css';
import { Err } from './components/err'
import { 
  Button, 
  Container, 
  Card, 
  CardImg, 
  CardBody, 
  CardSubtitle, 
  CardText, 
  CardTitle, 
  Col, 
  Row } from 'reactstrap';


export class App extends React.PureComponent {

  constructor(props){
    super(props)

    this.state = {
      list: [],
      watched: [],
      errState: null,
    }
  }

  componentDidMount(){
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

  renderCard = ()=>{
    const item = this.state.list[0] ? this.state.list[0].show : {};

    const {
      id,
      name = "",
      url = "",
      summary= "", 
      premiered= "",
      image = {},
    } = item
   
    const onViewMore = () => null
    const onchange = () => null
    const watched = false;

   
    return (

      <div>
        <Card color={ watched ? "primary" : "" }>
          <CardImg top width="100%" src={ image.medium } alt={ name }/>
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
      
    );
  }

  render() {
    
    if (this.state.errState !== null) {
      return <Err />
    }
  
    return (
        <Container>
          <Row>
            <Col sm="4">
            {
              this.renderCard()
            }
            </Col>
          </Row>
        </Container>
    );
  }
  
}


