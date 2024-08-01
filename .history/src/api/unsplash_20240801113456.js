import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': 'Client-ID _89lfBWT1BsHUcvzx_B2AGd2kZZvCTxGEb796F9OflI'
  }
});

unsplash.get('/photos')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
    console.error('Status:', error.response.status);
    console.error('Headers:', error.response.headers);
  });