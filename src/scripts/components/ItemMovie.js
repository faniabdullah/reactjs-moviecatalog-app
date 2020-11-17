import React from 'react';
import CONFIG from '@/globals/config';

class ItemMovie extends React.Component {
  render() {
    const movie = this.props.dataMovie;
    return (
      <div className="movie-item card-1">
        <div className="movie-item__header">
          <img className="movie-item__header__poster" alt={movie.title}
            src={movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'} />
          <div className="movie-item__header__rating">
            <p>⭐️<span className="movie-item__header__rating__score">{movie.vote_average || '-'}</span></p>
          </div>
        </div>
        <div className="movie-item__content">
          <h3 className="movie__title"><a href="${`/#/detail/${movie.id}`}">{movie.title || '-'}</a></h3>
          <p>{movie.overview || '-'}</p>
        </div>
      </div>
    );
  }
}

export default ItemMovie;
