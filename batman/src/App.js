import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import './App.css';
import * as ActionCreators from './store/action_creatores';
import { Err } from './components/err';
import { MovieCard } from './components/movieCard';
import { 
  Container, 
  Col, 
  Row } from 'reactstrap';


class App extends React.PureComponent {

  static propTypes = {
    moviesList: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired,
    errState: PropTypes.string,
  }

  componentDidMount(){
    this.props.getMovies("batman");
  }

  renderCard = ()=>{

    const { moviesList } = this.props;
    if (moviesList.length === 0){
     return null;
    }
    return moviesList.map((item) => {

      const {
        id,
        name = "",
        url = "",
        summary= "", 
        premiered= "",
        image = {},
      } = item.show || {};
     
      
      return <MovieCard
              key={ id }
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
    
    if (this.props.errState !== null) {
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
    errState: globalStorage.app.errState,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getMovies: (payload) => dispatch(ActionCreators.getMovies(payload)),
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(App);

export default connected;