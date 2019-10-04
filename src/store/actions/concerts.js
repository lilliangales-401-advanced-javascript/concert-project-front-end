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
  return fetch(`${API}/api/v1/concerts`)
    .then((results) => results.json())
    .then((data) => dispatch(getData(data)));
};

const addConcerts = (concerts) => (dispatch) => {
  console.log(concerts);
  const options = {
    method: 'POST',
    body: JSON.stringify(concerts),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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
    },
  };

  fetch(`${API}/api/v1/concerts/${id}`, options)
    .then(() => dispatch(deleteData(id)));
};

const updateConcerts = (data) => (dispatch) => {
  const id = data.id;
  const artist = data.artist;
  const date = data.artist;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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
