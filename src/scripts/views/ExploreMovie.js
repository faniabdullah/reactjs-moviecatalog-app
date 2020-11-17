import React from 'react';
import TheMovieDbSource from '@/data/TheMovieDbSource';
import SearchBar from '@/components/SearchBar';
import ListMovie from '@/components/ListMovie';


class ExploreMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterText: '',
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  async handleFilterTextChange(filterText) {
    const movieSearh = await TheMovieDbSource.searchMovies(filterText) || await TheMovieDbSource.nowPlayingMovies();
    this.setState({
      filterText: filterText,
      data: movieSearh,
    });
  }

  async componentDidMount() {
    const data = await TheMovieDbSource.nowPlayingMovies();
    this.setState({data: data});
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ListMovie
          movies = {this.state.data}
        />
      </React.Fragment>
    );
  }
}


export default ExploreMovie;


