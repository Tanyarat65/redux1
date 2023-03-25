import React from 'react';
import './App.css';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
  return{
    data : state.count
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    plus : (action) => dispatch(action),
    subtract : (action) => dispatch(action),
    reset : (action) => dispatch(action),
  }
}
class App extends React.Component {
  render(){

    return (
      <div className="App">
        <div>
          <button onClick={()=>this.props.plus({type: "INCREATE"})}>+</button>
          {this.props.data}
          <button onClick={()=>this.props.subtract({type: "DECREATE"})}>-</button>
          <button onClick={()=>this.props.reset({type: "RESET"})}>reset</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
