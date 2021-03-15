import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as ActionCreators from './store/action_creatores';
import { Err } from './components/err';
import { MovieCard } from './components/movieCard';
import { 
  Container, 
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
   
  }

  renderCard = ()=>{

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
      } = item.show || {};
     
      
      return <MovieCard
              id={ id }
              name={ name }
              url={ url }
              summary={ summary }
              premiered={ premiered }
              image={ image.medium }
            />; 

    });   
  };

  render() {
    
    if (this.state.errState !== null) {
      return <Err />
    }
  
    return (
        <Container>
          <Row>
            <Col sm="12">
              <div style={ { display: "flex", flexWrap: "wrap", justifyContent: "space-between" } }>
                { 
                  this.renderCard()
                } 
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
  
}
const mapStateToProps = (globalStorage) =>{
  return {
    moviesList: globalStorage.app.movies || [],
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getMovies: (payload) => dispatch(ActionCreators.getMovies(payload)),
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(App);