import React from 'react';

class ModeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: this.props.isDark,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setDark() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('preferredTheme', 'dark');
  }

  setLight() {
    localStorage.removeItem('preferredTheme');
    document.documentElement.setAttribute('data-theme', 'light');
  }

  handleClick() {
    this.setState((prevState) => ({
      isDark: !prevState.isDark,
    }));
  }

  render() {
    this.state.isDark ? this.setDark() : this.setLight();
    return (
      <button className="set-mode"
        onClick={this.handleClick}
        aria-label="Change theme mode">
        <span className="material-icons" aria-hidden="true">
          {this.state.isDark ? 'brightness_5' : 'brightness_3'}
        </span>
      </button>
    );
  }
}


export default ModeTheme;
