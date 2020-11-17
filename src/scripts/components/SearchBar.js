import React from 'react';

class SearchBar extends React.Component {
  render() {
    const filterText = this.props.filterText;
    return (
      <section className="search-bar mt2">
        <div className="input-group">
          <i className="material-icons input-icons" >search</i>
          <input type="text" className="input-area" value={filterText} required id="elmSearchMenu"/>
          <label htmlFor="elmSearchMenu" className="label"> Search Movie </label>
        </div>
      </section>
    );
  }
}


export default SearchBar;
