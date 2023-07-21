const axios = require('axios');

app.get('/posts', (req, res) => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).send();
    });
});
