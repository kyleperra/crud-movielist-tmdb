import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      watchLaterVideos: []
    };
  }

  render() {
    return(
      <h1>Hello React</h1>
    );
  };
}


export default App;