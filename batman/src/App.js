import React from 'react';
import './App.css';
import { Err } from './components/err'
import { MovieCard } from './components/movieCard'
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

   
    const onViewMore = () => null
    const onchange = () => null
    const watched = false;

   if (this.state.list.length === 0){
     return null;
   }
    return this.state.list.map((item) => {

      const {
        id,
        name = "",
        url = "",
        summary= "", 
        premiered= "",
        image = {},
      } = item.show || {}
     
      
      return <MovieCard />; 

    });   
    );
  };

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


