import React, { Component } from 'react';
import superagent from 'superagent';
import Auth from '../auth/auth';
import cookie from 'react-cookies';


class ArtistForm extends Component {
  state = {
    selectedArtist: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.selectedArtist);
  }

  onSubmit = (event) => {
    event.preventDefault();
    superagent.post(`${process.env.REACT_APP_BACKEND_API}/search`)
      // .set('Content-Type', 'application/json')
      // .set('Authorization', `Bearer ${cookie.load(auth)}`)
      // .send({ selectedArtist: JSON.stringify(this.state.selectedArtist) })
      .then((result) => {
        console.log('RESULT', result.body);
      });
  }


  render() {
    return (
      <div className="Form">
        <Auth capability="read">
        <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} label="Selected Artist" name="selectedArtist" />
            <br/>
            <button type='Submit' variant="contained" color="primary"> Send Artist </button>
        </form>
        </Auth>
      </div>
    );
  }
}

export default ArtistForm;
