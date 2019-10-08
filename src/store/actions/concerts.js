import cookie from 'react-cookies';

const API = process.env.REACT_APP_BACKEND_API;

const getData = (payload) => {
  return {
    type: 'FETCH_CONCERTS',
    payload,
  };
};

const addData = (payload) => {
  return {
    type: 'ADD_CONCERTS',
    payload,
  };
};

const deleteData = (payload) => {
  return {
    type: 'DELETE_CONCERTS',
    payload,
  };
};

const updateData = (payload) => {
  return {
    type: 'UPDATE_CONCERTS',
    payload,
  };
};

const fetchConcerts = () => (dispatch) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie.load('auth')}`,
    }
  };
  return fetch(`${API}/api/v1/concerts`, options)
    .then((results) => results.json())
    .then((data) => dispatch(getData(data)));
};

const addConcerts = (concerts) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(concerts),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${cookie.load('auth')}`,
    },
  };
 
  return fetch(`${API}/api/v1/concerts`, options)
    .then((results) => results.json())
    .then((data) => dispatch(addData(data)));
};

const deleteConcerts = (id) => (dispatch) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${cookie.load('auth')}`,
    },
  };

  fetch(`${API}/api/v1/concerts/${id}`, options)
    .then(() => dispatch(deleteData(id)));
};

const updateConcerts = (data) => (dispatch) => {
  const { id } = data;
  const { artist } = data;
  const date = data.artist;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${cookie.load('auth')}`,
    },
  };
  fetch(`${API}/api/v1/concerts/${id}`, options)
    .then(() => dispatch(updateData(data)));
};

export default {
  fetchConcerts,
  addConcerts,
  deleteConcerts,
  updateConcerts,
};
