import React, { Component } from 'react';
import superagent from 'superagent';

class App extends Component {
  state = {
    // response: '',
    // post: '',
    // responseToPost: '',
    selectedArtist: '',
  };


  // componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callAPI()
  //     .then((res) => this.setState({ response: res.express }))
  //     .catch((err) => console.log(err));
  // }

  callAPI = async () => {
    const response = await fetch('/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    superagent.post(`${process.env.REACT_APP_BACKEND_API}/search`)
      .set('Content-Type', 'application/json')
      .send({ selectedArtist: JSON.stringify(this.state.selectedArtist) })
      .then((result) => {
        console.log('RESULT', result.body);
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
        <p>{this.state.response}</p>
        </ul>
        <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} label="Selected Artist" name="selectedArtist" />
                <br/>
                <button type='Submit' variant="contained" color="primary">
                  Send
                </button>
        </form>
      </div>
    );
  }
}


export default App;
