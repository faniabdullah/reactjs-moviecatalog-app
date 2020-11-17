const createMovieItemTemplate = (movie) => `
<div class="movie-item">
  <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.title || '-'}"
          src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
          <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average || '-'}</span></p>
      </div>
  </div>
  <div class="movie-item__content">
      <h3 class="movie__title"><a href="${`/#/detail/${movie.id}`}">${movie.title || '-'}</a></h3>
      <p>${movie.overview || '-'}</p>
  </div>
</div>
`;