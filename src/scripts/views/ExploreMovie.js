import React from 'react';
import TheMovieDbSource from '@/data/TheMovieDbSource';
import SearchBar from '@/components/SearchBar';
import ListMovie from '@/components/ListMovie';


class ExploreMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const data = await TheMovieDbSource.nowPlayingMovies();
    this.setState({data: data});
  }
  render() {
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


export default ExploreMovie;


