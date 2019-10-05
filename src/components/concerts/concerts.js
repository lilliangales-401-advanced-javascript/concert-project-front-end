import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import concertActions from '../../store/actions/concerts';
import Auth from '../auth/auth';

const uuidv1 = require('uuid/v1');

const Concerts = (props) => {
  const [concertArtist, setConcertArtist] = useState('');
  const [concertDate, setConcertDate] = useState('');

  const [concertUpdateArtist, setConcertUpdateArtist] = useState('');
  const [concertUpdateDate, setConcertUpdateDate] = useState('');

  function handleCreateSubmit(event) {
    event.preventDefault();
    props.addConcerts({ id: uuidv1(), artist: concertArtist, date: concertDate });
  }

  function handleDelete(event) {
    event.preventDefault();
    props.deleteConcerts(event.target.id);
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();
    props.updateConcerts(
      { id: event.target.id, artist: concertUpdateArtist, date: concertUpdateDate },
    );
  }

  useEffect(() => {
    props.fetchConcerts();
  }, []);

  return (
    <Auth capability="read">
    <>
    <ul> 
      {props.concerts.map((concert, index) => (
        

        <li key={index}>
          <p>{concert.artist}</p>
          <p>{concert.date}</p>   
      <form id={concert.id} onSubmit={handleUpdateSubmit}>
      <input
          type="text"
          placeholder="artist"
          value={concertUpdateArtist}
          onChange={(event) => setConcertUpdateArtist(event.target.value)}
        />
        <input
          type="text"
          placeholder="date"
          value={concertUpdateDate}
          onChange={(event) => setConcertUpdateDate(event.target.value)}
        />     
       <button type="submit">Update</button>
      </form> 
        <button id={concert.id} onClick={handleDelete} type="submit"> Delete</button>
        </li>
      ))}
    </ul>

    <form onSubmit={handleCreateSubmit}>
        <input
          type="text"
          placeholder="artist"
          value={concertArtist}
          onChange={(event) => setConcertArtist(event.target.value)}
        />
        <input
          type="text"
          placeholder="date"
          value={concertDate}
          onChange={(event) => setConcertDate(event.target.value)}
        />     
       <button type="submit">Submit</button>
    </form>
    </>
    </Auth>
  );
};

const mapStateToProps = (state) => ({
  concerts: state.concerts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchConcerts: () => dispatch(concertActions.fetchConcerts()),
  addConcerts: (data) => dispatch(concertActions.addConcerts(data)),
  deleteConcerts: (data) => dispatch(concertActions.deleteConcerts(data)),
  updateConcerts: (data) => dispatch(concertActions.updateConcerts(data)),
});

Concerts.propTypes = {
  fetchConcerts: PropTypes.func,
  addConcerts: PropTypes.func,
  deleteConcerts: PropTypes.func,
  updateConcerts: PropTypes.func,
  concerts: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Concerts);
