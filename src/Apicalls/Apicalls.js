const API = "https://warm-bayou-88011.herokuapp.com/api";

exports.getTshirts = () => {
  return fetch(`${API}/tshirt/get/all`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.getATshirts = (id) => {
  return fetch(`${API}/tshirt/get/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
