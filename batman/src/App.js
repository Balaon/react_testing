import React from 'react';
import './App.css';
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
      watchde: [],
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
      });
  }

  renderCard = ()=>{
    const item = this.state.list[0] ?this.state.list[0].show : {};

    const {
      name = "",
      url = "",
      image = {},
    } = item
   
    return (
      <Card>
        <CardImg top width="100%" scr={ image.medium } alt={ name }/>
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }

  render() {
  
    return (
        <Container>
          <Row>
            <Col>
            {
              this.renderCard()
            }
            </Col>
          </Row>
        </Container>
    );
  }
  
}


