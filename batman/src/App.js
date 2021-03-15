import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import * as ActionCreators from './store/action_creatores';
import { Err } from './components/err';
import { Container } from 'reactstrap';


class App extends React.PureComponent {

  static propTypes = {
    moviesList: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired,
    errState: PropTypes.bool,
  }

  componentDidMount(){
    this.props.getMovies("batman");
  }

    

  render() {
    
    if (this.props.errState !== null) {
      return <Err />
    }
  
    return (
        <Container>
          {
            this.props.children
          }
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

const mapDispatchToProps = (dispatcher) =>{
  return {
    getMovies: (payload) => dispatcher(ActionCreators.getMovies(payload)),
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(App);

export default connected;