import React from 'react';
import ItemMovie from './ItemMovie';


class ListMovie extends React.Component {
  render() {
    if (this.props.movies.length <= 0) {
      return (
        <section className="msg-failed mt2">
          <h2 className="center">there is no movie data to display</h2>
        </section>
      );
    }

    return (
      <section className="list-movie mt2">{
        this.props.movies.map((movie, i) => {
          return (<ItemMovie key={i} dataMovie = {movie} />);
        })
      }
      </section>
    );
  }
}


export default ListMovie;
