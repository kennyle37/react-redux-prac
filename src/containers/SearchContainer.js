import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

//create a mapDispatch to prop
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => {
      dispatch(handleSearchChange(q));
    }
  };
};

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
