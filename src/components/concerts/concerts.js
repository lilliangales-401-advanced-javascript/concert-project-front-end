import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import concertActions from '../../store/actions/concerts';

const Concerts = (props) => {
  const [concertArtist, setConcertArtist] = useState('');
  const [concertDate, setConcertDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.addConcerts({ artist: concertArtist, date: setConcertDate });
  }

  useEffect(() => {
    props.fetchConcerts();
  }, []);

  return (
    <>
    <ul> 
      {props.concerts.map((concert, index) => (
        <li key={index}>
          <p>{concert.artist}</p>
          <p>{concert.date}</p>
        </li>
      ))}
    </ul>
    <form onSubmit={handleSubmit}>
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
  );
};

const mapStateToProps = (state) => ({
  concerts: state.concerts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchConcerts: () => dispatch(concertActions.fetchConcerts()),
  addConcerts: (data) => dispatch(concertActions.addConcerts(data)),
});

Concerts.propTypes = {
  fetchConcerts: PropTypes.func,
  addConcerts: PropTypes.func,
  concerts: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Concerts);
