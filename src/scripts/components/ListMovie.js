import React from 'react';
import ItemMovie from './ItemMovie';


class ListMovie extends React.Component {
  render() {
    return (
      <section className="list-movie mt2"> {
        this.props.movies.map((movie, i) => {
          console.log('masuk');
          return (<ItemMovie key={i} dataMovie = {movie} />);
        })
      }
      </section>
    );
  }
}


export default ListMovie;
