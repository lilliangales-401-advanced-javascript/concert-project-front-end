const API = process.env.REACT_APP_BACKEND_API;

const get = (payload) => {
  return {
    type: 'FETCH_CONCERTS',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_CONCERTS',
    payload,
  };
};


const fetchConcerts = () => (dispatch) => {
  return fetch(`${API}/api/v1/concerts`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

const addConcerts = (concerts) => (dispatch) => {
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
    .then((data) => dispatch(add(data)));
};

export default {
  fetchConcerts,
  addConcerts,
};
