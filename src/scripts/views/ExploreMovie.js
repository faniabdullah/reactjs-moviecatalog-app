import React from 'react';
import ReactDOM from 'react-dom';
import TheMovieDbSource from '@/data/TheMovieDbSource'
import CONFIG from '@/globals/config';  

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

class ListMovie extends React.Component {
    render() {
        return (
            <section className="list-movie mt2"> {
                this.props.movies.map((movie ,i) => {
                    console.log('masuk');
                  return(<ItemMovie key={i} dataMovie = {movie} />) 
                })
             }
            </section>
        );
    }
}


class ExploreMovie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            inStockOnly: false
        };
    }

    async componentDidMount() {
        const data = await TheMovieDbSource.nowPlayingMovies();
        this.setState({ data: data });
    }
    render(){
        return (
            <React.Fragment>
                <SearchBar />
                <ListMovie 
                    movies = {this.state.data}
                />
            </React.Fragment>
        );
    }
}


    ReactDOM.render (
        <ExploreMovie/>,
        document.getElementById('mainContent')
    )




