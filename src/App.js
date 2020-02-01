import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem()
  }

  render() {
    // debugger
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, { addItem: addItem })(App);

//another shorter way of doing the same, using arrow function as a first argument:
// export default connect(state => ({ items: state.items }, { addItem: addItem })(App);



//an alternative way, longer way of using mapDispatchToProps function

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);