import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { searchText: '' };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchText: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel111}>
              <AiOutlineSearch />
            </span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            name="searchText"
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSearch: PropTypes.func.isRequired };

/* ====================== MEMO ================== Variant 2 Only with onSubmit */
// export default class Searchbar extends Component {

//   handleSubmit = event => {
//     event.preventDefault();
//     const searchText = event.target.elements.search.value;
//     this.props.onSearch(searchText);
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.searchFormButton}>
//             <span className={css.searchFormButtonLabel111}>
//               <AiOutlineSearch />
//             </span>
//           </button>

//           <input
//             className={css.searchFormInput}
//             type="text"
//             name="search"
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
